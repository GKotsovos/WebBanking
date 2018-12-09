import React from 'react'
import { browserHistory } from 'react-router'
import FontAwesome from 'react-fontawesome'
import localizationText from '../localizationText';

export const DefaultTabs = ({
  activeRoute,
  language,
  linkTo,
  getAccounts,
  deactivateAccount,
  getCards,
  deactivateCard,
  getLoans,
  deactivateLoan,
  initTransferTransactionForm,
  initPaymentTransactionForm,
  initializeOrderState,
  getTransferOrders,
  getPaymentOrders,
}) => (
  <div>
    <ul id="tabs" className="nav nav-tabs text-center" role="tablist">
      <li className={`defaultTab ${window.location.href.endsWith("/banking") ? 'active' : ''}`}
        onClick={() => {
          getAccounts();
          deactivateAccount();
          linkTo('/banking');
      }}>
        <a href="#accounts" className="mainTab" data-toggle="tab">
          <FontAwesome name="money"/><br/>{localizationText[language].accountsTabText}
        </a>
      </li>
      <li className={`defaultTab ${window.location.href.includes('/banking/cards') ? 'active' : ''}`}
        onClick={() => {
          getCards();
          deactivateCard();
          linkTo('/banking/cards/debitcards');
        }}>
        <a href="#cards" className="mainTab" data-toggle="tab">
          <FontAwesome name="credit-card"/><br/>{localizationText[language].cardsTabText}
        </a>
      </li>
      <li className={`defaultTab ${window.location.href.includes('/banking/loans') ? 'active' : ''}`}
        onClick={() => {
          getLoans();
          deactivateLoan();
          linkTo('/banking/loans');
        }}>
        <a href="#loans" className="mainTab" data-toggle="tab">
          <FontAwesome name="handshake-o"/><br/>{localizationText[language].loansTabText}
        </a>
      </li>
      <li className={`defaultTab ${window.location.href.includes('/banking/transfers') ? 'active' : ''}`}
        onClick={() => {
          initTransferTransactionForm();
          $('.selectpicker').selectpicker('val', [''])
          linkTo('/banking/transfers');
        }}>
        <a href="#transfers" className="mainTab" data-toggle="tab">
          <FontAwesome name="exchange"/><br/>{localizationText[language].transfersTabText}
        </a>
      </li>
      <li className={`defaultTab ${window.location.href.includes('/banking/payments') ? 'active' : ''}`}
        onClick={() => {
          initPaymentTransactionForm();
          $('.selectpicker').selectpicker('val', [''])
          linkTo('/banking/payments');
        }}>
        <a href="#payments" className="mainTab" data-toggle="tab">
          <FontAwesome name="briefcase"/><br/>{localizationText[language].paymentsTabText}
        </a>
      </li>
      <li className={`defaultTab ${window.location.href.includes('/banking/orders') ? 'active' : ''}`}
        onClick={() => {
          initializeOrderState();
          getTransferOrders();
          getPaymentOrders();
          $('.selectpicker').selectpicker('val', [''])
          linkTo('/banking/orders');
        }}>
        <a href="#orders" className="mainTab" data-toggle="tab">
          <FontAwesome name="calendar-check-o"/><br/>{localizationText[language].ordersTabText}
        </a>
      </li>
    </ul>
  </div>
)

export default DefaultTabs
