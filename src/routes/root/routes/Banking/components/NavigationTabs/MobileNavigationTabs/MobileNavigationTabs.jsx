import React from 'react';
import FontAwesome from 'react-fontawesome';
import localizationText from '../localizationText';

export const MobileNavigationTabs = ({
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
  <div className="mobile-navigation-tabs-container">
    <button
      className="mobile-navigation-tabs__burger-button btn"
      data-toggle="collapse"
      data-target="#mobile-navigation-tabs">
      <FontAwesome name="bars" className="mobile-navigation-tabs__burger-button-icon"/>
    </button>

    <div id="mobile-navigation-tabs" className="mobile-navigation-tabs collapse">
      <ul className="navigation-tabs nav nav-tabs text-center" role="tablist">
        <li className={`navigation-tabs__tab ${window.location.href == "/banking" ?  'active' : ''}`}
          onClick={() => {
            getAccounts();
            deactivateAccount();
            linkTo('/banking');
        }}>
          <a href="#accounts" className="navigation-tab__link" aria-controls="accounts" role="tab" data-toggle="tab">
            <FontAwesome name="money"/><br/>{localizationText[language].accountsTabText}</a>
        </li>
        <li className={`navigation-tabs__tab ${window.location.href.includes('/banking/cards') ?  'active' : ''}`}
          onClick={() => {
            getCards();
            deactivateCard();
            linkTo('/banking/cards/debitcards');
          }}>
          <a href="#cards" className="navigation-tab__link" aria-controls="cards" role="tab" data-toggle="tab">
            <FontAwesome name="credit-card"/><br/>{localizationText[language].cardsTabText}</a>
        </li>
        <li className={`navigation-tabs__tab ${window.location.href.includes('/banking/loans') ?  'active' : ''}`}
          onClick={() => {
            getLoans();
            deactivateLoan();
            linkTo('/banking/loans');
          }}>
          <a href="#loans" className="navigation-tab__link" aria-controls="loans" role="tab" data-toggle="tab">
            <FontAwesome name="handshake-o"/><br/>{localizationText[language].loansTabText}</a>
        </li>
        <li className={`navigation-tabs__tab ${window.location.href.includes('/banking/transfers') ?  'active' : ''}`}
          onClick={() => {
            initTransferTransactionForm();
            $('.selectpicker').selectpicker('val', [''])
            linkTo('/banking/transfers');
          }}>
          <a href="#transfers" className="navigation-tab__link" aria-controls="transfers" role="tab" data-toggle="tab">
            <FontAwesome name="exchange"/><br/>{localizationText[language].transfersTabText}</a>
        </li>
        <li className={`navigation-tabs__tab ${window.location.href.includes('/banking/payments') ?  'active' : ''}`}
          onClick={() => {
            initPaymentTransactionForm();
            $('.selectpicker').selectpicker('val', [''])
            linkTo('/banking/payments');
          }}>
          <a href="#payments" className="navigation-tab__link" aria-controls="payments" role="tab" data-toggle="tab">
            <FontAwesome name="briefcase"/><br/>{localizationText[language].paymentsTabText}</a>
        </li>
        <li className={`navigation-tabs__tab ${window.location.href.includes('/banking/orders') ?  'active' : ''}`}
          onClick={() => {
            initializeOrderState();
            getTransferOrders();
            getPaymentOrders();
            $('.selectpicker').selectpicker('val', [''])
            linkTo('/banking/orders');
          }}>
          <a href="#orders" className="navigation-tab__link" aria-controls="orders" role="tab" data-toggle="tab">
            <FontAwesome name="calendar-check-o"/><br/>{localizationText[language].ordersTabText}</a>
        </li>
      </ul>
    </div>

  </div>
)

export default MobileNavigationTabs
