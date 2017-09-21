import { connect } from 'react-redux';
import { getAccounts } from '../modules/accounts'
import AccountsLayout from '../components/AccountsLayout';

const mapStateToProps = (state) => ({
  initialFetch: state.accounts.initialFetch,
  accounts: state.accounts.accounts,
  activeAccount: state.accounts.activeAccount,
});

const mapActionCreators = {
  getAccounts: () => getAccounts()
};

export default connect(mapStateToProps, mapActionCreators)(AccountsLayout);
