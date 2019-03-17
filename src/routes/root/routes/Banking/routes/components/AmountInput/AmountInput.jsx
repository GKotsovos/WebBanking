import React from 'react'
import _ from 'underscore';

export const AmountInput = ({ title, amount, setTransactionAmount}) => (
  <div className="form-group amount-input-container">
    <label htmlFor="amount-input">{title}</label>
    <input
      className={`form-control amount-input text-right ${_.isEmpty(amount) || amount.correct ? "" : "invalid-value"}`}
      value={_.isEmpty(amount) ? '' : amount.value}
      onChange={(e) => setTransactionAmount(e.target.value)}
      placeholder="€"
     />
  </div>
)

export default AmountInput
