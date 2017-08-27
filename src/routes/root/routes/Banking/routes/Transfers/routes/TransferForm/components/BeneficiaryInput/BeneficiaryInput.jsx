import React from 'react'
import _ from 'underscore';
import './BeneficiaryInput.css';

export const BeneficiaryInput = ({ fullName, setCreditFullName}) => (
  <input
    className={`form-control bottomOfTwoDivs ${_.isEmpty(fullName) || fullName.correct ? "" : "notValid"}`}
    value={fullName.value || ""}
    placeholder="Ονοματεπώνυμο Δικαιούχου"
    onChange={(e) => setCreditFullName(e.target.value)}
  />
)

export default BeneficiaryInput
