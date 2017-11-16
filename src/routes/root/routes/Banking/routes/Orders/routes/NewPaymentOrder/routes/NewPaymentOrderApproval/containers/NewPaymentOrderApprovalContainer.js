import { connect } from 'react-redux';
import { createPaymentOrder } from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import NewPaymentOrderApproval from '../components/NewPaymentOrderApproval';

const mapStateToProps = (state) => ({
  newOrderForm: state.orders.newOrderForm,
  language: state.root.language,
});

const mapActionCreators = {
  createPaymentOrder: (newOrderForm) => createPaymentOrder (newOrderForm),
};

export default connect(mapStateToProps, mapActionCreators)(NewPaymentOrderApproval);
