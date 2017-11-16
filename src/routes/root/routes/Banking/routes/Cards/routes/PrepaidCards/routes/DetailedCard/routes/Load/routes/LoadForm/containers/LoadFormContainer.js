import { connect } from 'react-redux';
import _ from 'underscore';
import {
  setDebitAccount,
  setPrepaidCardLoadAmount,
  setAsapCardTransaction,
  setTransactionDate,
  validateCreditCardPaymentForm,
  initCardTransactionForm,
} from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import LoadForm from '../components';
const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  creditCards: state.cards.creditCards,
  prepaidCards: _.filter(state.cards.prepaidCards, (prepaidCard) => prepaidCard.id != state.cards.activeCard.id),
  loans: state.loans.loans,
  transactionForm: state.cards.transactionForm,
  language: state.root.language
});

const mapActionCreators = {
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount(debitAccount, debitAccountType),
  setPrepaidCardLoadAmount: (amount) => setPrepaidCardLoadAmount(amount),
  setAsapCardTransaction: (isAsap) => setAsapCardTransaction(isAsap),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  validateCreditCardPaymentForm: () => validateCreditCardPaymentForm(),
  initCardTransactionForm: () => initCardTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(LoadForm);
