import React, { Component } from 'react';
import CreditAgileAccountSelection from 'routes/root/routes/Banking/routes/components/CreditAgileAccountSelection';
import CreditAccountInput from 'routes/root/routes/Banking/routes/components/CreditAccountInput';
import BeneficiaryFullNameInput from 'routes/root/routes/Banking/routes/components/BeneficiaryFullNameInput';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import localizationText from './localizationText';

class ToAgileBankForm extends Component {
  componentWillMount() {
    $('.selectpicker.credit-agile-account-selection__dropdown').selectpicker('val', '');
  }

  render() {
    const {
      accounts,
      creditAccount,
      fullName,
      amount,
      language,
      setCreditAccount,
      setCreditFullName,
      setTransferAmount,
    } = this.props;
    return (
     <div>
       <CreditAgileAccountSelection
         accounts={accounts}
         creditAccount={creditAccount}
         language={language}
         setCreditAccount={setCreditAccount}
       />
       {
         creditAccount.type == 'other' ? [
           <CreditAccountInput
             showTitle={false}
             creditAccount={creditAccount}
             language={language}
             setCreditAccount={setCreditAccount}
           />,
           <BeneficiaryFullNameInput
             fullName={fullName}
             language={language}
             setCreditFullName={setCreditFullName}
           />
         ] : null
       }
       <AmountInput
         title={localizationText[language].amount}
         amount={amount}
         language={language}
         setTransactionAmount={setTransferAmount}
       />
     </div>

    )
  }
}

export default ToAgileBankForm
