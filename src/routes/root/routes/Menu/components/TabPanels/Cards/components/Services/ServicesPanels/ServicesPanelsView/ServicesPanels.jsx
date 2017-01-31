import React from 'react';
import MovementsHistory from '../MovementsHistory';
import LinkedProducts from '../LinkedProducts';
import './ServicesPanels.css';

export const ServicesPanels = () => (
  <div id="cardPanels" className="tab-content">
    <MovementsHistory />
    <LinkedProducts />
  </div>
)

export default ServicesPanels
