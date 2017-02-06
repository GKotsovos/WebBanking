import React from 'react';
import MovementsHistory from '../MovementsHistory';
import LinkedProducts from '../LinkedProducts';
import CardPayment from '../CardPayment';
import Load from '../Load';
import './ServicesPanels.css';

export const ServicesPanels = () => (
  <div id="cardPanels" className="tab-content">
    <MovementsHistory />
    <LinkedProducts />
    <CardPayment />
    <Load />
  </div>
)

export default ServicesPanels
