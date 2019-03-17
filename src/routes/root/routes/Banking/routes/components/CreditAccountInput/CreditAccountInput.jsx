import React from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

export const CreditAccountInput = ({ showTitle, creditAccount, language, setCreditAccount}) => (
  <div className="form-group">
    {
      showTitle ? <label htmlFor="credit-account-input">{localizationText[language].to}</label> : null
    }
    <input
      id="credit-account-input"
      className={`form-control ${_.isEmpty(creditAccount) || creditAccount.correct ? "" : "invalid-value"}`}
      value={creditAccount.value ? creditAccount.value : ""}
      onChange={(e) => setCreditAccount(e.target.value)}
      placeholder="IBAN"
    />
  </div>
)

export default CreditAccountInput
