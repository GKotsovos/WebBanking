import { connect } from 'react-redux';
import { changePanel } from '../modules/home';
import GuidePanel from '../components/GuidePanel';

const mapActionCreators = {
  changePanel: (panel) => changePanel(panel)
};

export default connect(null, mapActionCreators)(GuidePanel);
