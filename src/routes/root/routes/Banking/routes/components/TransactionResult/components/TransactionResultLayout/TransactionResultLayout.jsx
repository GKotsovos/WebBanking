import React from 'react';
import TransactionSuccess from '../../containers/TransactionSuccessContainer'
import TransactionFailed from '../../containers/TransactionFailedContainer'

export const TransactionResultLayout = ({ result, errorMessage, language, linkToStart, clearTransactionForm }) => (
  <div className="transaction-result">
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
