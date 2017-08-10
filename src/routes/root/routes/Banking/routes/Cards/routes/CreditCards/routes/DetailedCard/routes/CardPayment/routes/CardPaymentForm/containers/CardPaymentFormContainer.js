import { connect } from 'react-redux';
import {
  setDebitAccount,
  setCreditCardPaymentAmount,
  setTransactionDate,
  validateCreditCardPaymentForm,
  clearCardTransactionForm
 } from '../../../../../../../../../modules/cards.js'
import CardPaymentForm from '../components';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  transactionForm: state.cards.transactionForm
});

const mapActionCreators = {
  setDebitAccount: (debitAccount) => setDebitAccount(debitAccount),
  setCreditCardPaymentAmount: (amount) => setCreditCardPaymentAmount(amount),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  validateCreditCardPaymentForm: () => validateCreditCardPaymentForm(),
  clearCardTransactionForm: () => clearCardTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(CardPaymentForm);
