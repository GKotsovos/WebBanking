import React from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

export const CreditAccountInput = ({ showTitle, creditAccount, language, setCreditAccount}) => (
  <div className="form-group bottomOfTwoDivs">
    {
      showTitle ? <label htmlFor="transferIBAN">{localizationText[language].to}</label> : null
    }
    <input
      id="transferIBAN"
      className={`form-control ${_.isEmpty(creditAccount) || creditAccount.correct ? "" : "notValid"}`}
      value={creditAccount.value ? creditAccount.value : ""}
      onChange={(e) => setCreditAccount(e.target.value)}
      placeholder="IBAN"
    />
  </div>
)

export default CreditAccountInput
