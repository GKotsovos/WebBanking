import { connect } from 'react-redux';
import {
  initNewTransferOrderForm,
  setOrderDebitAccount,
  setTransferOrderBeneficiaryName,
  setTransferOrderBeneficiaryAccount,
  setTransferOrderBeneficiaryBankType,
  setTransferOrderBeneficiaryBankBic,
  setTransferOrderAmount,
  setTransferOrderChargesBeneficiary,
  setTransferOrderComments,
  setTransferOrderAsapStart,
  setTransferOrderStartDate,
  setPeriodicity,
  setTimesOfExecution,
  setTransferOrderCustomTitle,
} from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import NewTransferOrderFormLayout from '../components/NewTransferOrderFormLayout';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loans: state.loans.loans,
  creditCards: state.cards.creditCards,
  prepaidCards: state.cards.prepaidCards,
  newOrderForm: state.orders.newOrderForm || {},
});

const mapActionCreators = {
  initNewTransferOrderForm: () => initNewTransferOrderForm(),
  setOrderDebitAccount: (debitAccount, debitAccountType) => setOrderDebitAccount (debitAccount, debitAccountType),
  setTransferOrderBeneficiaryName: (fullName) => setTransferOrderBeneficiaryName(fullName),
  setTransferOrderBeneficiaryAccount: (creditAccount, creditAccountType) => setTransferOrderBeneficiaryAccount(creditAccount, creditAccountType),
  setTransferOrderBeneficiaryBankType: (bankType, selection) => setTransferOrderBeneficiaryBankType(bankType, selection),
  setTransferOrderBeneficiaryBankBic: (bic) => setTransferOrderBeneficiaryBankBic(bic),
  setTransferOrderAmount: (amount) => setTransferOrderAmount(amount),
  setTransferOrderChargesBeneficiary: (selection, beneficiary) => setTransferOrderChargesBeneficiary(selection, beneficiary),
  setTransferOrderComments: (comments) => setTransferOrderComments(comments),
  setTransferOrderAsapStart: (isAsap) => setTransferOrderAsapStart(isAsap),
  setTransferOrderStartDate: (date, formattedDate) => setTransferOrderStartDate(date, formattedDate),
  setPeriodicity: (selection, periodicity) => setPeriodicity(selection, periodicity),
  setTimesOfExecution: (timesOfExecution) => setTimesOfExecution(timesOfExecution),
  setTransferOrderCustomTitle: (title) => setTransferOrderCustomTitle(title),
};

export default connect(mapStateToProps, mapActionCreators)(NewTransferOrderFormLayout);
