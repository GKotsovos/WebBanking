import React from 'react';
import NewOrderForm from '../NewOrderForm';
import OrderApproval from '../OrderApproval'
import TransactionResult from '../../../../../components/TransactionResult';
import './NewOrderLayout.css';

export const NewOrderLayout = () => (
  <div role="tabpanel" className="tab-pane">
    <NewOrderForm />
    {/* <OrderApproval /> */}
    {/* <TransactionResult /> */}
  </div>
)

export default NewOrderLayout
