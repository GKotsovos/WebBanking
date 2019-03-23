import { map } from "underscore";

export const getPayentBank = (paymentMethod) => {
  return paymentMethod.toUpperCase().includes('AGILE') ? 'AGILE BANK' : ''
}

export const getPaymentBeneficiary = (paymentMethod) => {
  return paymentMethod.toUpperCase().includes('AGILE') ? 'AGILE BANK' : paymentMethod
}

export const getCreditProductType = (paymentMethod) => {
  let creditProductType = '';
  if (paymentMethod.includes('ΚΑΡΤΑ')) {
    creditProductType = 'isCreditCard';
  } else if (paymentMethod.includes('ΔΑΝΕΙΟ')) {
    creditProductType = 'isLoan';
  }
  return creditProductType;
}

export const getPaymentUrl = (bank, creditProductType) => {
  let url = 'http://localhost:26353/api/Payment/ThirdPartyPayment';
  if (bank == 'AGILE BANK' && creditProductType == 'isCreditCard') {
    url = 'http://localhost:26353/api/Payment/CreditCardPayment';
  } else if (bank == 'AGILE BANK' && creditProductType == 'isLoan') {
    url = 'http://localhost:26353/api/Payment/LoanPayment';
  }
  return url;
}

export const getPaymentSubCategories = (transactionForm) => {
  return [...new Set(
    transactionForm.paymentMethods[transactionForm.paymentSelections.category]
      .filter((payment) => payment.subCategory != " ")
      .map((payment) => payment.subCategory)
  )];
}

export const getAvailablePaymentMethods = (transactionForm) => {
  let payments = [];
  if (transactionForm.shouldSearch) {
    payments = map(transactionForm.paymentMethods, (paymentMethod) => paymentMethod.map(method => method.name))
      .flatMap(paymentMethod => paymentMethod);
  } else if (transactionForm.availableSubCategories.length > 0) {
    payments = transactionForm.paymentMethods[transactionForm.paymentSelections.category]
       .filter((payment) => payment.subCategory == transactionForm.paymentSelections.subCategory)
       .map((payment) => payment.name);
  } else {
    payments = transactionForm.paymentMethods[transactionForm.paymentSelections.category]
       .filter((payment) => payment.category == transactionForm.paymentSelections.category)
       .map((payment) => payment.name)
  }
  return payments;
}
