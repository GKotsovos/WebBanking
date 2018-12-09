import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText'

export const InformationPanel = ({ language, changePanel }) => (
  <div id="infoPanel" className="panel panel-default vertical-align" onClick={() => changePanel('INFORMATION')}>
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
