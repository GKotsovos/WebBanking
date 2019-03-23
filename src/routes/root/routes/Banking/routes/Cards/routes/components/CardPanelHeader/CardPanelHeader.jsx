import React from 'react';
import currencyFormatter from 'currency-formatter';
import { formatCardNumber } from 'routes/root/routes/Banking/routes/utils/commonUtils';

export const CardPanelHeader = ({ card, type }) => (
  <div className="card-header panel-title panel-heading">
    <h3 className="panel-title card-header__title">
      <span>
        ({currencyFormatter.findCurrency(card.currency).symbol}) {type} {card.brand}
      </span>
      <span>{formatCardNumber(card.id)}</span>
    </h3>
  </div>
)

export default CardPanelHeader
