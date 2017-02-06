import React from 'react'
import FontAwesome from 'react-fontawesome'
import './Tabs.css'

export const Tabs = () => (
  <div className="verticalCenter">
    <ul id="tabs" className="nav nav-tabs text-center" role="tablist">
      <li role="presentation" className="tab active">
        <a href="#accounts" className="mainTab" aria-controls="accounts" role="tab" data-toggle="tab">
          <FontAwesome name="money"/><br/>Λογαριασμοί</a>
      </li>
      <li role="presentation" className="tab">
        <a href="#cards" className="mainTab" aria-controls="cards" role="tab" data-toggle="tab">
          <FontAwesome name="credit-card"/><br/>Κάρτες</a>
      </li>
      <li role="presentation" className="tab">
        <a href="#loans" className="mainTab" aria-controls="loans" role="tab" data-toggle="tab">
          <FontAwesome name="handshake-o"/><br/>Δάνεια</a>
      </li>
      <li role="presentation" className="tab">
        <a href="#transfers" className="mainTab" aria-controls="transfers" role="tab" data-toggle="tab">
          <FontAwesome name="exchange"/>Μεταφορές</a>
      </li>
      <li role="presentation" className="tab">
        <a href="#payments" className="mainTab" aria-controls="payments" role="tab" data-toggle="tab">
          <FontAwesome name="briefcase"/>Πληρωμές</a>
      </li>
      <li role="presentation" className="tab">
        <a href="#orders" className="mainTab" aria-controls="orders" role="tab" data-toggle="tab">
          <FontAwesome name="calendar-check-o"/><br/>Πάγιες</a>
      </li>
    </ul>
  </div>
)

export default Tabs
