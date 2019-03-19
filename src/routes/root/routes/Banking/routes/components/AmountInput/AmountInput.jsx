import React from 'react'
import { isEmpty } from 'underscore';

export const AmountInput = ({ title, amount, setTransactionAmount}) => (
  <div className="form-group amount-input-container">
    <label htmlFor="amount-input">{title}</label>
    <input
      className={`form-control amount-input text-right ${isEmpty(amount) || amount.correct ? "" : "invalid-value"}`}
      value={isEmpty(amount) ? '' : amount.value}
      onChange={(e) => setTransactionAmount(e.target.value)}
      placeholder="€"
     />
  </div>
)

export default AmountInput
