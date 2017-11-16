import { connect } from 'react-redux';
import DetailedAccount from '../components/DetailedAccount';

const mapStateToProps = (state) => ({
  activeAccount: state.accounts.activeAccount,
  language: state.root.language
});

export default connect(mapStateToProps, null)(DetailedAccount);
