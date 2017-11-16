import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';
import './GuidePanel.css'

export const GuidePanel = ({ language, changePanel }) => (
  <div id="guidePanel" className="panel panel-default verticalCenter" onClick={() => changePanel('GUIDE')}>
    <div className="panel-body text-center">
      <FontAwesome id="bookIcon" name="book" />
      <p id="guideText">{localizationText[language].guideText}</p>
    </div>
  </div>
)

GuidePanel.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default GuidePanel
