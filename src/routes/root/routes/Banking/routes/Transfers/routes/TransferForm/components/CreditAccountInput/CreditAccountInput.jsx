import React from 'react'
import _ from 'underscore';
import './CreditAccountInput.css';

export const CreditAccountInput = ({ creditAccount, setCreditAccount}) => (
  <div className="form-group bottomOfTwoDivs">
    <label htmlFor="transferIBAN">Προς</label>
    <input
      className={`form-control ${_.isEmpty(creditAccount) || creditAccount.correct ? "" : "notValid"}`}
      value={creditAccount.value || ""}
      onChange={(e) => setCreditAccount(e.target.value)}
      placeholder="IBAN"
    />
  </div>
)

export default CreditAccountInput
