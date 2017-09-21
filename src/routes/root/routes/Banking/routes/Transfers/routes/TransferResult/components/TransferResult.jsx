import React from 'react';
import TransactionResult from 'routes/root/routes/Banking/routes/components/TransactionResult';

export const TransferResult = ({ result, errorMessage, linkToStart, clearTransferTransactionForm }) => (
  <TransactionResult
    result={result}
    linkToStart={linkToStart}
    errorMessage={errorMessage}
    clearTransactionForm={clearTransferTransactionForm}
  />
)

export default TransferResult
