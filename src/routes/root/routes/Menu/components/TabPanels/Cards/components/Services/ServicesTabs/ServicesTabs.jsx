import React from 'react';
import './ServicesTabs.css';

export const ServicesTabs = () => (
  <div className="">
    <ul id="cardServicesTabs" className="nav nav-tabs text-center">
      <li className="tab active">
        <a href="#cardHistory" aria-controls="history" role="tab" data-toggle="tab">Κινήσεις</a>
      </li>
      <li className="tab">
        <a id="cardProductsTab" href="#cardProducts" aria-controls="transfer" role="tab" data-toggle="tab">Συνδεδεμένα<br/>Προϊόντα</a>
      </li>
    </ul>
  </div>
)

export default ServicesTabs
