import React from 'react'
import './Tabs.css'

export const Tabs = () => (
  <div className="verticalCenter">
    <ul id="tabs" className="nav nav-tabs text-center" role="tablist">
      <li role="presentation" className="tab active">
        <a href="#accounts" aria-controls="accounts" role="tab" data-toggle="tab">Λογαριασμοί</a>
      </li>
      <li role="presentation" className="tab">
        <a href="#cards" aria-controls="cards" role="tab" data-toggle="tab">Κάρτες</a>
      </li>
      <li role="presentation" className="tab">
        <a href="#loans" aria-controls="loans" role="tab" data-toggle="tab">Δάνεια</a>
      </li>
      <li role="presentation" className="tab">
        <a href="#transfers" aria-controls="transfers" role="tab" data-toggle="tab">Μεταφορές</a>
      </li>
      <li role="presentation" className="tab">
        <a href="#payments" aria-controls="payments" role="tab" data-toggle="tab">Πληρωμές</a>
      </li>
    </ul>
  </div>
)

export default Tabs
