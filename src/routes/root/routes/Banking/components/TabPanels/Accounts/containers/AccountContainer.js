import { connect } from 'react-redux';
import { getProductTransactionHistory, setActiveAccount } from '../../../../modules/banking';
import Account from '../components/Account';

const mapActionCreators = {
  setActiveAccount: (account) => setActiveAccount(account),
  getProductTransactionHistory: (productId) => getProductTransactionHistory(productId),
};


export default connect(null, mapActionCreators)(Account);
