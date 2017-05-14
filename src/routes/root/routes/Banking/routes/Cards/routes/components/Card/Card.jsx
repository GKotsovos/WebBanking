import React, { Component } from 'react';
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import './Card.css';

const paths = {
  DEBIT: '/banking/cards/debitcards/card',
  CREDIT: '/banking/cards/creditcards/card',
  PREPAID: '/banking/cards/prepaidcards/card',
}

export const Card = ({ card, type, setActiveCard, getCardTransactionHistory, linkTo }) => (
  <div className="panel panel-default cardContainer" onClick={() => {
    setActiveCard(card);
    getCardTransactionHistory(card.id);
    linkTo(paths[type]);
  }}>
    <div className="cardTitle panel-heading">
      <h3 className="panel-title">
        <span className="titles">
          ({currencyFormatter.findCurrency(card.currency).symbol}) {type} {card.brand}
        </span>
        <span className="titles cardNumber">
          {_.map(card.id, ((num, key) =>  key % 4 == 0 ? ' ' + num : num ))}
        </span>
      </h3>
    </div>
    <div className="panel-body">
      <span className="row">
        {
          type != 'PREPAID' ?
            <span className="col-xs-3 col-sm-2 text-right">
              {
                card[type == 'DEBIT' ? 'dailyLimit' : 'limit'].toLocaleString('gr-GR', {minimumFractionDigits: 2})
              }
            </span>
            : <span className="col-xs-3 col-sm-2 text-right"></span>
        }
        <span className="col-xs-4 col-sm-5 text-right">
          {card.availableLimit.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
        </span>
        <span className="col-xs-offset-1 col-xs-4 text-right">
          {card.ledgerBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
        </span>
      </span>
      <span className="row cardSummary">
        {
          type != 'PREPAID' ?
            <span className="col-xs-3 col-sm-2 text-right">
              { type == 'DEBIT' ? 'Ημερήσιο' : 'Συνολικό' } Όριο
            </span>
            : <span className="col-xs-3 col-sm-2 text-right"></span>
        }
        <span className="col-xs-4 col-sm-5 text-right">Διαθέσιμο Όριο</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">Λογιστικό Υπόλοιπο</span>
      </span>
    </div>
  </div>
)

export default Card
