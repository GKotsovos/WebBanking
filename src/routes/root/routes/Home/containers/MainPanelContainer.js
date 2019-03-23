import { connect } from 'react-redux';
import MainPanel from '../components/MainPanel';

const mapStateToProps = (state) => ({
  activePanel: state.home.activePanel,
  language: state.root.language
});

export default connect(mapStateToProps, null)(MainPanel);
