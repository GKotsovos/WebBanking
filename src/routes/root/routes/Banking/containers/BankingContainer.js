import { connect } from 'react-redux';
import {
  getCustomerName,
  logOut,
  logOutCountDown,
} from '../modules/banking';
import { getAccounts } from '../routes/Accounts/modules/accounts';
import { getCards } from '../routes/Cards/modules/cards';
import { getLoans } from '../routes/Loans/modules/loans';
import Banking from '../components/BankingLayout';
import _ from 'underscore';

const mapStateToProps = (state) => ({
  initialFetch: state.banking.initialFetch,
  shouldShowLogOutModal: _.isEmpty(state.banking.logOutModal) ? false : state.banking.logOutModal.shouldShow,
});

const mapActionCreators = {
  getCustomerName: () => getCustomerName(),
  getAccounts: () => getAccounts(),
  getCards: () => getCards(),
  getLoans: () => getLoans(),
  logOut: () => logOut(),
  logOutCountDown: () => logOutCountDown()
};

export default connect(mapStateToProps, mapActionCreators)(Banking);
