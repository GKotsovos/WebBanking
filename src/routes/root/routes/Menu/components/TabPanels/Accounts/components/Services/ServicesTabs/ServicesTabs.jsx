import React from 'react';
import './ServicesTabs.css';

export const ServicesTabs = () => (
  <div className="">
    <ul id="servicesTabs" className="nav nav-tabs text-center">
      <li className="tab active">
        <a href="#history" aria-controls="history" role="tab" data-toggle="tab">Κινήσεις</a>
      </li>
      <li className="tab">
        <a href="#transfer" aria-controls="transfer" role="tab" data-toggle="tab">Μεταφορά</a>
      </li>
      <li className="tab">
        <a href="#orders" aria-controls="orders" role="tab" data-toggle="tab">Πάγιες</a>
      </li>
    </ul>
  </div>
)

export default ServicesTabs
