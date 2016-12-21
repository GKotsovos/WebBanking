import React from 'react';
import './ServicesTabs.css';

export const ServicesTabs = () => (
  <div className="">
    <ul id="tabs" className="nav nav-tabs text-center" role="tablist">
      <li role="presentation" className="tab active">
        <a href="#history" aria-controls="history" role="tab" data-toggle="tab">Κινήσεις</a>
      </li>
      <li role="presentation" className="tab">
        <a href="#transfer" aria-controls="transfer" role="tab" data-toggle="tab">Μεταφορά</a>
      </li>
    </ul>
  </div>
)

export default ServicesTabs
