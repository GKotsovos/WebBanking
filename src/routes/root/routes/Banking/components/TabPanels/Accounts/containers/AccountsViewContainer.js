import { connect } from 'react-redux';
import { setActiveAccount } from '../../../../modules/banking';
import AccountsView from '../components/AccountsView';

const mapStateToProps = (state) => ({
  accounts: state.banking.accounts,
  activeAccount: state.banking.activeAccount
});

export default connect(mapStateToProps, null)(AccountsView);
