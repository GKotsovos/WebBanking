import { connect } from 'react-redux';
import {
  getAccounts,
  setTransactionHistoryStartDate,
  setTransactionHistoryEndDate,
  getTransactionHistoryByTimePeriod
 } from '../modules/accounts'
import AccountsLayout from '../components/AccountsLayout';

const mapStateToProps = (state) => ({
  initialFetch: state.accounts.initialFetch,
  accounts: state.accounts.accounts,
  activeAccount: state.accounts.activeAccount,
  language: state.root.language,
});

const mapActionCreators = {
  getAccounts: () => getAccounts(),
  setTransactionHistoryStartDate: (startDate) => setTransactionHistoryStartDate(startDate),
  setTransactionHistoryEndDate: (endDate) => setTransactionHistoryEndDate(endDate),
  getTransactionHistoryByTimePeriod: (startDate, endDate) => getTransactionHistoryByTimePeriod(startDate, endDate)
};

export default connect(mapStateToProps, mapActionCreators)(AccountsLayout);
