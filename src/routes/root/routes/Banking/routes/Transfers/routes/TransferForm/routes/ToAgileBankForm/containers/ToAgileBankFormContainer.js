import { connect } from 'react-redux';
import {
  setCreditAccountType,
  setCreditAccount,
  setCreditFullName,
  setTransferAmount,
} from 'routes/root/routes/Banking/routes/Transfers/modules/transfers';
import ToAgileBankForm from '../components/ToAgileBankForm';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  creditAccount: state.transfers.transactionForm.creditAccount,
  fullName: state.transfers.transactionForm.fullName,
  amount: state.transfers.transactionForm.amount,
});

const mapActionCreators = {
  setCreditAccountType: (creditAccountType) => setCreditAccountType(creditAccountType),
  setCreditAccount: (account, type) => setCreditAccount (account, type),
  setCreditFullName: (fullName) => setCreditFullName (fullName),
  setTransferAmount: (amount) => setTransferAmount (amount),
};

export default connect(mapStateToProps, mapActionCreators)(ToAgileBankForm);
