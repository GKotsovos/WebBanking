import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import Card from '../../../containers/CardContainer'
import './PrepaidCardsLayout.css';

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
