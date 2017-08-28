import React from 'react'
import CreditAgileAccountSelection from '../CreditAgileAccountSelection'
import BeneficiaryInput from '../../../../components/BeneficiaryInput'
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';

export const ToAgileBankForm = ({
  accounts,
  creditAccount,
  fullName,
  amount,
  setCreditAccount,
  setCreditFullName,
  setTransferAmount,
 }) => (
  <div>
    <CreditAgileAccountSelection
      accounts={accounts}
      creditAccount={creditAccount}
      setCreditAccount={setCreditAccount}
    />
    {
      creditAccount.type == 'other' ? 
        <BeneficiaryInput
          fullName={fullName}
          setCreditFullName={setCreditFullName}
        /> : null
    }
    <AmountInput
      amount={amount}
      setTransactionAmount={setTransferAmount}
    />
  </div>
)

export default ToAgileBankForm
