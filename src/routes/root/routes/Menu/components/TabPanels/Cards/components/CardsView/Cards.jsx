import React from 'react';
import CardsTabs from '../CardsTabs'
import CardsPanels from '../CardsPanels'
import './Cards.css';

export const Cards = () => (
  <div id="cards" role="tabpanel" className="cardsContainer tab-pane active">
    <CardsTabs />
    <CardsPanels />
  </div>
)

export default Cards
