import React from 'react';
import CardPanelHeader from '../CardPanelHeader';
import CardPanelBody from '../CardPanelBody';
import CardExtraDetails from '../CardExtraDetails';
import CreditCardExtraDetails from '../CreditCardExtraDetails';

export const DetailedCard = ({ activeCard, type, language }) => (
  <div className="panel panel-default detailedCardContainer">
    <CardPanelHeader
      card={activeCard}
      type={type}
      language={language}
    />
    <CardPanelBody
      card={activeCard}
      type={type}
      language={language}
    />
    <CardExtraDetails
      card={activeCard}
      type={type}
      language={language}
    />
    {
      type === 'CREDIT' ? (
        <CreditCardExtraDetails
          card={activeCard}
          type={type}
          language={language}
        />
      ) : null
    }
  </div>
)

export default DetailedCard
