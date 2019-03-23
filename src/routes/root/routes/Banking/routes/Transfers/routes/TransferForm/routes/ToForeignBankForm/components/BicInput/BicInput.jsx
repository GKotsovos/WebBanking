import React from 'react'
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export const BicInput = ({ bank, language, setCreditBankBIC }) => (
  <div
    className="form-group">
    <label htmlFor="bic">{localizationText[language].bankBic}</label>
    <input
      id="bic"
      className={`form-control bic-input ${isEmpty(bank) || bank.correct ? "" : "invalid-value"}`}
      value={bank.bic || ""}
      placeholder="BIC"
      onChange={(e) => setCreditBankBIC(e.target.value)}
    />
  </div>
)

export default BicInput
