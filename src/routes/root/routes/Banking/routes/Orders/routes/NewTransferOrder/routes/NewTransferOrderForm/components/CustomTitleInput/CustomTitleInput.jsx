import React from 'react'
import localizationText from './localizationText';
import { isEmpty } from 'underscore';

export const CustomTitleInput = ({ customTitle, language, setTransferOrderCustomTitle }) => (
  <div className="form-group">
    <label htmlFor="transfer-order-title">{localizationText[language].title}</label>
    <input
      id="transfer-order-title"
      className={`form-control ${isEmpty(customTitle) || customTitle.correct ? "" : "invalid-value"}`}
      value={customTitle ? customTitle.value : ""}
      placeholder={localizationText[language].titlePlaceholder}
      onChange={(e) => setTransferOrderCustomTitle(e.target.value)}
    />
  </div>
)

export default CustomTitleInput
