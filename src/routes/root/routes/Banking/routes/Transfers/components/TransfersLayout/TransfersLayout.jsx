import React from 'react';
import TransfersForm from '../TransfersForm';
import TransferApproval from '../TransferApproval';
import TransactionResult from '../../../components/TransactionResult';
import './TransfersLayout.css';

export const TransfersLayout = () => (
  <div role="tabpanel" className="tab-pane" id="transfers">
    <TransfersForm />
    {/* <TransferApproval /> */}
    {/* <TransactionResult /> */}
  </div>
)

export default TransfersLayout
