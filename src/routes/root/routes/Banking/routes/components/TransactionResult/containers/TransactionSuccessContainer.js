import { connect } from 'react-redux';
import { linkTo } from '../../../../modules/banking';
// import { clearCardTransactionForm } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import TransactionSuccess from '../components/TransactionSuccess';

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
  // clearCardTransactionForm: () => clearCardTransactionForm(),
};

export default connect(null, mapActionCreators)(TransactionSuccess);
