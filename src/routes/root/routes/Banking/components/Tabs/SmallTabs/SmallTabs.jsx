import React from 'react'
import FontAwesome from 'react-fontawesome'
import { browserHistory } from 'react-router'
import './SmallTabs.css'

export const SmallTabs = ({
  activeRoute,
  linkTo,
  getAccounts,
  deactiveAccount,
  getCards,
  deactivateCard,
  getLoans,
  deactivateLoan,
  initTransferTransactionForm,
  initPaymentTransactionForm,
  initializeOrderState,
}) => (
  <div id="smallT">

    <button id="humButton" className="btn" data-toggle="collapse" data-target="#smallTabs">
      <FontAwesome name="bars" className="bars"/>
    </button>

    <div id="smallTabs" className="collapse width">
      <ul id="tabs" className="nav nav-tabs text-center" role="tablist">
        <li className={`defaultTab ${window.location.href == "/banking" ? 'active' : ''}`}
          onClick={() => {
            getAccounts();
            deactiveAccount();
            linkTo('/banking');
        }}>
          <a href="#accounts" className="mainTab" aria-controls="accounts" role="tab" data-toggle="tab">
            <FontAwesome name="money"/><br/>Λογαριασμοί</a>
        </li>
        <li className={`defaultTab ${window.location.href.includes('/banking/cards') ? 'active' : ''}`}
          onClick={() => {
            getCards();
            deactivateCard();
            linkTo('/banking/cards/debitcards');
          }}>
          <a href="#cards" className="mainTab" aria-controls="cards" role="tab" data-toggle="tab">
            <FontAwesome name="credit-card"/><br/>Κάρτες</a>
        </li>
        <li className={`defaultTab ${window.location.href.includes('/banking/loans') ? 'active' : ''}`}
          onClick={() => {
            getLoans();
            deactivateLoan();
            linkTo('/banking/loans');
          }}>
          <a href="#loans" className="mainTab" aria-controls="loans" role="tab" data-toggle="tab">
            <FontAwesome name="handshake-o"/><br/>Δάνεια</a>
        </li>
        <li className={`defaultTab ${window.location.href.includes('/banking/transfers') ? 'active' : ''}`}
          onClick={() => {
            initTransferTransactionForm();
            $('.selectpicker').selectpicker('val', [''])
            linkTo('/banking/transfers');
          }}>
          <a href="#transfers" className="mainTab" aria-controls="transfers" role="tab" data-toggle="tab">
            <FontAwesome name="exchange"/><br/>Μεταφορές</a>
        </li>
        <li className={`defaultTab ${window.location.href.includes('/banking/payments') ? 'active' : ''}`}
          onClick={() => {
            initPaymentTransactionForm();
            $('.selectpicker').selectpicker('val', [''])
            linkTo('/banking/payments');
          }}>
          <a href="#payments" className="mainTab" aria-controls="payments" role="tab" data-toggle="tab">
            <FontAwesome name="briefcase"/><br/>Πληρωμές</a>
        </li>
        <li className={`defaultTab ${window.location.href.includes('/banking/orders') ? 'active' : ''}`}
          onClick={() => {
            initializeOrderState();
            $('.selectpicker').selectpicker('val', [''])
            linkTo('/banking/orders');
          }}>
          <a href="#orders" className="mainTab" aria-controls="orders" role="tab" data-toggle="tab">
            <FontAwesome name="calendar-check-o"/><br/>Πάγιες</a>
        </li>
      </ul>
    </div>

  </div>
)

export default SmallTabs
