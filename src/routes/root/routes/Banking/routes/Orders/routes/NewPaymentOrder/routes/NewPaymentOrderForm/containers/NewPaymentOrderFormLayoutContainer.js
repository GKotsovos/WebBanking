import { connect } from 'react-redux';
import {
  initNewPaymentOrderForm,
  setOrderDebitAccount,
  setPaymentOrderPaymentMethod,
  setPaymentOrderPaymentCode,
  setPaymentOrderMaxAmount,
  setPaymentOrderEndDate,
} from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import NewPaymentOrderFormLayout from '../components/NewPaymentOrderFormLayout';

const mapStateToProps = (state) => ({
  newOrderForm: state.orders.newOrderForm,
  accounts:state.accounts.accounts,
  loans: state.loans.loans,
  creditCards: state.cards.creditCards,
  prepaidCards: state.cards.prepaidCards,
  language: state.root.language,
});

const mapActionCreators = {
  initNewPaymentOrderForm: () => initNewPaymentOrderForm(),
  setOrderDebitAccount: (debitAccount, debitAccountType) => setOrderDebitAccount(debitAccount, debitAccountType),
  setPaymentOrderPaymentMethod: (paymentMethod) => setPaymentOrderPaymentMethod (paymentMethod),
  setPaymentOrderPaymentCode: (paymentCode) => setPaymentOrderPaymentCode (paymentCode),
  setPaymentOrderMaxAmount: (amount) => setPaymentOrderMaxAmount (amount),
  setPaymentOrderEndDate: (date, formattedDate) => setPaymentOrderEndDate(date, formattedDate),
};

export default connect(mapStateToProps, mapActionCreators)(NewPaymentOrderFormLayout);
