import { connect } from 'react-redux';
import { linkTo } from '../../../../modules/banking';
import TransactionSuccess from '../components/TransactionSuccess';

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
};

export default connect(null, mapActionCreators)(TransactionSuccess);
