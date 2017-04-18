import React from 'react';
import './ServicesTabs.css';

export const ServicesTabs = () => (
  <div className="">
    <ul id="cardServicesTabs" className="nav nav-tabs text-center">
      <li className="serviceTab active">
        <a href="#cardHistory" aria-controls="history" role="tab" data-toggle="tab">Κινήσεις</a>
      </li>
      <li className="serviceTab">
        <a id="cardProductsTab" href="#cardProducts" aria-controls="products" role="tab" data-toggle="tab">Συνδεδεμένα<br/>Προϊόντα</a>
      </li>
      <li className="serviceTab">
        <a id="cardPaymentTab" href="#cardPayment" aria-controls="payment" role="tab" data-toggle="tab">Πληρωμή</a>
      </li>
      <li className="serviceTab">
        <a id="loadTab" href="#load" aria-controls="load" role="tab" data-toggle="tab">Φόρτιση</a>
      </li>
    </ul>
  </div>
)

export default ServicesTabs
