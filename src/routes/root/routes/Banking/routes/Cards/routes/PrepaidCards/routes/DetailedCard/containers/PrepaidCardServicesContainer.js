import { connect } from 'react-redux';
import { linkTo } from 'routes/root/routes/Banking/modules/banking';
import { initCardTransactionForm } from 'routes/root/routes/Banking/routes/Cards/modules/cards'
import PrepaidCardServicesTabs from '../components/PrepaidCardServicesTabs';

const mapStateToProps = (state) => ({
  activeRoute: state.banking.activeRoute
});

const mapActionCreators = {
  initCardTransactionForm: () => initCardTransactionForm(),
  linkTo: (route) => linkTo(route),
};

export default connect(mapStateToProps, mapActionCreators)(PrepaidCardServicesTabs);
