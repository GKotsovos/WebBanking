import { connect } from 'react-redux';
import {
  initTransferToDomesticTransactionForm,
  setCreditBank,
  setCreditAccount,
  setCreditFullName,
  setTransferAmount,
  setChargesBeneficiary,
} from 'routes/root/routes/Banking/routes/Transfers/modules/transfers';
import ToDomesticBankForm from '../components/ToDomesticBankForm';

const mapStateToProps = (state) => ({
  bank: state.transfers.transactionForm.bank,
  domesticBanks: state.transfers.transactionForm.domesticBanks,
  creditAccount: state.transfers.transactionForm.creditAccount,
  fullName: state.transfers.transactionForm.fullName,
  amount: state.transfers.transactionForm.amount,
  chargesBeneficiary: state.transfers.transactionForm.chargesBeneficiary,
});

const mapActionCreators = {
  initTransferToDomesticTransactionForm: () => initTransferToDomesticTransactionForm(),
  setCreditBank: (bank) => setCreditBank(bank),
  setCreditAccount: (account, type) => setCreditAccount(account, type),
  setCreditFullName: (fullName) => setCreditFullName(fullName),
  setTransferAmount: (amount) => setTransferAmount(amount),
  setChargesBeneficiary: (selection, beneficiary) => setChargesBeneficiary(selection, beneficiary),
};

export default connect(mapStateToProps, mapActionCreators)(ToDomesticBankForm);
