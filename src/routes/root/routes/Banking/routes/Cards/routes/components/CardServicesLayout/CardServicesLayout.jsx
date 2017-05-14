import React from 'react';
import ServicesTabs from '../ServicesTabs';
import ServicesPanels from '../ServicesPanels';
import './Services.css';

export const Services = ({ children }) => (
  <div className="cardServicesLayoutContainer">
    <ServicesTabs />
    <div>
      {children}
    </div>
  </div>
)

export default Services
