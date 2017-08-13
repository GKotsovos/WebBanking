import { connect } from 'react-redux';
import {
  setDebitAccount,
  setPrepaidCardLoadAmount,
  setTransactionDate,
  validateCreditCardPaymentForm,
  initCardTransactionForm,
} from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import LoadForm from '../components';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  transactionForm: state.cards.transactionForm
});

const mapActionCreators = {
  setDebitAccount: (debitAccount) => setDebitAccount(debitAccount),
  setPrepaidCardLoadAmount: (amount) => setPrepaidCardLoadAmount(amount),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  validateCreditCardPaymentForm: () => validateCreditCardPaymentForm(),
  initCardTransactionForm: () => initCardTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(LoadForm);
