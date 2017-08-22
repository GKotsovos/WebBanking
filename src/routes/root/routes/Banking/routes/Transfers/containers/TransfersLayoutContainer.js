import { connect } from 'react-redux';
import _ from 'underscore';
import { initTransferTransactionForm } from '../modules/transfers';
import TransfersLayout from '../components/TransfersLayout';

const mapStateToProps = (state) => ({
  transactionForm: state.transfers.transactionForm
});

const mapActionCreators = {
  initTransferTransactionForm: () => initTransferTransactionForm(),
};

export default connect(null, mapActionCreators)(TransfersLayout);
