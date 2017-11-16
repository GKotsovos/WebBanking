import { connect } from 'react-redux';
import { changePanel } from '../modules/home';
import MainPanel from '../components/MainPanel';

const mapStateToProps = (state) => ({
  activePanel: state.home.activePanel,
  language: state.root.language
});

const mapActionCreators = {
  changePanel: (panel) => changePanel(panel)
};

export default connect(mapStateToProps, mapActionCreators)(MainPanel);
