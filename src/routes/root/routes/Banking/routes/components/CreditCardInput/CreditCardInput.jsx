import React from 'react'
import _ from 'underscore';
import './CreditCardInput.css';

export const CreditCardInput = ({ selectedCreditCard, setCreditCardForPayment }) => (
  <div>
    <label htmlFor="paymentCreditCard">Αριθμός κάρτας</label>
    <input
      id="paymentCreditCard"
      className={`form-control ${_.isEmpty(selectedCreditCard) || selectedCreditCard.correct ? "" : "notValid"}`}
      value={selectedCreditCard ? selectedCreditCard.value : ""}
      onChange={(e) => setCreditCardForPayment(e.target.value)}
    />
  </div>
)

export default CreditCardInput
