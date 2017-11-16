import { connect } from 'react-redux';
import ContactPanel from '../components/ContactPanel';

const mapStateToProps = (state) => ({
  language: state.root.language
});

export default connect(mapStateToProps, null)(ContactPanel);
