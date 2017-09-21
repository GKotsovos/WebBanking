import { connect } from 'react-redux';
import { clearTransferTransactionForm } from 'routes/root/routes/Banking/routes/Transfers/modules/transfers';
import TransferResult from '../components';

const mapStateToProps = (state) => ({
  result: state.transfers.transactionForm.result,
  errorMessage: state.transfers.transactionForm.errorMessage,
  linkToStart: state.transfers.transactionForm.linkToStart,
});

const mapActionCreators = {
  clearTransferTransactionForm: () => clearTransferTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(TransferResult);
