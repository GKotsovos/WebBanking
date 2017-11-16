import React from 'react';
import TransactionResult from 'routes/root/routes/Banking/routes/components/TransactionResult';

export const TransferResult = ({
  result,
  errorMessage,
  linkToStart,
  language,
  clearTransferTransactionForm
}) => (
  <TransactionResult
    result={result}
    linkToStart={linkToStart}
    errorMessage={errorMessage}
    language={language}
    clearTransactionForm={clearTransferTransactionForm}
  />
)

export default TransferResult
