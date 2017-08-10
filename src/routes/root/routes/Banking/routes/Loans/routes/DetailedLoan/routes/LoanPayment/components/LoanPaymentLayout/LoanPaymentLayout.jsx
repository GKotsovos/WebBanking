import React from 'react';
import LoanPayment from '../LoanPayment';
import LoanPaymentApproval from '../LoanPaymentApproval'
import TransactionResult from '../../../../../components/TransactionResult'
import './LoanPaymentLayout.css';

export const LoanPaymentLayout = () => (
  <div role="tabpanel" className="loanPaymentContainer tab-pane" id="loanPayment">
    <LoanPayment />
    {/* <LoanPaymentApproval /> */}
    {/* <TransactionResult /> */}
  </div>
)

export default LoanPaymentLayout
