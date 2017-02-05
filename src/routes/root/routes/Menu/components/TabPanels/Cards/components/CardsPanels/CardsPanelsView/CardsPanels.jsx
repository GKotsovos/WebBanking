import React from 'react';
import CreditCards from '../CreditCards'
import DebitCards from '../DebitCards'
import PrepaidCards from '../PrepaidCards'
import './CardsPanels.css';

export const CardsPanels = () => (
  <div className="tab-content">
    <DebitCards />
    <CreditCards />
    <PrepaidCards />
  </div>
)

export default CardsPanels
