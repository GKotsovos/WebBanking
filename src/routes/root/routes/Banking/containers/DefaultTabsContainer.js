import { connect } from 'react-redux';
import { linkTo } from '../modules/banking';
import { deactiveAccount } from '../routes/Accounts/modules/accounts'
import DefaultTabs from '../components/Tabs/DefaultTabs';

const mapStateToProps = (state) => ({
  activeRoute: state.banking.activeRoute
});

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
  deactiveAccount: () => deactiveAccount(),
}

export default connect(mapStateToProps, mapActionCreators)(DefaultTabs);
