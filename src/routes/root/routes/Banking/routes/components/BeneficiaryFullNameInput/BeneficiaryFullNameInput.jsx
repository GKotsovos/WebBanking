import React from 'react'
import _ from 'underscore';

export const BeneficiaryFullNameInput = ({ fullName, setCreditFullName}) => (
  <input
    className={`form-control bottomOfTwoDivs ${_.isEmpty(fullName) || fullName.correct ? "" : "notValid"}`}
    value={fullName ? fullName.value : ""}
    placeholder="Ονοματεπώνυμο Δικαιούχου"
    onChange={(e) => setCreditFullName(e.target.value)}
  />
)

export default BeneficiaryFullNameInput
