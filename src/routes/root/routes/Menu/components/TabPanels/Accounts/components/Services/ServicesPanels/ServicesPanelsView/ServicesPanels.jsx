import React from 'react';
import MovementsHistory from '../MovementsHistory';
import Transfer from '../Transfer';
import './ServicesPanels.css';

export const ServicesPanels = () => (
  <div id="servicesPanels" className="tab-content">
    <MovementsHistory />
    <Transfer />
  </div>
)

export default ServicesPanels
