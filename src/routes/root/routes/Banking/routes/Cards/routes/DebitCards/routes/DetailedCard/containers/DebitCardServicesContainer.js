import { connect } from 'react-redux';
import { linkTo } from '../../../../../../../modules/banking';
import DebitCardServicesTabs from '../components/DebitCardServicesTabs';

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
};


export default connect(null, mapActionCreators)(DebitCardServicesTabs);
