import React from 'react'
import ClosePanelButton from 'routes/root/routes/Home/containers/ClosePanelButtonContainer';
import localizationText from './localizationText';

export const NewApplication = ({ language }) => (
  <div className="new-application-panel">
    <ClosePanelButton />
    <h3 className="new-application-panel__title">{localizationText[language].newApplicationTitle}</h3>
    <p>{localizationText[language].firstParagraph}</p>
    <ul>
      <li>{localizationText[language].phoneApplicationText}</li>
      <li>{localizationText[language].visitingBranchApplicationText}</li>
    </ul>
  </div>
)

export default NewApplication
