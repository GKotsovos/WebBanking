import React from 'react';
import Card from '../../../containers/CardContainer'
import { isEmpty } from 'underscore';

export const PrepaidCardsLayout = ({ children, prepaidCards, activeCard }) => (
  <div role="tabpanel" className="tab-pane" id="prepaid">
    {
      isEmpty(activeCard) ?
        prepaidCards.map(prepaidCard => <Card key={prepaidCard.id} card={prepaidCard} type="PREPAID"/>)
        : children
    }
  </div>
)

export default PrepaidCardsLayout
