import { connect } from 'react-redux';
import {
  initPaymentTransactionForm,
  setDebitAccount,
  setSearchPayment,
  setActivePaymentCategory,
  setActivePaymentSubCategory,
  setActivePaymentMethod,
  setPaymentCode,
  setPaymentAmount,
  setAsapTransaction,
  setTransactionDate,
} from 'routes/root/routes/Banking/routes/Payments/modules/payments';
import PaymentFormLayout from '../components/PaymentFormLayout';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loans: state.loans.loans,
  creditCards: state.cards.creditCards,
  prepaidCards: state.cards.prepaidCards,
  transactionForm: state.payments.transactionForm || {},
  language: state.root.language,
});

const mapActionCreators = {
  initPaymentTransactionForm: () => initPaymentTransactionForm(),
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount (debitAccount, debitAccountType),
  setSearchPayment: (shouldSearch) => setSearchPayment(shouldSearch),
  setActivePaymentCategory: (category) => setActivePaymentCategory(category),
  setActivePaymentSubCategory: (subCategory) => setActivePaymentSubCategory(subCategory),
  setActivePaymentMethod: (paymentMethod) => setActivePaymentMethod(paymentMethod),
  setPaymentCode: (paymentCode) => setPaymentCode(paymentCode),
  setPaymentAmount: (amount) => setPaymentAmount(amount),
  setAsapTransaction: (isAsap) => setAsapTransaction(isAsap),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
};

export default connect(mapStateToProps, mapActionCreators)(PaymentFormLayout);
