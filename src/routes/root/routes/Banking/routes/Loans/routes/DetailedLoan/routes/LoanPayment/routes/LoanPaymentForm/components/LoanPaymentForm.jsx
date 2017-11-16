import React from 'react';
import SimpleTransactionForm from 'routes/root/routes/Banking/routes/components/SimpleTransactionForm';
import localizationText from './localizationText';

export const LoanPaymentForm = ({
  accounts,
  loans,
  creditCards,
  prepaidCards,
  transactionForm,
  language,
  setDebitAccount,
  setLoanPaymentAmount,
  setAsapLoanTransaction,
  setTransactionDate,
  initLoanTransactionForm
}) => (
  <SimpleTransactionForm
    label={localizationText[language].debitAccountLabel}
    debitAccount={transactionForm.debitAccount}
    accounts={accounts}
    loans={loans}
    creditCards={creditCards}
    prepaidCards={prepaidCards}
    setDebitAccount={setDebitAccount}
    amount={transactionForm.amount}
    date={transactionForm.date}
    language={language}
    setTransactionAmount={setLoanPaymentAmount}
    setAsapTransaction={setAsapLoanTransaction}
    setTransactionDate={setTransactionDate}
    shouldProcess={transactionForm.shouldProcess}
    initTransactionForm={initLoanTransactionForm}
    linkToApprovalForm='/banking/loans/loan/payment/approval'
  />
)

export default LoanPaymentForm
