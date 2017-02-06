import React from 'react';
import Card from '../components/Card'
import DetailedCard from '../components/DetailedCard'
import Services from '../components/Services'
import './DebitCards.css';

export const DebitCards = () => (
  <div role="tabpanel" className="tab-pane active" id="debit">
    {/* <Card />
    <Card />
    <Card /> */}
    <DetailedCard />
    <Services />
  </div>
)

export default DebitCards
