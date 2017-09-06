import React from 'react'
import _ from 'underscore';
import './AmountInput.css';

export const AmountInput = ({ amount, setTransactionAmount}) => (
  <div className="form-group bottomOfTwoDivs">
    <label htmlFor="transactionAmount">Ποσό</label>
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
