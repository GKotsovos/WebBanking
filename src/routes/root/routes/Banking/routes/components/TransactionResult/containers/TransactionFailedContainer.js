import { connect } from 'react-redux';
import { linkTo } from '../../../../modules/banking';
import TransactionFailed from '../components/TransactionFailed';

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
};

export default connect(null, mapActionCreators)(TransactionFailed);
