import { connect } from 'react-redux';
import { cancelOrder } from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import ExistingAccountOrdersLayout from '../components/ExistingAccountOrdersLayout';

const mapStateToProps = (state) => ({
  accountOrders: state.orders.accountOrders,
});

const mapActionCreators = {
  cancelOrder: (orderId) => cancelOrder (orderId),
};

export default connect(mapStateToProps, mapActionCreators)(ExistingAccountOrdersLayout);
