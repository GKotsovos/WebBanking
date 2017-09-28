import React from 'react';
import CardPanelHeader from '../CardPanelHeader';
import CardPanelBody from '../CardPanelBody';
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
    <CardPanelHeader
      card={card}
      type={type}
    />
    <CardPanelBody
      card={card}
      type={type}
    />
  </div>
)

export default Card
