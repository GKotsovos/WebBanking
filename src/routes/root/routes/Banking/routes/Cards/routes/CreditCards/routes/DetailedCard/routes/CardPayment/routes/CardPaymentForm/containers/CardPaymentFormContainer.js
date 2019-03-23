import { connect } from 'react-redux';
import {
  setDebitAccount,
  setCreditCardPaymentAmount,
  setAsapCardTransaction,
  setTransactionDate,
  initCardTransactionForm
 } from '../../../../../../../../../modules/cards.js'
import CardPaymentForm from '../components';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loans: state.loans.loans,
  creditCards: state.cards.creditCards.filter(creditCard => creditCard.id != state.cards.activeCard.id),
  prepaidCards: state.cards.prepaidCards,
  transactionForm: state.cards.transactionForm,
  language: state.root.language,
});

const mapActionCreators = {
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount(debitAccount, debitAccountType),
  setCreditCardPaymentAmount: (amount) => setCreditCardPaymentAmount(amount),
  setAsapCardTransaction: (isAsap) => setAsapCardTransaction(isAsap),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  initCardTransactionForm: () => initCardTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(CardPaymentForm);
