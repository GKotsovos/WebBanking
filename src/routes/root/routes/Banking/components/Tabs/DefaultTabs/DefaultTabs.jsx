import React from 'react'
import { browserHistory } from 'react-router'
import FontAwesome from 'react-fontawesome'
import './DefaultTabs.css'

export const DefaultTabs = ({
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
}) => (
  <div>
    <ul id="tabs" className="nav nav-tabs text-center" role="tablist">
      <li className={`defaultTab ${window.location.href.endsWith("/banking") ? 'active' : ''}`}
        onClick={() => {
          getAccounts();
          deactiveAccount();
          linkTo('/banking');
      }}>
        <a href="#accounts" className="mainTab" data-toggle="tab">
          <FontAwesome name="money"/><br/>Λογαριασμοί
        </a>
      </li>
      <li className={`defaultTab ${window.location.href.includes('/banking/cards') ? 'active' : ''}`}
        onClick={() => {
          getCards();
          deactivateCard();
          linkTo('/banking/cards/debitcards');
        }}>
        <a href="#cards" className="mainTab" data-toggle="tab">
          <FontAwesome name="credit-card"/><br/>Κάρτες
        </a>
      </li>
      <li className={`defaultTab ${window.location.href.includes('/banking/loans') ? 'active' : ''}`}
        onClick={() => {
          getLoans();
          deactivateLoan();
          linkTo('/banking/loans');
        }}>
        <a href="#loans" className="mainTab" data-toggle="tab">
          <FontAwesome name="handshake-o"/><br/>Δάνεια
        </a>
      </li>
      <li className={`defaultTab ${window.location.href.includes('/banking/transfers') ? 'active' : ''}`}
        onClick={() => {
          initTransferTransactionForm();
          setTimeout(() => $('.selectpicker').selectpicker('val', ['']), 350);
          linkTo('/banking/transfers');
        }}>
        <a href="#transfers" className="mainTab" data-toggle="tab">
          <FontAwesome name="exchange"/><br/>Μεταφορές
        </a>
      </li>
      <li className={`defaultTab ${window.location.href.includes('/banking/payments') ? 'active' : ''}`}
        onClick={() => {
          initPaymentTransactionForm();
          setTimeout(() => $('.selectpicker').selectpicker('val', ['']), 350);
          linkTo('/banking/payments');
        }}>
        <a href="#payments" className="mainTab" data-toggle="tab">
          <FontAwesome name="briefcase"/><br/>Πληρωμές
        </a>
      </li>
      <li className={`defaultTab ${window.location.href.includes('/banking/orders') ? 'active' : ''}`}
        onClick={() => linkTo('/banking/orders')}>
        <a href="#orders" className="mainTab" data-toggle="tab">
          <FontAwesome name="calendar-check-o"/><br/>Πάγιες
        </a>
      </li>
    </ul>
  </div>
)

export default DefaultTabs
