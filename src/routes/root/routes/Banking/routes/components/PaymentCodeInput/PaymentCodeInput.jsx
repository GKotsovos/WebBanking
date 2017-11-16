import React from 'react'
import _ from 'underscore';
import localizationText from './localizationText';
import './PaymentCodeInput.css';

export const PaymentCodeInput = ({ paymentCode, language, setPaymentCode }) => (
  <div>
    <label htmlFor="paymentCode">{localizationText[language].paymentCodeLabel}</label>
    <input
      id="paymentCode"
      className={`form-control ${_.isEmpty(paymentCode) || paymentCode.correct ? "" : "notValid"}`}
      value={paymentCode.value || ""}
      onChange={(e) => setPaymentCode(e.target.value)}
    />
  </div>
)

export default PaymentCodeInput
