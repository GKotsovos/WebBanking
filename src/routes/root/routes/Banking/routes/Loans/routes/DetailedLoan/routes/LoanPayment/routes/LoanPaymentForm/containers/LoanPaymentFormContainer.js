import { connect } from 'react-redux';
import {
  setDebitAccount,
  setLoanPaymentAmount,
  setTransactionDate,
  validateLoanPaymentForm,
  clearLoanTransactionForm
 } from 'routes/root/routes/Banking/routes/Loans/modules/loans';
import LoanPaymentForm from '../components';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  transactionForm: state.cards.transactionForm
});

const mapActionCreators = {
  setDebitAccount: (debitAccount) => setDebitAccount(debitAccount),
  setLoanPaymentAmount: (amount) => setLoanPaymentAmount(amount),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  validateLoanPaymentForm: () => validateLoanPaymentForm(),
  clearLoanTransactionForm: () => clearLoanTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(LoanPaymentForm);
