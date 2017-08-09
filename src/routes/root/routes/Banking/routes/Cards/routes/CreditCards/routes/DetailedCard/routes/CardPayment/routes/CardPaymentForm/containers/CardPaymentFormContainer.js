import { connect } from 'react-redux';
import {
  setDebitAccount,
  setTransactionAmount,
  setTransactionDate,
  validateCreditCardPaymentForm,
  clearTransactionForm
 } from '../../../../../../../../../modules/cards.js'
import CardPaymentForm from '../components';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  transactionForm: state.cards.transactionForm
});

const mapActionCreators = {
  setDebitAccount: (debitAccount) => setDebitAccount(debitAccount),
  setTransactionAmount: (amount) => setTransactionAmount(amount),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  validateCreditCardPaymentForm: () => validateCreditCardPaymentForm(),
  clearTransactionForm: () => clearTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(CardPaymentForm);
