import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText'

export const InformationPanel = ({ language, changePanel }) => (
  <div className="information-panel panel panel-default vertical-align" onClick={() => changePanel('INFORMATION')}>
    <div className="panel-body text-center">
      <FontAwesome className="information-panel__icon" name="info-circle" size="3x" />
      <p className="information-panel__text">{localizationText[language].information}</p>
    </div>
  </div>
)

InformationPanel.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default InformationPanel
