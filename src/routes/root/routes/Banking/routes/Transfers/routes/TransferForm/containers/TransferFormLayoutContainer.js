import { connect } from 'react-redux';
import _ from 'underscore';
import {
  initTransferTransactionForm,
  setDebitAccount,
  setCreditAccount,
  setCreditFullName,
  setCreditBankType,
  setCreditBank,
  setCreditBankBIC,
  setTransferAmount,
  setChargesBeneficiary,
  setTransferComments,
  setAsapTransfer,
  setTransactionDate,
} from 'routes/root/routes/Banking/routes/Transfers/modules/transfers';
import TransferFormLayout from '../components/TransferFormLayout';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loans: state.loans.loans,
  creditCards: state.cards.creditCards,
  prepaidCards: state.cards.prepaidCards,
  transactionForm: state.transfers.transactionForm,
});

const mapActionCreators = {
  initTransferTransactionForm: () => initTransferTransactionForm(),
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount (debitAccount, debitAccountType),
  setCreditAccount: (account, type) => setCreditAccount (account, type),
  setCreditFullName: (fullName) => setCreditFullName (fullName),
  setCreditBankType: (selection, bankType) => setCreditBankType (selection, bankType),
  setCreditBank: (bank) => setCreditBank (bank),
  setCreditBankBIC: (bankBIC) => setCreditBankBIC (bankBIC),
  setTransferAmount: (amount) => setTransferAmount (amount),
  setChargesBeneficiary: (selection, beneficiary) => setChargesBeneficiary (selection, beneficiary),
  setTransferComments: (comments) => setTransferComments (comments),
  setAsapTransfer: (isAsap) => setAsapTransfer(isAsap),
  setTransactionDate: (date, formattedDate) => setTransactionDate (date, formattedDate),
};

export default connect(mapStateToProps, mapActionCreators)(TransferFormLayout);
