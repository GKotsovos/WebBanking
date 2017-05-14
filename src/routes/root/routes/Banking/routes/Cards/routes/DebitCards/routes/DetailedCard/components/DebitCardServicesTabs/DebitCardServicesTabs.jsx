import React from 'react';
import './DebitCardServicesTabs.css';

export const DebitCardServicesTabs = ({ linkTo }) => (
  <div className="">
    <ul id="debitCardServicesTabs" className="nav nav-tabs text-center">
      <li className="serviceTab active" onClick={() => linkTo('/banking/cards/debitcards/card')}>
        <a href="#cardHistory" aria-controls="history" role="tab" data-toggle="tab">Κινήσεις</a>
      </li>
      <li className="serviceTab" onClick={() => linkTo('/banking/cards/debitcards/card/linkedproducts')}>
        <a id="cardProductsTab" href="#cardProducts" aria-controls="products" role="tab" data-toggle="tab">Συνδεδεμένα<br/>Προϊόντα</a>
      </li>
    </ul>
  </div>
)

export default DebitCardServicesTabs
