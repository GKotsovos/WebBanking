import { connect } from 'react-redux';
import { createTransferOrder } from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import NewTransferOrderApproval from '../components/NewTransferOrderApproval';

const mapStateToProps = (state) => ({
  newOrderForm: state.orders.newOrderForm,
});

const mapActionCreators = {
  createTransferOrder: (newOrderForm) => createTransferOrder (newOrderForm),
};

export default connect(mapStateToProps, mapActionCreators)(NewTransferOrderApproval);
