import { connect } from 'react-redux';
import { clearLoanTransactionForm } from 'routes/root/routes/Banking/routes/Loans/modules/loans';
import LoanPaymentForm from '../components';

const mapStateToProps = (state) => ({
  result: state.loans.transactionForm.result,
  linkToStart: state.loans.transactionForm.linkToStart,
});

const mapActionCreators = {
  clearLoanTransactionForm: () => clearLoanTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(LoanPaymentForm);
