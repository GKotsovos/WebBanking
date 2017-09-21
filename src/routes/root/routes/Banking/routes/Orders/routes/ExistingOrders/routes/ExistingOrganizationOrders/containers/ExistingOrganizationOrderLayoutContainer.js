import { connect } from 'react-redux';
import { cancelOrder } from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import ExistingOrganizationOrderLayout from '../components/ExistingOrganizationOrderLayout';

const mapStateToProps = (state) => ({
  organizationOrders: state.orders.organizationOrders,
});

const mapActionCreators = {
  cancelOrder: (orderId) => cancelOrder (orderId),
};

export default connect(mapStateToProps, mapActionCreators)(ExistingOrganizationOrderLayout);
