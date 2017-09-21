import { connect } from 'react-redux';
import {
  initializeState,
  getTransferOrders,
  getPaymentOrders,
} from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import OrdersLayout from '../components/OrdersLayout';

const mapStateToProps = (state) => ({
  orderState: state.orders,
});

const mapActionCreators = {
  initializeState: () => initializeState(),
  getTransferOrders: () => getTransferOrders(),
  getPaymentOrders: () => getPaymentOrders(),
};

export default connect(mapStateToProps, mapActionCreators)(OrdersLayout);
