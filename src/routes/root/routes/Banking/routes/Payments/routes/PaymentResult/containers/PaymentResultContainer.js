import { connect } from 'react-redux';
import { initPaymentTransactionForm } from 'routes/root/routes/Banking/routes/Payments/modules/payments';
import PaymentResult from '../components';

const mapStateToProps = (state) => ({
  result: state.payments.transactionForm.result,
  errorMessage: state.payments.transactionForm.errorMessage,
  linkToStart: state.payments.transactionForm.linkToStart,
  language: state.root.language,
});

const mapActionCreators = {
  initPaymentTransactionForm: () => initPaymentTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(PaymentResult);
