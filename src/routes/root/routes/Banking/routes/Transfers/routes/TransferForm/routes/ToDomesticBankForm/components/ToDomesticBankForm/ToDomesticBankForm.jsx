import React, { Component, PropTypes } from 'react'
import DomesticBankSelection from '../DomesticBankSelection'
import CreditAccountInput from 'routes/root/routes/Banking/routes/components/CreditAccountInput'
import BeneficiaryFullNameInput from 'routes/root/routes/Banking/routes/components/BeneficiaryFullNameInput'
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import ChargesSelection from 'routes/root/routes/Banking/routes/components/ChargesSelection'
import localizationText from './localizationText';

class ToDomesticBankForm extends Component {
  componentWillMount() {
    this.props.initTransferToDomesticTransactionForm();
  }

  render() {
    const {
      bank,
      domesticBanks,
      creditAccount,
      fullName,
      amount,
      chargesBeneficiary,
      language,
      setCreditBank,
      setCreditAccount,
      setCreditFullName,
      setTransferAmount,
      setChargesBeneficiary,
    } = this.props;
    return (
     <div>
       <DomesticBankSelection
         bank={bank}
         domesticBanks={domesticBanks}
         language={language}
         setCreditBank={setCreditBank}
       />
       <CreditAccountInput
         creditAccount={creditAccount}
         language={language}
         setCreditAccount={setCreditAccount}
       />
       <BeneficiaryFullNameInput
         fullName={fullName}
         language={language}
         setCreditFullName={setCreditFullName}
       />
       <AmountInput
         title={localizationText[language].amount}
         amount={amount}
         setTransactionAmount={setTransferAmount}
       />
       <ChargesSelection
         chargesBeneficiary={chargesBeneficiary}
         language={language}
         setChargesBeneficiary={setChargesBeneficiary}
       />
     </div>
    )
  }
}

export default ToDomesticBankForm
