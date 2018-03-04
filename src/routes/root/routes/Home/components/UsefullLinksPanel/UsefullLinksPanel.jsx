import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';
import './UsefullLinksPanel.css'

export const UsefullLinksPanel = ({ language, changePanel }) => (
  <div id="usefullLinksPanel" className="panel panel-default verticalCenter" onClick={() => changePanel('GUIDE')}>
    <div className="panel-body text-center">
      <FontAwesome id="bookIcon" name="book" />
      <p id="usefullLinksText">{localizationText[language].usefullLinksText}</p>
    </div>
  </div>
)

UsefullLinksPanel.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default UsefullLinksPanel