import React from 'react';
import MovementsHistory from '../MovementsHistory';
import LinkedProducts from '../LinkedProducts';
import Deactivate from '../Deactivate';
import './ServicesPanels.css';

export const ServicesPanels = () => (
  <div id="cardPanels" className="tab-content">
    <MovementsHistory />
    <LinkedProducts />
    <Deactivate />
  </div>
)

export default ServicesPanels
