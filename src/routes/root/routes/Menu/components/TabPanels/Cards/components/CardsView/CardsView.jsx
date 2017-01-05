import React from 'react';
import Card from '../Card'
// import Services from '../Services'
import './CardsView.css';

export const CardsView = () => (
  <div role="tabpanel" className="tab-pane active" id="cards">
    <Card />
    {/*<Services />*/}
  </div>
)

export default CardsView
