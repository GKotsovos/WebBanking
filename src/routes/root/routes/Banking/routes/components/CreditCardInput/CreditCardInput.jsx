import React from 'react'
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export const CreditCardInput = ({ selectedCreditCard, language, setCreditCardForPayment }) => (
  <div>
    <label htmlFor="credit-card-input">{localizationText[language].cardNumberTitle}</label>
    <input
      id="credit-card-input"
      className={`form-control ${isEmpty(selectedCreditCard) || selectedCreditCard.correct ? "" : "invalid-value"}`}
      value={selectedCreditCard ? selectedCreditCard.value : ""}
      onChange={(e) => setCreditCardForPayment(e.target.value)}
    />
  </div>
)

export default CreditCardInput
