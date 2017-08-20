import { connect } from 'react-redux';
import _ from 'underscore';
import {
  initTransferTransactionForm,
  setDebitAccount,
  setTransferAmount,
  setTransactionDate,
  validateTransferForm,
} from 'routes/root/routes/Banking/routes/Transfers/modules/transfers';
import TransferForm from '../components';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loans: state.loans.loans,
  creditCards: state.cards.creditCards,
  prepaidCards: state.cards.prepaidCards,
  transactionForm: state.transfers.transactionForm
});

const mapActionCreators = {
  initTransferTransactionForm: () => initTransferTransactionForm(),
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount(debitAccount, debitAccountType),
  setTransferAmount: (amount) => setTransferAmount(amount),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  validateTransferForm: () => validateTransferForm(),
};

export default connect(mapStateToProps, mapActionCreators)(TransferForm);
