import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import Card from '../../../containers/CardContainer'
import './CreditCardsLayout.css';

export const CreditCardsLayout = ({ children, creditCards, activeCard }) => (
  <div role="tabpanel" className="tab-pane" id="credit">
    {
      _.isEmpty(activeCard) ?
        _.map(creditCards, (creditCard) => <Card key={creditCard.id} card={creditCard} type="CREDIT"/>)
        : children
    }
  </div>
)

export default CreditCardsLayout
