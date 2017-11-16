import React from 'react'
import localizationText from './localizationText';
import _ from 'underscore';

export const CustomTitleInput = ({ customTitle, language, setTransferOrderCustomTitle }) => (
  <div className="form-group">
    <label htmlFor="transferOrderTitle">{localizationText[language].title}</label>
    <input
      id="transferOrderTitle"
      className={`form-control ${_.isEmpty(customTitle) || customTitle.correct ? "" : "notValid"}`}
      value={customTitle ? customTitle.value : ""}
      placeholder={localizationText[language].titlePlaceholder}
      onChange={(e) => setTransferOrderCustomTitle(e.target.value)}
    />
  </div>
)

export default CustomTitleInput
