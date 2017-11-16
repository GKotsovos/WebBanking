import { connect } from 'react-redux';
import { linkTo } from '../../../../../../../modules/banking';
import DebitCardServicesTabs from '../components/DebitCardServicesTabs';

const mapStateToProps = (state) => ({
  language: state.root.language
});

const mapActionCreators = {
  linkTo: (route) => linkTo(route),
};

export default connect(mapStateToProps, mapActionCreators)(DebitCardServicesTabs);
