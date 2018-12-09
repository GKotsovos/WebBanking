import React from 'react';
import localizationText from './localizationText';

export const DebitCardServicesTabs = ({ language, linkTo }) => (
  <div className="">
    <ul id="debitCardServicesTabs" className="nav nav-tabs text-center">
      <li
        className={`serviceTab ${window.location.href.endsWith("debitcards/card") ? 'active' : ''}`}
        onClick={() => linkTo('/banking/cards/debitcards/card')}>
        <a href="#cardHistory" aria-controls="history" role="tab" data-toggle="tab">
         {localizationText[language].movements}
        </a>
      </li>
      <li
        className={`serviceTab ${window.location.href.endsWith("/linkedproducts") ? 'active' : ''}`}
        onClick={() => linkTo('/banking/cards/debitcards/card/linkedproducts')}>
        <a id="cardProductsTab" href="#cardProducts" aria-controls="products" role="tab" data-toggle="tab">
          {localizationText[language].linked}<br/>{localizationText[language].products}
        </a>
      </li>
    </ul>
  </div>
)

export default DebitCardServicesTabs
