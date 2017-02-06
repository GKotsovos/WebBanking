import React from 'react'
import FontAwesome from 'react-fontawesome'
import './CardsTabs.css'

export const CardsTabs = () => (
  <div>
    <ul id="cardTypeTabs" className="nav nav-tabs text-center" role="tablist">
      <li role="presentation" className="cardTypeTab active">
        <a href="#debit" className="mainCardTab" aria-controls="debit" role="tab" data-toggle="tab">Χρεωστικές</a>
      </li>
      <li role="presentation" className="cardTypeTab">
        <a href="#credit" className="mainCardTab" aria-controls="credit" role="tab" data-toggle="tab">Πιστωτικές</a>
      </li>
      <li role="presentation" className="cardTypeTab">
        <a href="#prepaid" className="mainCardTab" aria-controls="prepaid" role="tab" data-toggle="tab">Προπληρωμένες</a>
      </li>
    </ul>
  </div>
)

export default CardsTabs
