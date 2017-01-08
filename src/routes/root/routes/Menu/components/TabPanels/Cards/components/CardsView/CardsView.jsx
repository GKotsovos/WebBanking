import React from 'react';
import Card from '../Card'
import DetailedCard from '../DetailedCard'
import Services from '../Services'
import './CardsView.css';

export const CardsView = () => (
  <div role="tabpanel" className="tab-pane active" id="cards">
    <DetailedCard />
    <Services />
  </div>
)

export default CardsView
