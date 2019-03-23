import { connect } from 'react-redux';
import NewApplicationPanel from '../components/NewApplicationPanel';

const mapStateToProps = (state) => ({
  language: state.root.language
});

export default connect(mapStateToProps, null)(NewApplicationPanel);
