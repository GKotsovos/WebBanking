import { connect } from 'react-redux';
import {
  getCustomerName,
  logOut
} from '../modules/banking';
import { getAccounts } from '../routes/Accounts/modules/accounts';
import { getCards } from '../routes/Cards/modules/cards';
// import { getLoans } from '../routes/Loans/modules/loans';
import Banking from '../components/BankingLayout';

const mapStateToProps = (state) => ({
  initialFetch: state.banking.initialFetch
});

const mapActionCreators = {
  getCustomerName: () => getCustomerName(),
  getAccounts: () => getAccounts(),
  getCards: () => getCards(),
  logOut: () => logOut(),
};

export default connect(mapStateToProps, mapActionCreators)(Banking);
