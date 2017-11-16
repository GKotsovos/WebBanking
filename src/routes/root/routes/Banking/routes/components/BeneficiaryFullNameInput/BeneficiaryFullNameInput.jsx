import React from 'react'
import localizationText from './localizationText';
import _ from 'underscore';

export const BeneficiaryFullNameInput = ({ fullName, language, setCreditFullName}) => (
  <input
    className={`form-control bottomOfTwoDivs ${_.isEmpty(fullName) || fullName.correct ? "" : "notValid"}`}
    value={fullName ? fullName.value : ""}
    placeholder={localizationText[language].beneficiaryFullNamePlaceholder}
    onChange={(e) => setCreditFullName(e.target.value)}
  />
)

export default BeneficiaryFullNameInput
