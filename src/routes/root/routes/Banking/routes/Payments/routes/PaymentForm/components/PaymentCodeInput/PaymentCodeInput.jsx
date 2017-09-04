import React from 'react'
import _ from 'underscore';
import './PaymentCodeInput.css';

export const PaymentCodeInput = ({ paymentCode, setPaymentCode }) => (
  <div className="form-group bottomOfTwoDivs">
    <label htmlFor="paymentCode">Κωδικός Πληρωμής</label>
    <input
      id="paymentCode"
      className={`form-control ${_.isEmpty(paymentCode) || paymentCode.correct ? "" : "notValid"}`}
      value={paymentCode.value || ""}
      onChange={(e) => setPaymentCode(e.target.value)}
    />
  </div>
)

export default PaymentCodeInput
