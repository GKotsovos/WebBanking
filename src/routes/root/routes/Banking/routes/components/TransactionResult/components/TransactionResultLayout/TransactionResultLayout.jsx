import React from 'react';
import TransactionSuccess from '../../containers/TransactionSuccessContainer'
import TransactionFailed from '../../containers/TransactionFailedContainer'
import './TransactionResultLayout.css';

export const TransactionResultLayout = ({ result, errorMessage, language, linkToStart, clearTransactionForm }) => (
  <div className="transactionResult" id="transactionResult">
    {
      result ?
        <TransactionSuccess
          linkToStart={linkToStart}
          language={language}
          clearTransactionForm={clearTransactionForm}
         /> :
        <TransactionFailed
          linkToStart={linkToStart} 
          language={language}
          errorMessage={errorMessage}
        />
    }
  </div>
)

export default TransactionResultLayout
