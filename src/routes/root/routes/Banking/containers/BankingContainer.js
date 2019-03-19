import { connect } from 'react-redux';
import { isEmpty } from 'underscore';
import {
  setInitLoad,
  getCustomerName,
  logOut,
  logOutCountDown,
} from '../modules/banking';
import { getAccounts } from '../routes/Accounts/modules/accounts';
import { getCards } from '../routes/Cards/modules/cards';
import { getLoans } from '../routes/Loans/modules/loans';
import Banking from '../components/BankingLayout';

const mapStateToProps = (state) => ({
  initLoad: state.banking.initLoad,
  shouldShowLogOutModal: isEmpty(state.banking.logOutModal) ? false : state.banking.logOutModal.shouldShow,
  language: state.root.language
});

const mapActionCreators = {
  setInitLoad: () => setInitLoad(),
  getCustomerName: () => getCustomerName(),
  getAccounts: () => getAccounts(),
  getCards: () => getCards(),
  getLoans: () => getLoans(),
  logOut: () => logOut(),
  logOutCountDown: () => logOutCountDown()
};

export default connect(mapStateToProps, mapActionCreators)(Banking);
