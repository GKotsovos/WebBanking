import React from 'react';
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import './CardPanelHeader.css';

export const CardPanelHeader = ({ card, type }) => (
  <div className="cardTitle panel-heading">
    <h3 className="panel-title">
      <span className="titles">
        ({currencyFormatter.findCurrency(card.currency).symbol}) {type} {card.brand}
      </span>
      <span className="titles cardNumber">
        {_.map(card.id, ((num, key) =>  key % 4 == 0 && key != 0 ? ' ' + num : num ))}
      </span>
    </h3>
  </div>
)

export default CardPanelHeader
