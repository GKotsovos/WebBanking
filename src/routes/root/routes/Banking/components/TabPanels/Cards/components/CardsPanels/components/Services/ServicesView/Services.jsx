import React from 'react';
import ServicesTabs from '../ServicesTabs';
import ServicesPanels from '../ServicesPanels';
import './Services.css';

export const Services = () => (
  <div className="servicesContainer">
    <ServicesTabs />
    <ServicesPanels />
  </div>
)

export default Services
