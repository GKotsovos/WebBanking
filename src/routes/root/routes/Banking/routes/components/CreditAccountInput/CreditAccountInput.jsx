import React from 'react'
import _ from 'underscore';
import localizationText from './localizationText';
import './CreditAccountInput.css';

export const CreditAccountInput = ({ creditAccount, language, setCreditAccount}) => (
  <div className="form-group bottomOfTwoDivs">
    <label htmlFor="transferIBAN">{localizationText[language].to}</label>
    <input
      id="transferIBAN"
      className={`form-control ${_.isEmpty(creditAccount) || creditAccount.correct ? "" : "notValid"}`}
      value={creditAccount? creditAccount.value : ""}
      onChange={(e) => setCreditAccount(e.target.value)}
      placeholder="IBAN"
    />
  </div>
)

export default CreditAccountInput
