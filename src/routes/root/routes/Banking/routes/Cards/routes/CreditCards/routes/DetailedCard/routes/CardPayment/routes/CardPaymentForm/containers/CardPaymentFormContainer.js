import { connect } from 'react-redux';
import {
  setDebitAccount,
  setCreditCardPaymentAmount,
  setAsapCardTransaction,
  setTransactionDate,
  initCardTransactionForm
 } from '../../../../../../../../../modules/cards.js'
import CardPaymentForm from '../components';
import _ from 'underscore';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loans: state.loans.loans,
  creditCards: _.filter(state.cards.creditCards, (creditCard) => creditCard.id != state.cards.activeCard.id),
  prepaidCards: state.cards.prepaidCards,
  transactionForm: state.cards.transactionForm,
});

const mapActionCreators = {
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount(debitAccount, debitAccountType),
  setCreditCardPaymentAmount: (amount) => setCreditCardPaymentAmount(amount),
  setAsapCardTransaction: (isAsap) => setAsapCardTransaction(isAsap),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  initCardTransactionForm: () => initCardTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(CardPaymentForm);
