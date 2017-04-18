import React from 'react';
import Success from '../Success'
import Failure from '../Failure'
import './TransactionResult.css';

export const TransactionResult = () => (
  <div className="transactionResult" id="transactionResult">
    <Success />
    {/* <Failure /> */}
  </div>
)

export default TransactionResult
