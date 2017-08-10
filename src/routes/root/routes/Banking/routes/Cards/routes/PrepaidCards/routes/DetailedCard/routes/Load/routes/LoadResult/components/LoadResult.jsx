import React from 'react';
import TransactionResult from 'routes/root/routes/Banking/routes/components/TransactionResult';

export const LoadResult = ({ result, linkToStart, clearTransactionForm }) => (
  <TransactionResult result={result } linkToStart={linkToStart} clearTransactionForm={clearTransactionForm} />
)

export default LoadResult
