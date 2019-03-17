import React from 'react';
import CardPanelHeader from '../CardPanelHeader';
import CardPanelBody from '../CardPanelBody';

const paths = {
  DEBIT: '/banking/cards/debitcards/card',
  CREDIT: '/banking/cards/creditcards/card',
  PREPAID: '/banking/cards/prepaidcards/card',
}

export const Card = ({
  card,
  type,
  language,
  setActiveCard,
  getCardTransactionHistory,
  linkTo
}) => (
  <div className="panel panel-default card" onClick={() => {
    setActiveCard(card);
    getCardTransactionHistory(card.id);
    linkTo(paths[type]);
  }}>
    <CardPanelHeader
      card={card}
      type={type}
      language={language}
    />
    <CardPanelBody
      card={card}
      type={type}
      language={language}
    />
  </div>
)

export default Card
