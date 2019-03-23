import React from 'react';
import localizationText from './localizationText';

export const DebitCardServicesTabs = ({ language, linkTo }) => (
  <div>
    <ul className="nav nav-tabs text-center debit-card-services-tabs services-tabs">
      <li
        className={`services-tab ${window.location.href.endsWith("debitcards/card") ? 'active' : ''}`}
        onClick={() => linkTo('/banking/cards/debitcards/card')}>
        <a href="#cardHistory" aria-controls="history" role="tab" data-toggle="tab">
         {localizationText[language].movements}
        </a>
      </li>
      <li
        className={`services-tab debit-card-services-tabs__linked-products-tab ${window.location.href.endsWith("/linkedproducts") ? 'active' : ''}`}
        onClick={() => linkTo('/banking/cards/debitcards/card/linkedproducts')}>
        <a href="#cardProducts" className="debit-card-services-tabs__linked-products-link" aria-controls="products" role="tab" data-toggle="tab">
          {localizationText[language].linked}<br/>{localizationText[language].products}
        </a>
      </li>
    </ul>
  </div>
)

export default DebitCardServicesTabs
