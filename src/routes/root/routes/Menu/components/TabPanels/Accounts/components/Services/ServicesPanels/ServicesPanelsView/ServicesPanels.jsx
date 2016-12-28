import React from 'react';
import MovementsHistory from '../MovementsHistory';
import Transfer from '../Transfer';
import Orders from '../Orders';
import './ServicesPanels.css';

export const ServicesPanels = () => (
  <div id="servicesPanels" className="tab-content">
    <MovementsHistory />
    <Transfer />
    <Orders />
  </div>
)

export default ServicesPanels
