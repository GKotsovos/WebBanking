import React from 'react'
import FontAwesome from 'react-fontawesome'
import './CardsTabs.css'

export const CardsTabs = ({ activeRoute, linkTo, deactivateCard }) => (
  <div>
    <ul id="cardTypeTabs" className="nav nav-tabs text-center" role="tablist">
      <li className={`cardTypeTab ${window.location.href.includes('/debitcards') ? 'active' : ''}`}
        onClick={() => {
          deactivateCard();
          linkTo('/banking/cards/debitcards');
        }}>
        <a href="#debit" className="mainCardTab" aria-controls="debit" role="tab" data-toggle="tab">Χρεωστικές</a>
      </li>
        <li className={`cardTypeTab ${window.location.href.includes('/creditcards') ? 'active' : ''}`}
          onClick={() => {
            deactivateCard();
            linkTo('/banking/cards/creditcards');
          }}>
        <a href="#credit" className="mainCardTab" aria-controls="credit" role="tab" data-toggle="tab">Πιστωτικές</a>
      </li>
        <li className={`cardTypeTab ${window.location.href.includes('/prepaid') ? 'active' : ''}`}
          onClick={() => {
            deactivateCard();
            linkTo('/banking/cards/prepaidcards');
          }}>
        <a href="#prepaid" className="mainCardTab" aria-controls="prepaid" role="tab" data-toggle="tab">Προπληρωμένες</a>
      </li>
    </ul>
  </div>
)

export default CardsTabs
