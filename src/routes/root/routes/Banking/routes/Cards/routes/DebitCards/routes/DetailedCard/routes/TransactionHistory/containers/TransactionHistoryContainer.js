import { connect } from 'react-redux';
import TransactionHistory from '../components/TransactionHistory';

const mapStateToProps = (state) => ({
  transactionHistory: state.cards.activeCard.transactionHistory
});

export default connect(mapStateToProps, null)(TransactionHistory);
