import { connect } from 'react-redux';
import {
  initLoanTransactionForm,
  setDebitAccount,
  setLoanPaymentAmount,
  setTransactionDate,
  validateLoanPaymentForm,
 } from 'routes/root/routes/Banking/routes/Loans/modules/loans';
import LoanPaymentForm from '../components';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  transactionForm: state.loans.transactionForm
});

const mapActionCreators = {
initLoanTransactionForm: () => initLoanTransactionForm(),
  setDebitAccount: (debitAccount) => setDebitAccount(debitAccount),
  setLoanPaymentAmount: (amount) => setLoanPaymentAmount(amount),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  validateLoanPaymentForm: () => validateLoanPaymentForm(),
};

export default connect(mapStateToProps, mapActionCreators)(LoanPaymentForm);
