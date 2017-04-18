import React from 'react'
import FontAwesome from 'react-fontawesome'
import './SmallTabs.css'

export const SmallTabs = () => (
  <div id="smallT">

    <button id="humButton" className="btn" data-toggle="collapse" data-target="#smallTabs">
      <FontAwesome name="bars" className="bars"/>
    </button>

    <div id="smallTabs" className="collapse width">
      <ul id="tabs" className="nav nav-tabs text-center" role="tablist">
        <li role="presentation" className="defaultTab active" data-toggle="collapse" data-target="#smallTabs" onClick={() => setInitAccountsTabState()}>
          <a href="#accounts" className="mainTab" aria-controls="accounts" role="tab" data-toggle="tab">
            <FontAwesome name="money"/><br/>Λογαριασμοί</a>
        </li>
        <li role="presentation" className="defaultTab" data-toggle="collapse" data-target="#smallTabs"
        onClick={() => setInitCardsTabState()}>
          <a href="#cards" className="mainTab" aria-controls="cards" role="tab" data-toggle="tab">
            <FontAwesome name="credit-card"/><br/>Κάρτες</a>
        </li>
        <li role="presentation" className="defaultTab" data-toggle="collapse" data-target="#smallTabs"
        onClick={() => setInitLoansTabState()}>
          <a href="#loans" className="mainTab" aria-controls="loans" role="tab" data-toggle="tab">
            <FontAwesome name="handshake-o"/><br/>Δάνεια</a>
        </li>
        <li role="presentation" className="defaultTab" data-toggle="collapse" data-target="#smallTabs"
        onClick={() => setInitTransfersTabState()}>
          <a href="#transfers" className="mainTab" aria-controls="transfers" role="tab" data-toggle="tab">
            <FontAwesome name="exchange"/><br/>Μεταφορές</a>
        </li>
        <li role="presentation" className="defaultTab" data-toggle="collapse" data-target="#smallTabs"
        onClick={() => setInitPaymentsTabState()}>
          <a href="#payments" className="mainTab" aria-controls="payments" role="tab" data-toggle="tab">
            <FontAwesome name="briefcase"/><br/>Πληρωμές</a>
        </li>
        <li role="presentation" className="defaultTab" data-toggle="collapse" data-target="#smallTabs"
        onClick={() => setInitOrdersTabState()}>
          <a href="#orders" className="mainTab" aria-controls="orders" role="tab" data-toggle="tab">
            <FontAwesome name="calendar-check-o"/><br/>Πάγιες</a>
        </li>
      </ul>
    </div>

  </div>
)

export default SmallTabs
