import { connect } from 'react-redux';
import { linkTo } from '../../../../../../../modules/banking';
import { initCardTransactionForm } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import CreditCardServicesTabs from '../components/CreditCardServicesTabs';

const mapStateToProps = (state) => ({
  activeRoute: state.banking.activeRoute
});

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
  initCardTransactionForm: () => initCardTransactionForm(),
};

export default connect(mapStateToProps, mapActionCreators)(CreditCardServicesTabs);
