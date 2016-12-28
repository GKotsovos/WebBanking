import React from 'react';
import FieldCompletion from '../FieldCompletion'
import Approval from '../Approval'
import './Transfer.css';

export const Transfer = () => (
  <div role="tabpanel" className="tab-pane active" id="transfer">
    <FieldCompletion />
    {/* <Approval /> */}
  </div>
)

export default Transfer
