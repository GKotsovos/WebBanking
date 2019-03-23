import React, { PropTypes } from 'react'
import ClosePanelButton from 'routes/root/routes/Home/containers/ClosePanelButtonContainer';
import localizationText from './localizationText';

export const Information = ({ language }) => (
  <div className="information-panel-content">
    <ClosePanelButton />
    <h3 className="information-panel-content__title">{localizationText[language].informationTitle}</h3>
    <p>{localizationText[language].firstParagraph}</p>
    <p>{localizationText[language].secondParagraph}<br/>
    <a href="javascript:void(0)">contact@agilebank.gr</a></p>
    <p>{localizationText[language].secondParagraph}<br/>
    {localizationText[language].contactDetails}<br/></p>
  </div>
)

Information.PropTypes = {
  language: PropTypes.string.isRequired,
};

export default Information
