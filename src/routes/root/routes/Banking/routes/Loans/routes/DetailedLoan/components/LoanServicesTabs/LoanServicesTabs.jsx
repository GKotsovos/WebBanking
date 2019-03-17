import React from 'react';
import localizationText from './localizationText';

export const LoanServicesTabs = ({ activeRoute, language, initLoanTransactionForm, linkTo }) => (
  <div className="">
    <ul className="nav nav-tabs text-center services-tabs">
      <li
        className={`services-tab ${activeRoute.endsWith('loan') ? 'active' : ''}`}
        onClick={() => linkTo('/banking/loans/loan')}>
        <a href="#loanHistory" aria-controls="history" role="tab" data-toggle="tab">
          {localizationText[language].movements}
        </a>
      </li>
      <li
        className={`services-tab ${activeRoute.includes('loan/payment') ? 'active' : ''}`}
        onClick={() =>{
          initLoanTransactionForm();
          linkTo('/banking/loans/loan/payment');
        }}>
        <a href="#loanPayment" aria-controls="payment" role="tab" data-toggle="tab">
          {localizationText[language].payment}
        </a>
      </li>
    </ul>
  </div>
)

export default LoanServicesTabs
