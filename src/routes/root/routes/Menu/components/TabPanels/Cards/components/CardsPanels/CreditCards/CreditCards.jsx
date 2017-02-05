import React from 'react';
import Card from '../components/Card'
import './CreditCards.css';

export const CreditCards = () => (
  <div role="tabpanel" className="tab-pane" id="credit">
    <Card />
    <Card />
  </div>
)

export default CreditCards
