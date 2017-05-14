import { connect } from 'react-redux';
import { linkTo } from '../../../../modules/banking'
import FormCompletionButtons from '../components';

const mapActionCreators = {
  linkTo: (route) => linkTo(route)
};


export default connect(null, mapActionCreators)(FormCompletionButtons);
