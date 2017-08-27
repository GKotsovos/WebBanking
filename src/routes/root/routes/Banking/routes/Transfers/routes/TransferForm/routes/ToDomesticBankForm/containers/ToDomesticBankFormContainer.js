import { connect } from 'react-redux';
import {
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
  setCreditBank: (bank) => setCreditBank (bank),
  setCreditAccount: (account, type) => setCreditAccount (account, type),
  setCreditFullName: (fullName) => setCreditFullName (fullName),
  setTransferAmount: (amount) => setTransferAmount (amount),
  setChargesBeneficiary: (beneficiary) => setChargesBeneficiary (beneficiary),
};

export default connect(mapStateToProps, mapActionCreators)(ToDomesticBankForm);
