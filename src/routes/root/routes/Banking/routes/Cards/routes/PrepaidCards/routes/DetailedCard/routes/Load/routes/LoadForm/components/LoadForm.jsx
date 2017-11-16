import React from 'react'
import SimpleTransactionForm from 'routes/root/routes/Banking/routes/components/SimpleTransactionForm';
import localizationText from './localizationText';

export const LoadForm = ({
  accounts,
  creditCards,
  prepaidCards,
  loans,
  transactionForm,
  language,
  setDebitAccount,
  setPrepaidCardLoadAmount,
  setAsapCardTransaction,
  setTransactionDate,
  initCardTransactionForm
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
    setTransactionAmount={setPrepaidCardLoadAmount}
    setAsapTransaction={setAsapCardTransaction}
    setTransactionDate={setTransactionDate}
    shouldProcess={transactionForm.shouldProcess}
    initTransactionForm={initCardTransactionForm}
    linkToApprovalForm='/banking/cards/prepaidcards/card/load/approval'
  />
)

export default LoadForm
