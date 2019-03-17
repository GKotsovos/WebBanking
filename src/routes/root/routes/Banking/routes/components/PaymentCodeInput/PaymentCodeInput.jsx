import React from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

export const PaymentCodeInput = ({ paymentCode, language, setPaymentCode }) => (
  <div>
    <label htmlFor="payment-code">{localizationText[language].paymentCodeLabel}</label>
    <input
      id="payment-cod"
      className={`form-control ${_.isEmpty(paymentCode) || paymentCode.correct ? "" : "invalid-value"}`}
      value={paymentCode.value || ""}
      onChange={(e) => setPaymentCode(e.target.value)}
    />
  </div>
)

export default PaymentCodeInput
