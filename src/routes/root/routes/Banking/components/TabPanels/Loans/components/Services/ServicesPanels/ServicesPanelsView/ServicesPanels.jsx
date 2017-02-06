import React from 'react';
import MovementsHistory from '../MovementsHistory';
import LoanPayment from '../LoanPayment';
import './ServicesPanels.css';

export const ServicesPanels = () => (
  <div id="loanPanels" className="tab-content">
    <MovementsHistory />
    <LoanPayment />
  </div>
)

export default ServicesPanels
