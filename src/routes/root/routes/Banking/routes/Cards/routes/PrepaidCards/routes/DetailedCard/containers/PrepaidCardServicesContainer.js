import { connect } from 'react-redux';
import { linkTo } from '../../../../../../../modules/banking';
import { initCardTransactionForm } from 'routes/root/routes/Banking/routes/Cards/modules/cards'
import PrepaidCardServicesTabs from '../components/PrepaidCardServicesTabs';

const mapActionCreators = {
  initCardTransactionForm: () => initCardTransactionForm(),
  linkTo: (route) => linkTo(route),
};


export default connect(null, mapActionCreators)(PrepaidCardServicesTabs);
