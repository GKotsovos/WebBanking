import { connect } from 'react-redux';
import _ from 'underscore';
import {
  initLoanTransactionForm,
  setDebitAccount,
  setLoanPaymentAmount,
  setAsapLoanTransaction,
  setTransactionDate,
  validateLoanPaymentForm,
 } from 'routes/root/routes/Banking/routes/Loans/modules/loans';
import LoanPaymentForm from '../components';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loans: _.filter(state.loans.loans, (loan) => loan.id != state.loans.activeLoan.id),
  creditCards: state.cards.creditCards,
  prepaidCards: state.cards.prepaidCards,
  transactionForm: state.loans.transactionForm,
  language: state.root.language,
});

const mapActionCreators = {
  initLoanTransactionForm: () => initLoanTransactionForm(),
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount(debitAccount, debitAccountType),
  setLoanPaymentAmount: (amount) => setLoanPaymentAmount(amount),
  setAsapLoanTransaction: (isAsap) => setAsapLoanTransaction(isAsap),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  validateLoanPaymentForm: () => validateLoanPaymentForm(),
};

export default connect(mapStateToProps, mapActionCreators)(LoanPaymentForm);
