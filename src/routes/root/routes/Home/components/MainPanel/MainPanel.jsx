import React, { Component, PropTypes } from 'react';
import News from './Panels/News';
import Information from './Panels/Information';
import ForgotPassword from './Panels/ForgotPassword';
import NewApplication from './Panels/NewApplication';
import UsefulLinks from './Panels/UsefullLinks/UsefulLinks'

class MainPanel extends Component {
  getPanels = () => {
    const { language } = this.props;
    return {
      'NEWS': <News language={language} />,
      'INFORMATION': <Information language={language} />,
      'GUIDE': <UsefulLinks language={language} />,
      'FORGOT_PASSWORD': <ForgotPassword language={language} />,
      'NEW_APPLICATION': <NewApplication language={language} />,
      default: <Information language={language} />
    }
  }

  render = () => {
    const { activePanel } = this.props;
    return activePanel !== "" ? this.getPanels()[activePanel] : this.getPanels().default;
  }
}

MainPanel.PropTypes = {
  activePanel: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default MainPanel
