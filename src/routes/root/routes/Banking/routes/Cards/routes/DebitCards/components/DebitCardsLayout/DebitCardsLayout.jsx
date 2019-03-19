import React from 'react';
import Card from '../../../containers/CardContainer'
import { isEmpty } from 'underscore';

export const DebitCardsLayout = ({ children, debitCards, activeCard }) => (
  <div role="tabpanel" className="tab-pane active" id="debit">
    {
      isEmpty(activeCard) ?
        debitCards.map(debitCard => <Card key={debitCard.id} card={debitCard.debitCard} type="DEBIT"/>)
        : children
    }
  </div>
)

export default DebitCardsLayout
