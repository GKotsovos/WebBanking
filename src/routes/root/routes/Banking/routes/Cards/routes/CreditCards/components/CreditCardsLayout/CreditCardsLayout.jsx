import React from 'react';
import Card from '../../../containers/CardContainer'
import { isEmpty } from 'underscore';

export const CreditCardsLayout = ({ children, creditCards, activeCard }) => (
  <div role="tabpanel" className="tab-pane" id="credit">
    {
      isEmpty(activeCard) ? creditCards.map(creditCard => <Card key={creditCard.id} card={creditCard} type="CREDIT"/>) : children
    }
  </div>
)

export default CreditCardsLayout
