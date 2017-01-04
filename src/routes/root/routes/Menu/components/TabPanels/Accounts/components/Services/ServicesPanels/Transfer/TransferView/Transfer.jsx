import React from 'react';
import TransferInput from '../TransferInput'
import TransferApproval from '../TransferApproval'
import TransferResult from '../TransferResult'
import './Transfer.css';

export const Transfer = () => (
  <div role="tabpanel" className="tab-pane" id="transfer">
    <TransferInput />
    {/* <TransferApproval /> */}
    {/* <TransferResult /> */}
  </div>
)

export default Transfer
