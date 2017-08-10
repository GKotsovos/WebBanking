import { connect } from 'react-redux';
import { linkTo } from '../../../../../../../modules/banking';
import { clearCardTransactionForm } from 'routes/root/routes/Banking/routes/Cards/modules/cards'
import PrepaidCardServicesTabs from '../components/PrepaidCardServicesTabs';

const mapActionCreators = {
  clearCardTransactionForm: () => clearCardTransactionForm(),
  linkTo: (route) => linkTo(route),
};


export default connect(null, mapActionCreators)(PrepaidCardServicesTabs);
