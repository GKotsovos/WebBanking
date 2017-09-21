import { connect } from 'react-redux';
import DetailedAccount from '../components/DetailedAccount';

const mapStateToProps = (state) => ({
  activeAccount: state.accounts.activeAccount
});

export default connect(mapStateToProps, null)(DetailedAccount);
