import { connect } from 'react-redux';
import { loanPayment } from 'routes/root/routes/Banking/routes/Loans/modules/loans';
import LoanPaymentApproval from '../components';

const mapStateToProps = (state) => ({
  transactionForm: state.loans.transactionForm,
});

const mapActionCreators = {
  loanPayment: () => loanPayment()
};

export default connect(mapStateToProps, mapActionCreators)(LoanPaymentApproval);
