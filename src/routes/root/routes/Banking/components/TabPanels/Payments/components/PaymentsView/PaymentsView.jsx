import React from 'react';
import Payment from '../Payment';
import PaymentApproval from '../PaymentApproval'
import PaymentResult from '../PaymentResult'
import './PaymentsView.css';

export const PaymentsView = () => (
  <div role="tabpanel" className="tab-pane" id="payments">
    <Payment />
    {/* <PaymentApproval /> */}
    {/* <PaymentResult /> */}
  </div>
)

export default PaymentsView
