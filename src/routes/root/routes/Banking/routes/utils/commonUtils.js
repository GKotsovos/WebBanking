import { getAccountById } from 'routes/root/routes/Banking/routes/Accounts/modules/accounts';
import { getCreditCardById, getPrepaidCardById } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import { getLoanById } from 'routes/root/routes/Banking/routes/Loans/modules/loans';
import dateformat from 'dateformat';
import _ from 'underscore';

export const getDebitAccount = (debitAccountType, debitAccountId) => {
  switch (debitAccountType) {
    case "isAccount":
      getAccountById(debitAccountId)
      break;
    case "isLoan":
      getLoanById(debitAccountId)
      break;
    case "isCreditCard":
      getCreditCardById(debitAccountId)
      break;
    case "isPrepaidCard":
      getPrepaidCardById(debitAccountId)
      break;
  }
}

const findDebitAccount = (debitAccountType, debitAccountId, state) => {
  let debitAccount = {};

  switch (debitAccountType) {
    case "isAccount":
      debitAccount = _.chain(state.accounts.accounts)
        .filter((account) => account.id == debitAccountId)
        .first()
        .value();
      break;
    case "isLoan":
      debitAccount = _.chain(state.loans.loans)
        .filter((loan) => loan.id == debitAccountId)
        .first()
        .value();
      break;
    case "isCreditCard":
      debitAccount = _.chain(state.cards.creditCards)
        .filter((creditCard) => creditCard.id == debitAccountId)
        .first()
        .value();
      break;
    case "isPrepaidCard":
      debitAccount = _.chain(state.cards.prepaidCards)
        .filter((prepaidCard) => prepaidCard.id == debitAccountId)
        .first()
        .value();
      break;
  }

  return debitAccount;
}

export const getDebitAccountAvailableBalance = (debitAccountType, debitAccountId, state) => {
  const debitAccount =  findDebitAccount(debitAccountType, debitAccountId, state);
  return getProductAvailableBalance(debitAccount, debitAccountType);
}

export const getProductAvailableBalance = (debitAccount, debitAccountType) => {
  let availableBalance = 0;
  switch (debitAccountType) {
    case "isAccount":
      availableBalance = debitAccount.ledgerBalance;
      break;
    case "isLoan":
    case "isCreditCard":
    case "isPrepaidCard":
      availableBalance = debitAccount.availableBalance;
      break;
  }
  return availableBalance;
}

export const getDebitAccountCurrency = (debitAccountType, debitAccountId, state) => {
  return findDebitAccount(debitAccountType, debitAccountId, state).currency;
}

export const isValidDate = (date) => {
  return new Date(date).setHours(0,0,0,0) >= new Date(dateformat()).setHours(0,0,0,0)
}

export const isValidInstallmentPaymentAmount = (product, amount, availableBalance) => {
  return amount > 0 &&
   (parseFloat(amount) <= product.nextInstallmentAmount ||
    parseFloat(amount) <= product.debt) &&
   parseFloat(amount) <= availableBalance
}

export const isValidInstallmentPaymentForm = (transactionForm) => {
  return transactionForm.debitAccount.correct &&
    transactionForm.amount.correct &&
    transactionForm.date.correct
}

export const getPaymentType = (paymentMethod) => {
  let paymentType = '';

  switch (paymentMethod) {
    case 'ΚΑΡΤΑ AGILE BANK':
      paymentType = 'isCreditCardAgile';
      break;
    case 'ΚΑΡΤΑ ΑΛΛΗΣ ΤΡΑΠΕΖΗΣ':
      paymentType = 'isCreditCardThirdParty';
      break;
    case 'ΔΑΝΕΙΟ AGILE BANK':
      paymentType = 'isLoan';
      break;
    default:
      paymentType = 'thirdPartyPayment';
  }
  return paymentType;
}

export const getCustomerName = (fullCustomerName) => {
  return (fullCustomerName.firstName + ' ' + fullCustomerName.lastName)
    .replace('ά', 'α')
    .replace('έ', 'ε')
    .replace('ί', 'ι')
    .replace('ή', 'η')
    .replace('ό', 'ο')
    .replace('ύ', 'υ')
    .replace('ώ', 'ω');
}

export const getActualFullName = (fullName, currentFullName) => {
  const correctPattern = new RegExp("^[A-Za-zΑ-Ωα-ω ]+$");
  return fullName = (correctPattern.test(fullName) || fullName == '' ? fullName : currentFullName).toUpperCase();
}

export const isValidFullName = (fullName) => fullName.split(' ').length == 2

export const isValidDebitAmount = (amount, availableBalance) => {
  return amount > 0 && (parseFloat(amount)) <= availableBalance
}

export const isValidChargesBeneficiary = (beneficiary) => {
  return beneficiary == 'both' || beneficiary == 'sender' || beneficiary == 'beneficiary'
}

export const findPaymentCharges = (paymentMethods, paymentName) => {
  return _.chain(paymentMethods)
    .map((paymentMethod) => _.map(paymentMethod, (method) => method))
    .flatten()
    .filter(payment => payment.name == paymentName)
    .first()
    .value().charges
}

export const findTransferCharges = (beneficiary) => {
  let charges = 0;
  switch (beneficiary) {
    case 'both':
      charges = 3;
      break;
    case 'sender':
      charges = 6;
      break;
    case 'beneficiary':
      charges = 0;
      break;
  }
  return charges;
}

export const getImmediateText = (language) => {
  let immediateText = '';
  switch (language) {
    case 'greek':
      immediateText = 'ΑΜΕΣΑ';
      break;
    case 'english':
      immediateText = 'IMMEDIATE';
      break;
  }
  return immediateText;
}
