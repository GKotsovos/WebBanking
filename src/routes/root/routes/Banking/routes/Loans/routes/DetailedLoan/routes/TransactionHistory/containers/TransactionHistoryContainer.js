import { connect } from 'react-redux';
import TransactionHistory from '../components/TransactionHistory';

const mapStateToProps = (state) => ({
  transactionHistory: state.loans.activeLoan.transactionHistory
});

export default connect(mapStateToProps, null)(TransactionHistory);
