import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText'
import './InformationPanel.css'

export const InformationPanel = ({ language, changePanel }) => (
  <div id="infoPanel" className="panel panel-default verticalCenter" onClick={() => changePanel('INFORMATION')}>
    <div className="panel-body text-center">
          <FontAwesome id="infoIcon" name="info-circle" size="3x" />
          <div id="infoText">{localizationText[language].information}</div>
    </div>
  </div>
)

InformationPanel.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default InformationPanel
