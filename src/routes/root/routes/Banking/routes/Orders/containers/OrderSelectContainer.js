import { connect } from 'react-redux';
import {
  changeActiveOrderType,
  linkToNewOrder
} from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import OrderSelect from '../components/OrderSelect';

const mapStateToProps = (state) => ({
  activeOrder: state.orders.activeOrder,
  language: state.root.language,
});

const mapActionCreators = {
  changeActiveOrderType: (selection, orderType) => changeActiveOrderType(selection, orderType),
  linkToNewOrder: (activeOrder) => linkToNewOrder(activeOrder),
};

export default connect(mapStateToProps, mapActionCreators)(OrderSelect);
