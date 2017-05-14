import React from 'react';
import PaymentForm from '../PaymentForm';
import PaymentApproval from '../PaymentApproval';
import TransactionResult from '../../../components/TransactionResult';
import './PaymentsLayout.css';

export const PaymentsLayout = () => (
  <div role="tabpanel" className="tab-pane" id="payments">
    <PaymentForm />
    {/* <PaymentApproval /> */}
    {/* <TransactionResult /> */}
  </div>
)

export default PaymentsLayout
