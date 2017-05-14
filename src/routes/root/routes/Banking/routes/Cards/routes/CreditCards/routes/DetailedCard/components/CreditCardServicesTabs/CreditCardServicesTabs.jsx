import React from 'react';
import './CreditCardServicesTabs.css';

export const CreditCardServicesTabs = ({ linkTo }) => (
  <div className="">
    <ul id="creditCardServicesTabs" className="nav nav-tabs text-center">
      <li className="serviceTab active" onClick={() => linkTo('/banking/cards/creditcards/card')}>
        <a href="#cardHistory" aria-controls="history" role="tab" data-toggle="tab">Κινήσεις</a>
      </li>
      <li className="serviceTab" onClick={() => linkTo('/banking/cards/creditcards/card/payment')}>
        <a id="cardPaymentTab" href="#cardPayment" aria-controls="payment" role="tab" data-toggle="tab">Πληρωμή</a>
      </li>
    </ul>
  </div>
)

export default CreditCardServicesTabs
