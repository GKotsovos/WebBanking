import React from 'react';
import TransactionResult from 'routes/root/routes/Banking/routes/components/TransactionResult';

export const LoanPaymentResult = ({ result, linkToStart }) => (
  <TransactionResult result={result} linkToStart={linkToStart}/>
)

export default LoanPaymentResult
