import { connect } from 'react-redux';
import { initNewPaymentOrderForm } from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import NewPaymentOrderLayout from '../components/NewPaymentOrderLayout';

const mapActionCreators = {
  initNewPaymentOrderForm: () => initNewPaymentOrderForm (),
};

export default connect(null, mapActionCreators)(NewPaymentOrderLayout);
