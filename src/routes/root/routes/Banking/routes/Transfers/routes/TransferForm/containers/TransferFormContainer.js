import { connect } from 'react-redux';
import _ from 'underscore';
import {
  initTransferTransactionForm,
  setDebitAccount,
  setCreditAccount,
  setCreditFullName,
  setCreditBank,
  setCreditBankBIC,
  setTransferAmount,
  setChargesBeneficiary,
  setTransferComments,
  setAsapTransfer,
  setTransactionDate,
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
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount (debitAccount, debitAccountType),
  setCreditAccount: (account) => setCreditAccount (account),
  setCreditFullName: (fullName) => setCreditFullName (fullName),
  setCreditBank: (bank) => setCreditBank (bank),
  setCreditBankBIC: (bankBIC) => setCreditBankBIC (bankBIC),
  setTransferAmount: (amount) => setTransferAmount (amount),
  setChargesBeneficiary: (beneficiary) => setChargesBeneficiary (beneficiary),
  setTransferComments: (comments) => setTransferComments (comments),
  setAsapTransfer: (isAsap) => setAsapTransfer(isAsap),
  setTransactionDate: (date, formattedDate) => setTransactionDate (date, formattedDate),
};

export default connect(mapStateToProps, mapActionCreators)(TransferForm);
