import React, { Component, PropTypes } from 'react';
import News from './Panels/News';
import Information from './Panels/Information';
import UsefullLinks from './Panels/UsefullLinks';
import ForgotPassword from './Panels/ForgotPassword';
import NewApplication from './Panels/NewApplication';
import './MainPanel.css'

class MainPanel extends Component {
  panelView = () => {
    const { activePanel, language, changePanel } = this.props;

    switch(activePanel) {
      case 'NEWS':
        return <News language={language} />
        break;
      case 'INFORMATION':
        return <Information language={language} changePanel={changePanel}/>
        break;
      case 'GUIDE':
        return <UsefullLinks language={language} changePanel={changePanel}/>
        break;
      case 'FOTGOT_PASSWORD':
        return <ForgotPassword language={language} changePanel={changePanel}/>
        break;
      case 'NEW_APPLICATION':
        return <NewApplication language={language} changePanel={changePanel}/>
        break;
      default:
        return <Information language={language} changePanel={changePanel}/>
    }
  }
  render = () => this.panelView()
}

MainPanel.PropTypes = {
  activePanel: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,  
  changePanel: PropTypes.func.isRequired
};

export default MainPanel
