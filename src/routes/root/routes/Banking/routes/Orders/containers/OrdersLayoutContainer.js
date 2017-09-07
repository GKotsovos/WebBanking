import { connect } from 'react-redux';
import { setOrderType, setNewOrder} from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import OrdersLayout from '../components/OrdersLayout';

const mapStateToProps = (state) => ({
  orderType: state.orders.transactionForm.orderType,
});

const mapActionCreators = {
  setOrderType: (orderText, orderType) => setOrderType (orderText, orderType),
  setNewOrder: () => setNewOrder (),
};

export default connect(mapStateToProps, mapActionCreators)(OrdersLayout);
