import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => ({
  language: state.root.language
});

export default connect(mapStateToProps, null)(LoginForm);
