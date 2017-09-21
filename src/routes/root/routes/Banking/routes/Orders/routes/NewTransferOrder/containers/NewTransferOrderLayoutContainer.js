import { connect } from 'react-redux';
import { initNewTransferOrderForm } from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import NewTransferOrderLayout from '../components/NewTransferOrderLayout';

const mapStateToProps = (state) => ({
  newOrderForm: state.orders.newOrderForm,
});

const mapActionCreators = {
  initNewTransferOrderForm: () => initNewTransferOrderForm (),
};

export default connect(mapStateToProps, mapActionCreators)(NewTransferOrderLayout);
