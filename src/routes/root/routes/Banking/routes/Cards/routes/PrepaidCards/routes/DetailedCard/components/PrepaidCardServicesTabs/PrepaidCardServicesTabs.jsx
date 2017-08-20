import React from 'react';
import './PrepaidCardServicesTabs.css';

export const PrepaidCardServicesTabs = ({ activeRoute, initCardTransactionForm, linkTo }) => (
  <div className="">
    <ul id="prepaidCardServicesTabs" className="nav nav-tabs text-center">
      <li
        className={`serviceTab ${activeRoute.endsWith('card') ? 'active' : ''}`}
        onClick={() => linkTo('/banking/cards/prepaidcards/card')}>
        <a href="#cardHistory" aria-controls="history" role="tab" data-toggle="tab">Κινήσεις</a>
      </li>
      <li
        className={`serviceTab ${activeRoute.includes('card/load') ? 'active' : ''}`}
        onClick={() => {
          initCardTransactionForm();
          linkTo('/banking/cards/prepaidcards/card/load');
        }}>
        <a id="loadTab" href="#load" aria-controls="load" role="tab" data-toggle="tab">Φόρτιση</a>
      </li>
    </ul>
  </div>
)

export default PrepaidCardServicesTabs
