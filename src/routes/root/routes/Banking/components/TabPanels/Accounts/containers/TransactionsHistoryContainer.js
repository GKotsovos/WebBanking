import { connect } from 'react-redux';
import TransactionsHistory from '../components/TransactionsHistory';

const mapStateToProps = (state) => ({
  transactionHistory: state.banking.activeAccount.transactionHistory
});

export default connect(mapStateToProps, null)(TransactionsHistory);
