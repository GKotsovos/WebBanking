import React from 'react';
import Payment from '../Payment';
import './PaymentsView.css';

export const PaymentsView = () => (
  <div role="tabpanel" className="tab-pane active" id="payments">
    <Payment />
  </div>
)

export default PaymentsView
