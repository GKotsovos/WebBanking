import { connect } from 'react-redux';
import { changePanel } from '../modules/home';
import NewApplicationPanel from '../components/NewApplicationPanel';

const mapStateToProps = (state) => ({
  language: state.root.language
});

export default connect(mapStateToProps, null)(NewApplicationPanel);
