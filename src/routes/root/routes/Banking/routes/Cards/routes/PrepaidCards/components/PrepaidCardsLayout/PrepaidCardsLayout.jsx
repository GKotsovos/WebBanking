import React from 'react';
import Card from '../../../containers/CardContainer'
import _ from 'underscore';

export const PrepaidCardsLayout = ({ children, prepaidCards, activeCard }) => (
  <div role="tabpanel" className="tab-pane" id="prepaid">
    {
      _.isEmpty(activeCard) ?
        _.map(prepaidCards, (prepaidCard) => <Card key={prepaidCard.id} card={prepaidCard} type="PREPAID"/>)
        : children
    }
  </div>
)

export default PrepaidCardsLayout
