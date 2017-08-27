import { connect } from 'react-redux';
import {
  setCreditBankBIC,
  setCreditAccount,
  setCreditFullName,
  setTransferAmount,
  setChargesBeneficiary,
} from 'routes/root/routes/Banking/routes/Transfers/modules/transfers';
import ToForeignBankForm from '../components/ToForeignBankForm';

const mapStateToProps = (state) => ({
  bank: state.transfers.transactionForm.bank,
  creditAccount: state.transfers.transactionForm.creditAccount,
  fullName: state.transfers.transactionForm.fullName,
  amount: state.transfers.transactionForm.amount,
  chargesBeneficiary: state.transfers.transactionForm.chargesBeneficiary,
});

const mapActionCreators = {
  setCreditBankBIC: (bic) => setCreditBankBIC (bic),
  setCreditAccount: (account, type) => setCreditAccount (account, type),
  setCreditFullName: (fullName) => setCreditFullName (fullName),
  setTransferAmount: (amount) => setTransferAmount (amount),
  setChargesBeneficiary: (beneficiary) => setChargesBeneficiary (beneficiary),
};

export default connect(mapStateToProps, mapActionCreators)(ToForeignBankForm);
