import { connect } from 'react-redux';
import { initTransferTransactionForm } from '../modules/transfers';
import TransfersLayout from '../components/TransfersLayout';

const mapActionCreators = {
  initTransferTransactionForm: () => initTransferTransactionForm(),
};

export default connect(null, mapActionCreators)(TransfersLayout);
