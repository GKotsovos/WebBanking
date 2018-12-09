import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';

export const UsefulLinksPanel = ({ language, changePanel }) => (
  <div className="useful-links-panel-content panel panel-default vertical-align" onClick={() => changePanel('GUIDE')}>
    <div className="panel-body text-center">
      <FontAwesome className="useful-links-panel-content__icon" name="book" />
      <p className="useful-links-panel-content__text">{localizationText[language].usefullLinksText}</p>
    </div>
  </div>
)

UsefulLinksPanel.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default UsefulLinksPanel
