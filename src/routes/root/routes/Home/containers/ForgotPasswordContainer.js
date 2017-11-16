import { connect } from 'react-redux';
import ForgotPassword from '../components/ForgotPassword';

const mapStateToProps = (state) => ({
  language: state.root.language
});

export default connect(mapStateToProps, null)(ForgotPassword);
