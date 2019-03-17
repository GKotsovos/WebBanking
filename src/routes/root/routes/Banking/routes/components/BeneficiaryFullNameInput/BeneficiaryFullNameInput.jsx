import React from 'react'
import localizationText from './localizationText';
import _ from 'underscore';

export const BeneficiaryFullNameInput = ({ fullName, language, setCreditFullName}) => (
  <input
    className={`form-control form-group ${_.isEmpty(fullName) || fullName.correct ? "" : "invalid-value"}`}
    value={fullName.value ? fullName.value : ""}
    placeholder={localizationText[language].beneficiaryFullNamePlaceholder}
    onChange={(e) => setCreditFullName(e.target.value)}
  />
)

export default BeneficiaryFullNameInput
