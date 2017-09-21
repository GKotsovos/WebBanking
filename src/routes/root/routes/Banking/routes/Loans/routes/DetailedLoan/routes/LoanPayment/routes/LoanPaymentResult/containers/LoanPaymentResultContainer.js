import { connect } from 'react-redux';
import { clearLoanTransactionForm } from 'routes/root/routes/Banking/routes/Loans/modules/loans';
import LoanPaymentResult from '../components';

const mapStateToProps = (state) => ({
  result: state.loans.transactionForm.result,
  errorMessage: state.loans.transactionForm.errorMessage,
  linkToStart: state.loans.transactionForm.linkToStart,
});

const mapActionCreators = {
  clearLoanTransactionForm: () => clearLoanTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(LoanPaymentResult);
