import { connect } from 'react-redux';
import { setDebitAccount} from 'routes/root/routes/Banking/routes/Orders/modules/orders';
import NewOrderLayout from '../components/NewOrderLayout';

const mapStateToProps = (state) => ({
  accounts: state.accounts.accounts,
  loans: state.loans.loans,
  creditCards: state.cards.creditCards,
  prepaidCards: state.cards.prepaidCards,
  transactionForm: state.orders.transactionForm || {},
});

const mapActionCreators = {
  setDebitAccount: (debitAccount, debitAccountType) => setDebitAccount (debitAccount, debitAccountType),
};

export default connect(mapStateToProps, mapActionCreators)(NewOrderLayout);
