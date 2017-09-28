import { connect } from 'react-redux';
import { initPaymentTransactionForm } from '../modules/payments';
import PaymentsLayout from '../components/PaymentsLayout';

const mapActionCreators = {
  initPaymentTransactionForm: () => initPaymentTransactionForm(),
};

export default connect(null, mapActionCreators)(PaymentsLayout);
