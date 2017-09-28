import { connect } from 'react-redux';
import { logOut } from '../routes/Banking/modules/banking';
import Navbar from '../components/Navbar';

const mapStateToProps = (state) => ({
  customer: state.banking.customerName,
  timeLeftToLogOut: !state.banking.timeLeftToLogOut ? localStorage.secondsToLogOut : state.banking.timeLeftToLogOut
});

const mapActionCreators = {
  logOut: () => logOut()
};

export default connect(mapStateToProps, mapActionCreators)(Navbar);
