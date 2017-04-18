import React from 'react';
import './ServicesTabs.css';

export const ServicesTabs = () => (
  <div className="">
    <ul id="loanServicesTabs" className="nav nav-tabs text-center">
      <li className="serviceTab active">
        <a href="#loanHistory" aria-controls="history" role="tab" data-toggle="tab">Κινήσεις</a>
      </li>
      <li className="serviceTab">
        <a id="loanPaymentTab" href="#loanPayment" aria-controls="payment" role="tab" data-toggle="tab">Πληρωμή</a>
      </li>
    </ul>
  </div>
)

export default ServicesTabs
