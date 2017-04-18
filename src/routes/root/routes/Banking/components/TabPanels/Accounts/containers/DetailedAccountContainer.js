import { connect } from 'react-redux';
import DetailedAccount from '../components/DetailedAccount';

const mapStateToProps = (state) => ({
  activeAccount: state.banking.activeAccount
});

export default connect(mapStateToProps, null)(DetailedAccount);
