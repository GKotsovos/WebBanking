import { connect } from 'react-redux';
import { linkTo } from '../../../../../../../modules/banking';
import PrepaidCardServicesTabs from '../components/PrepaidCardServicesTabs';

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
};


export default connect(null, mapActionCreators)(PrepaidCardServicesTabs);
