import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';
import './NewApplication.css'

export const NewApplication = ({ language, changePanel }) => (
  <div id="newApplication" className="">
    <FontAwesome className="closePanel" name="window-close-o" onClick={() => changePanel('NEWS')} />
    <h3 id="newApplicationTitle">{localizationText[language].newApplicationTitle}</h3>
    <p>{localizationText[language].firstParagraph}</p>
    <ul>
      <li>{localizationText[language].phoneApplicationText}</li>
      <li>{localizationText[language].visitingBranchApplicationText}</li>
    </ul>
  </div>
)

NewApplication.PropTypes = {
  changePanel: PropTypes.func.isRequired
};

export default NewApplication
