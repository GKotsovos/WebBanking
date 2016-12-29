import React from 'react';
import FieldCompletion from '../FieldCompletion'
import Approval from '../Approval'
import TransferResult from '../TransferResult'
import './Transfer.css';

export const Transfer = () => (
  <div role="tabpanel" className="tab-pane active" id="transfer">
    <FieldCompletion />
    {/* <Approval /> */}
    {/* <TransferResult /> */}
  </div>
)

export default Transfer
