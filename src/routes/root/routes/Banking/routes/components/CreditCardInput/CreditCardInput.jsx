import React from 'react'
import _ from 'underscore';
import localizationText from './localizationText';
import './CreditCardInput.css';

export const CreditCardInput = ({ selectedCreditCard, language, setCreditCardForPayment }) => (
  <div>
    <label htmlFor="paymentCreditCard">{localizationText[language].cardNumberTitle}</label>
    <input
      id="paymentCreditCard"
      className={`form-control ${_.isEmpty(selectedCreditCard) || selectedCreditCard.correct ? "" : "notValid"}`}
      value={selectedCreditCard ? selectedCreditCard.value : ""}
      onChange={(e) => setCreditCardForPayment(e.target.value)}
    />
  </div>
)

export default CreditCardInput
