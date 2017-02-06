import React from 'react';
import LoanPayment from '../LoanPayment';
import LoanPaymentApproval from '../LoanPaymentApproval'
import LoanPaymentResult from '../LoanPaymentResult'
import './LoanPaymentView.css';

export const LoanPaymentView = () => (
  <div role="tabpanel" className="loanPaymentContainer tab-pane" id="loanPayment">
    <LoanPayment />
    {/* <LoanPaymentApproval /> */}
    {/* <LoanPaymentResult /> */}
  </div>
)

export default LoanPaymentView
