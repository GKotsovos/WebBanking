import { connect } from 'react-redux';
import { logOut } from '../routes/Banking/modules/banking';
import { setLanguage } from '../modules/root';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => ({
  customer: state.banking.customerName,
  timeLeftToLogOut: !state.banking.timeLeftToLogOut ? localStorage.secondsToLogOut : state.banking.timeLeftToLogOut,
  language: state.root.language
});

const mapActionCreators = {
  logOut: () => logOut(),
  setLanguage: (language) => setLanguage(language)
};

export default connect(mapStateToProps, mapActionCreators)(Navbar);
