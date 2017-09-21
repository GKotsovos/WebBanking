import { connect } from 'react-redux';
import { cancelPaymentOrder } from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import ExistingPaymentOrderLayout from '../components/ExistingPaymentOrderLayout';

const mapStateToProps = (state) => ({
  paymentOrders: state.orders.paymentOrders,
});

const mapActionCreators = {
  cancelPaymentOrder: (orderId) => cancelPaymentOrder (orderId),
};

export default connect(mapStateToProps, mapActionCreators)(ExistingPaymentOrderLayout);
