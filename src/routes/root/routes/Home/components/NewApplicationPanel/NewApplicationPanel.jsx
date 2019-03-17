import React from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';

export const NewApplicationPanel = ({ language, changePanel }) => (
  <ul className="list-group">
    <li className="new-user-panel list-group-item">
      <h3 className="panel-title vertical-alignLogin">
        <FontAwesome id="userIcon" className="new-user-panel__icon" name="user" />
        <span>{localizationText[language].newUserTitle}</span>
      </h3>
      <button
        onClick={() => changePanel('NEW_APPLICATION')}
        className="common-button--yellow new-user-panel__button btn"
        type="submit">
        {localizationText[language].applicationButton}
      </button>
    </li>
  </ul>
)

export default NewApplicationPanel
