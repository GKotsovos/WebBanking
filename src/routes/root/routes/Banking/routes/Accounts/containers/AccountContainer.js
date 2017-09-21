import { connect } from 'react-redux';
import { setActiveAccount, getAccountTransactionHistory } from '../modules/accounts'
import Account from '../components/Account';

const mapActionCreators = {
  setActiveAccount: (account) => setActiveAccount(account),
  getAccountTransactionHistory: (productId) => getAccountTransactionHistory(productId),
};


export default connect(null, mapActionCreators)(Account);
