import React from 'react'
import BicInput from '../BicInput'
import CreditAccountInput from '../../../../components/CreditAccountInput';
import BeneficiaryInput from '../../../../components/BeneficiaryInput';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import ChargesSelection from '../../../../components/ChargesSelection';

export const ToForeignBankForm = ({
  bank,
  creditAccount,
  fullName,
  amount,
  chargesBeneficiary,
  setCreditBankBIC,
  setCreditAccount,
  setCreditFullName,
  setTransferAmount,
  setChargesBeneficiary,
 }) => (
  <div>
    <BicInput
      bank={bank}
      setCreditBankBIC={setCreditBankBIC}
    />
    <CreditAccountInput
      creditAccount={creditAccount}
      setCreditAccount={setCreditAccount}
    />
    <BeneficiaryInput
      fullName={fullName}
      setCreditFullName={setCreditFullName}
    />
    <AmountInput
      amount={amount}
      setTransactionAmount={setTransferAmount}
    />
    <ChargesSelection
      chargesBeneficiary={chargesBeneficiary}
      setChargesBeneficiary={setChargesBeneficiary}
    />
  </div>
)

export default ToForeignBankForm
