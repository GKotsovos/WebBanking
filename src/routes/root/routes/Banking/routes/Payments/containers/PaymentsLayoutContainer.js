import { connect } from 'react-redux';
import { initPaymentTransactionForm } from '../modules/payments';
import PaymentsLayout from '../components/PaymentsLayout';

const mapStateToProps = (state) => ({
  transactionForm: state.payments.transactionForm
});

const mapActionCreators = {
  initPaymentTransactionForm: () => initPaymentTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(PaymentsLayout);
