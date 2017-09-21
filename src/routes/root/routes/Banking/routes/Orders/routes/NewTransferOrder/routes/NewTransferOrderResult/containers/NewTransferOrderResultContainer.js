import { connect } from 'react-redux';
import { clearNewOrderForm } from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import NewTransferOrderResult from '../components/NewTransferOrderResult';

const mapStateToProps = (state) => ({
  result: state.orders.newOrderForm.result,
  errorMessage: state.orders.newOrderForm.errorMessage,
  linkToStart: state.orders.newOrderForm.linkToStart,
});

const mapActionCreators = {
  clearNewOrderForm: () => clearNewOrderForm (),
};

export default connect(mapStateToProps, mapActionCreators)(NewTransferOrderResult);
