import { connect } from 'react-redux';
import { changePanel } from '../modules/home';
import InformationPanel from '../components/InformationPanel';

const mapActionCreators = {
  changePanel: (panel) => changePanel(panel)
};

const mapStateToProps = (state) => ({
  language: state.root.language
});

export default connect(mapStateToProps, mapActionCreators)(InformationPanel);
