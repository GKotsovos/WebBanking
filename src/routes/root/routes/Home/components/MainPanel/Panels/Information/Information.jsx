import React, { PropTypes } from 'react'
import FontAwesome from 'react-fontawesome'
import localizationText from './localizationText';

export const Information = ({ language, changePanel }) => (
  <div id="information" className="">
    <FontAwesome id="closeInfoPanel" name="window-close-o" onClick={() => changePanel('NEWS')} />
    <h3 id="infoTittle">{localizationText[language].informationTitle}</h3>
    <p>{localizationText[language].firstParagraph}</p>
    <p>{localizationText[language].secondParagraph}<br/>
    <a href="">contact@agilebank.gr</a></p>
    <p id="lastPInfo">{localizationText[language].secondParagraph}<br/>
    {localizationText[language].contactDetails}<br/></p>

  </div>
)

Information.PropTypes = {
  language: PropTypes.string.isRequired,
  changePanel: PropTypes.func.isRequired
};

export default Information
