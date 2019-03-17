import React from 'react';
import localizationText from './localizationText';

export const PrepaidCardServicesTabs = ({ activeRoute, initCardTransactionForm, language, linkTo }) => (
  <div>
    <ul className="nav nav-tabs text-center services-tabs">
      <li
        className={`services-tab ${activeRoute.endsWith('card') ? 'active' : ''}`}
        onClick={() => linkTo('/banking/cards/prepaidcards/card')}>
        <a href="#cardHistory" aria-controls="history" role="tab" data-toggle="tab">
          {localizationText[language].movements}
        </a>
      </li>
      <li
        className={`services-tab ${activeRoute.includes('card/load') ? 'active' : ''}`}
        onClick={() => {
          initCardTransactionForm();
          linkTo('/banking/cards/prepaidcards/card/load');
        }}>
        <a href="#load" aria-controls="load" role="tab" data-toggle="tab">
          {localizationText[language].load}
        </a>
      </li>
    </ul>
  </div>
)

export default PrepaidCardServicesTabs
