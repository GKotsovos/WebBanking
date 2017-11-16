import { connect } from 'react-redux';
import LoginPanelHeader from '../components/LoginPanelHeader';

const mapStateToProps = (state) => ({
  language: state.root.language
});

export default connect(mapStateToProps, null)(LoginPanelHeader);
