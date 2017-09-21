import React from 'react'
import _ from 'underscore';
import './BicInput.css';

export const BicInput = ({ bank, setCreditBankBIC }) => (
  <div
    className="bottomOfTwoDivs">
    <label htmlFor="transferBIC">BIC Τράπεζας</label>
    <input
      id="transferBIC"
      className={`form-control transferBIC ${_.isEmpty(bank) || bank.correct ? "" : "notValid"}`}
      value={bank.bic || ""}
      placeholder="BIC"
      onChange={(e) => setCreditBankBIC(e.target.value)}
    />
  </div>
)

export default BicInput
