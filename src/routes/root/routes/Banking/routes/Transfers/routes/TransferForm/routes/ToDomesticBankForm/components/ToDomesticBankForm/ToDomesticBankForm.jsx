import React from 'react'
import DomesticBankSelection from '../DomesticBankSelection'
import CreditAccountInput from '../../../../components/CreditAccountInput'
import BeneficiaryInput from '../../../../components/BeneficiaryInput'
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import ChargesSelection from '../../../../components/ChargesSelection'

export const ToDomesticBankForm = ({
  bank,
  domesticBanks,
  creditAccount,
  fullName,
  amount,
  chargesBeneficiary,
  setCreditBank,
  setCreditAccount,
  setCreditFullName,
  setTransferAmount,
  setChargesBeneficiary,
 }) => (
  <div>
    <DomesticBankSelection
      bank={bank}
      domesticBanks={domesticBanks}
      setCreditBank={setCreditBank}
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

export default ToDomesticBankForm
