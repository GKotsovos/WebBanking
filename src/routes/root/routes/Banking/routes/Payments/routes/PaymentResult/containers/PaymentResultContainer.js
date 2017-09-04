import { connect } from 'react-redux';
import { clearPaymentTransactionForm } from 'routes/root/routes/Banking/routes/Payments/modules/payments';
import PaymentResult from '../components';

const mapStateToProps = (state) => ({
  result: state.payments.transactionForm.result,
  errorMessage: state.payments.transactionForm.errorMessage,
  linkToStart: state.payments.transactionForm.linkToStart,
});

const mapActionCreators = {
  clearPaymentTransactionForm: () => clearPaymentTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(PaymentResult);
