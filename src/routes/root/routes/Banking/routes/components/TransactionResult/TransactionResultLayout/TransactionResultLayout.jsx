import React from 'react';
import TransactionSuccess from '../TransactionSuccess'
import TransactionFailed from '../TransactionFailed'
import './TransactionResultLayout.css';

export const TransactionResultLayout = ({ result }) => (
  <div className="transactionResult" id="transactionResult">
    {
      result ? <TransactionSuccess /> : <TransactionFailed />
    }
  </div>
)

export default TransactionResultLayout
