import React from 'react';
import ServicesTabs from '../ServicesTabs';
import { MovementsHistory } from '../ServicesPanels';
import { Transfer } from '../ServicesPanels'
import './Services.css';

export const Services = () => (
  <div className="servicesContainer">
    <ServicesTabs />
    <MovementsHistory />
    <Transfer />
  </div>
)

export default Services
