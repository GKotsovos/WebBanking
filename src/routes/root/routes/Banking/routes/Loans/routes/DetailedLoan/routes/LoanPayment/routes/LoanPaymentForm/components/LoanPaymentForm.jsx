import React from 'react';
import SimpleTransactionForm from 'routes/root/routes/Banking/routes/components/SimpleTransactionForm';

export const LoanPaymentForm = ({
  accounts,
  loans,
  creditCards,
  prepaidCards,
  transactionForm,
  setDebitAccount,
  setLoanPaymentAmount,
  setAsapLoanTransaction,
  setTransactionDate,
  initLoanTransactionForm
}) => (
  <SimpleTransactionForm
    label='Λογαριασμός Χρέωσης'
    debitAccount={transactionForm.debitAccount}
    accounts={accounts}
    loans={loans}
    creditCards={creditCards}
    prepaidCards={prepaidCards}
    setDebitAccount={setDebitAccount}
    amount={transactionForm.amount}
    setTransactionAmount={setLoanPaymentAmount}
    date={transactionForm.date}
    setAsapTransaction={setAsapLoanTransaction}
    setTransactionDate={setTransactionDate}
    shouldProcess={transactionForm.shouldProcess}
    initTransactionForm={initLoanTransactionForm}
    linkToApprovalForm='/banking/loans/loan/payment/approval'
  />
)

export default LoanPaymentForm
