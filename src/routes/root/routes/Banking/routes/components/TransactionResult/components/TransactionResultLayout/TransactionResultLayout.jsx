import React from 'react';
import TransactionSuccess from '../../containers/TransactionSuccessContainer'
import TransactionFailed from '../../containers/TransactionFailedContainer'
import './TransactionResultLayout.css';

export const TransactionResultLayout = ({ result, linkToStart }) => (
  <div className="transactionResult" id="transactionResult">
    {
      result ?
        <TransactionSuccess linkToStart={linkToStart}/> :
        <TransactionFailed linkToStart={linkToStart} />
    }
  </div>
)

export default TransactionResultLayout
