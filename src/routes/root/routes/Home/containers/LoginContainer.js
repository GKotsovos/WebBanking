import { connect } from 'react-redux';
import { authenticate, changePanel } from '../modules/home';
import Login from '../components/Login';

const mapActionCreators = {
  authenticate: (userId, password) => authenticate(userId, password),
  changePanel: (panel) => changePanel(panel)
};

const mapStateToProps = (state) => ({
  returnedError : state.home.returnedError
});

export default connect(mapStateToProps, mapActionCreators)(Login);
