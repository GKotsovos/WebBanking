import React from 'react';
import localizationText from './localizationText';

export const CreditCardServicesTabs = ({ activeRoute, language, initCardTransactionForm, linkTo }) => (
  <div className="">
    <ul id="creditCardServicesTabs" className="nav nav-tabs text-center">
      <li
        className={`serviceTab ${activeRoute.endsWith('card') ? 'active' : ''}`}
        onClick={() => linkTo('/banking/cards/creditcards/card')}>
        <a
          href="#cardHistory"
          aria-controls="history"
          role="tab"
          data-toggle="tab">
          {localizationText[language].transactions}
        </a>
      </li>
      <li
        className={`serviceTab ${activeRoute.includes('card/payment') ? 'active' : ''}`}
        onClick={() =>{
          initCardTransactionForm();
          linkTo('/banking/cards/creditcards/card/payment');
        }}>
        <a
          id="cardPaymentTab"
          href="#cardPayment"
          aria-controls="payment"
          role="tab"
          data-toggle="tab">
          {localizationText[language].payment}
        </a>
      </li>
    </ul>
  </div>
)

export default CreditCardServicesTabs
