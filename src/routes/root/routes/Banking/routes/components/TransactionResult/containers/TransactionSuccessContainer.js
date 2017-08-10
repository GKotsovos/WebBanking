import { connect } from 'react-redux';
import { linkTo } from '../../../../modules/banking';
import { clearTransactionForm } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import TransactionSuccess from '../components/TransactionSuccess';

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
  clearTransactionForm: () => clearTransactionForm(),
};

export default connect(null, mapActionCreators)(TransactionSuccess);
