import { connect } from 'react-redux';
import { cancelTransferOrder } from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import ExistingTransferOrdersLayout from '../components/ExistingTransferOrdersLayout';

const mapStateToProps = (state) => ({
  transferOrders: state.orders.transferOrders,
  language: state.root.language,
});

const mapActionCreators = {
  cancelTransferOrder: (orderId) => cancelTransferOrder (orderId),
};

export default connect(mapStateToProps, mapActionCreators)(ExistingTransferOrdersLayout);
