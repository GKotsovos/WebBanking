import { connect } from 'react-redux';
import { changePanel } from '../modules/home';
import InformationPanel from '../components/InformationPanel';

const mapActionCreators = {
  changePanel: (panel) => changePanel(panel)
};

export default connect(null, mapActionCreators)(InformationPanel);
