import React from 'react';
import Card from '../Card'
import DetailedCard from '../DetailedCard'
import Services from '../Services'
import './CardsView.css';

export const CardsView = () => (
  <div role="tabpanel" className="tab-pane active" id="cards2">

    <Card />
    <Card />
    <Card />

    {/* <DetailedCard /> */}
    {/* <Services /> */}
  </div>
)

export default CardsView
