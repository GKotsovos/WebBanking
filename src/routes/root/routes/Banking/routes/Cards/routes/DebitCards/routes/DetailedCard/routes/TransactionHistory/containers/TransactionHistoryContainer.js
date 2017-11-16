import { connect } from 'react-redux';
import {
  setTransactionHistoryStartDate,
  setTransactionHistoryEndDate,
  getTransactionHistoryByTimePeriod
} from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import TransactionHistory from 'routes/root/routes/Banking/routes/components/TransactionsHistory';

const mapStateToProps = (state) => ({
  transactionHistory: state.cards.activeCard.transactionHistory,
  transactionHistoryTimePeriod: state.cards.activeCard.transactionHistoryTimePeriod,
  language: state.root.language,
});

const mapActionCreators = {
  setTransactionHistoryStartDate: (startDate) => setTransactionHistoryStartDate(startDate),
  setTransactionHistoryEndDate: (endDate) => setTransactionHistoryEndDate(endDate),
  getTransactionHistoryByTimePeriod: (startDate, endDate) => getTransactionHistoryByTimePeriod(startDate, endDate)
};

export default connect(mapStateToProps, mapActionCreators)(TransactionHistory);
