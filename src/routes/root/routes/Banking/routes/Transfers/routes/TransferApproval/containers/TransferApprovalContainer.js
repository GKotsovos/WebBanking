import { connect } from 'react-redux';
import { transfer } from 'routes/root/routes/Banking/routes/Transfers/modules/transfers';
import TransferApproval from '../components';

const mapStateToProps = (state) => ({
  transactionForm: state.transfers.transactionForm,
  language: state.root.language,
});

const mapActionCreators = {
  transfer: (transactionForm) => transfer(transactionForm)
};

export default connect(mapStateToProps, mapActionCreators)(TransferApproval);
