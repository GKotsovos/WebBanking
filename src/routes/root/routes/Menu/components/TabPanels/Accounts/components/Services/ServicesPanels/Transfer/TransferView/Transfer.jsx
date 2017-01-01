import React from 'react';
import TransferInput from '../TransferInput'
import Approval from '../Approval'
import TransferResult from '../TransferResult'
import './Transfer.css';

export const Transfer = () => (
  <div role="tabpanel" className="tab-pane" id="transfer">
    <TransferInput />
    {/* <Approval /> */}
    {/* <TransferResult /> */}
  </div>
)

export default Transfer
