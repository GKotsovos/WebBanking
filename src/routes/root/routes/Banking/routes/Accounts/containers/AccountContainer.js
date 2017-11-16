import { connect } from 'react-redux';
import { setActiveAccount, getAccountCurrentMonthTransactionHistory } from '../modules/accounts'
import Account from '../components/Account';

const mapStateToProps = (state) => ({
  language: state.root.language
});

const mapActionCreators = {
  setActiveAccount: (account) => setActiveAccount(account),
  getAccountCurrentMonthTransactionHistory: (productId) => getAccountCurrentMonthTransactionHistory(productId),
};

export default connect(mapStateToProps, mapActionCreators)(Account);
