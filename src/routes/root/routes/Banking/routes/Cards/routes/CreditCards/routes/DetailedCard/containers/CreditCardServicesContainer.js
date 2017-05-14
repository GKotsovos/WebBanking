import { connect } from 'react-redux';
import { linkTo } from '../../../../../../../modules/banking';
import CreditCardServicesTabs from '../components/CreditCardServicesTabs';

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
};


export default connect(null, mapActionCreators)(CreditCardServicesTabs);
