import React from 'react'
import _ from 'underscore';

export const AmountInput = ({ title, amount, setTransactionAmount}) => (
  <div className="form-group bottomOfTwoDivs">
    <label htmlFor="transactionAmount">{title}</label>
    <input
      id="transactionAmount"
      className={`form-control text-right ${_.isEmpty(amount) || amount.correct ? "" : "notValid"}`}
      value={_.isEmpty(amount) ? '' : amount.value}
      onChange={(e) => setTransactionAmount(e.target.value)}
      placeholder="€"
     />
  </div>
)

export default AmountInput
