import { connect } from 'react-redux';
import { initNewTransferOrderForm } from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import NewTransferOrderLayout from '../components/NewTransferOrderLayout';

const mapActionCreators = {
  initNewTransferOrderForm: () => initNewTransferOrderForm (),
};

export default connect(null, mapActionCreators)(NewTransferOrderLayout);
