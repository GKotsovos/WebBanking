import { connect } from 'react-redux';
import {
  setDebitAccount,
  setPrepaidCardLoadAmount,
  setAsapCardTransaction,
  setTransactionDate,
  initCardTransactionForm,
} from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import LoadForm from '../components';
const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  creditCards: state.cards.creditCards,
  prepaidCards: state.cards.prepaidCards.filter(prepaidCard => prepaidCard.id != state.cards.activeCard.id),
  loans: state.loans.loans,
  transactionForm: state.cards.transactionForm,
  language: state.root.language
});

const mapActionCreators = {
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount(debitAccount, debitAccountType),
  setPrepaidCardLoadAmount: (amount) => setPrepaidCardLoadAmount(amount),
  setAsapCardTransaction: (isAsap) => setAsapCardTransaction(isAsap),
  setTransactionDate: (date, formattedDate) => setTransactionDate(date, formattedDate),
  initCardTransactionForm: () => initCardTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(LoadForm);
