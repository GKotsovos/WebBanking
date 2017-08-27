import React from 'react'
import _ from 'underscore';
import './AmountInput.css';

export const AmountInput = ({ amount, setTransferAmount}) => (
  <div className="form-group bottomOfTwoDivs">
    <label htmlFor="transferAmount">Ποσό</label>
    <input
      id="transferAmount"
      className={`form-control text-right ${_.isEmpty(amount) || amount.correct ? "" : "notValid"}`}
      value={amount.value || ""}
      onChange={(e) => setTransferAmount(e.target.value)}
      placeholder="€"
     />
  </div>
)

export default AmountInput
