import { connect } from 'react-redux';
import {
  initializeOrderState,
  getTransferOrders,
  getPaymentOrders,
} from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import OrdersLayout from '../components/OrdersLayout';

const mapStateToProps = (state) => ({
  orderState: state.orders,
});

const mapActionCreators = {
  initializeOrderState: () => initializeOrderState(),
  getTransferOrders: () => getTransferOrders(),
  getPaymentOrders: () => getPaymentOrders(),
};

export default connect(mapStateToProps, mapActionCreators)(OrdersLayout);
