import React from 'react';
import localizationText from './localizationText';
import './LoanServicesTabs.css';

export const LoanServicesTabs = ({ activeRoute, language, initLoanTransactionForm, linkTo }) => (
  <div className="">
    <ul id="loanServicesTabs" className="nav nav-tabs text-center">
      <li
        className={`serviceTab ${activeRoute.endsWith('loan') ? 'active' : ''}`}
        onClick={() => linkTo('/banking/loans/loan')}>
        <a href="#loanHistory" aria-controls="history" role="tab" data-toggle="tab">
          {localizationText[language].movements}
        </a>
      </li>
      <li
        className={`serviceTab ${activeRoute.includes('loan/payment') ? 'active' : ''}`}
        onClick={() =>{
          initLoanTransactionForm();
          linkTo('/banking/loans/loan/payment');
        }}>
        <a id="loanPaymentTab" href="#loanPayment" aria-controls="payment" role="tab" data-toggle="tab">
          {localizationText[language].payment}
        </a>
      </li>
    </ul>
  </div>
)

export default LoanServicesTabs
