import React from 'react';
import './PrepaidCardServicesTabs.css';

export const PrepaidCardServicesTabs = ({ initCardTransactionForm, linkTo }) => (
  <div className="">
    <ul id="prepaidCardServicesTabs" className="nav nav-tabs text-center">
      <li className="serviceTab active" onClick={() => linkTo('/banking/cards/prepaidcards/card')}>
        <a href="#cardHistory" aria-controls="history" role="tab" data-toggle="tab">Κινήσεις</a>
      </li>
      <li className="serviceTab" onClick={() => {
        initCardTransactionForm();
        linkTo('/banking/cards/prepaidcards/card/load');
      }}>
        <a id="loadTab" href="#load" aria-controls="load" role="tab" data-toggle="tab">Φόρτιση</a>
      </li>
    </ul>
  </div>
)

export default PrepaidCardServicesTabs
