import { connect } from 'react-redux';
import _ from 'underscore';
import {
  initPaymentTransactionForm,
  setDebitAccount,
  setPaymentAmount,
  setAsapPayment,
  setTransactionDate,
} from 'routes/root/routes/Banking/routes/Payments/modules/payments';
import PaymentFormLayout from '../components/PaymentFormLayout';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loans: state.loans.loans,
  creditCards: state.cards.creditCards,
  prepaidCards: state.cards.prepaidCards,
  transactionForm: state.payments.transactionForm || {},
});

const mapActionCreators = {
  initPaymentTransactionForm: () => initPaymentTransactionForm(),
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount (debitAccount, debitAccountType),
  setPaymentAmount: (amount) => setPaymentAmount (amount),
  setAsapPayment: (isAsap) => setAsapPayment(isAsap),
  setTransactionDate: (date, formattedDate) => setTransactionDate (date, formattedDate),
};

export default connect(mapStateToProps, mapActionCreators)(PaymentFormLayout);
