import { connect } from 'react-redux';
import {
  setCreditAccount,
  setCreditFullName,
  setTransferAmount,
} from 'routes/root/routes/Banking/routes/Transfers/modules/transfers';
import ToAgileBankForm from '../components/ToAgileBankForm';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts.filter(account => account.id != state.transfers.transactionForm.debitAccount.value),
  creditAccount: state.transfers.transactionForm.creditAccount,
  fullName: state.transfers.transactionForm.fullName,
  amount: state.transfers.transactionForm.amount,
  language: state.root.language,
});

const mapActionCreators = {
  setCreditAccount: (account, type) => setCreditAccount (account, type),
  setCreditFullName: (fullName) => setCreditFullName (fullName),
  setTransferAmount: (amount) => setTransferAmount (amount),
};

export default connect(mapStateToProps, mapActionCreators)(ToAgileBankForm);
