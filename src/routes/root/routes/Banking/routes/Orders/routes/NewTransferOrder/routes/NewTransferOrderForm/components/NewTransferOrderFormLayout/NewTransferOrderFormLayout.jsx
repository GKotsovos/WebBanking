import React, { Component } from 'react'
import { isEmpty } from 'underscore';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import SelectBankType from 'routes/root/routes/Banking/routes/components/SelectBankType';
import CreditAgileAccountSelection from 'routes/root/routes/Banking/routes/components/CreditAgileAccountSelection';
import CreditAccountInput from 'routes/root/routes/Banking/routes/components/CreditAccountInput';
import BeneficiaryFullNameInput from 'routes/root/routes/Banking/routes/components/BeneficiaryFullNameInput';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import ChargesSelection from 'routes/root/routes/Banking/routes/components/ChargesSelection';
import Comments from 'routes/root/routes/Banking/routes/components/Comments';
import SelectTransactionDate from 'routes/root/routes/Banking/routes/components/SelectTransactionDate';
import SelectPeriodicityAndTimesOfExecution from '../SelectPeriodicityAndTimesOfExecution';
import CustomTitleInput from '../CustomTitleInput';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import localizationText from './localizationText';

class NewTransferOrderFormLayout extends Component {
  clearForm() {
    $('.selectpicker.select-debit-account__dropdown').selectpicker('val', [''])
    $('.selectpicker.select-bank-type__dropdown').selectpicker('val', [''])
    $('.selectpicker.credit-agile-account-selection__dropdown').selectpicker('val', [''])
    $('.selectpicker.charges-selection__dropdown').selectpicker('val', [''])
    this.props.initNewTransferOrderForm();
  }

  render() {
    const {
      accounts,
      loans,
      creditCards,
      prepaidCards,
      newOrderForm,
      language,
      setOrderDebitAccount,
      setTransferOrderBeneficiaryName,
      setTransferOrderBeneficiaryAccount,
      setTransferOrderBeneficiaryBankType,
      setTransferOrderAmount,
      setTransferOrderChargesBeneficiary,
      setTransferOrderComments,
      setTransferOrderAsapStart,
      setTransferOrderStartDate,
      setPeriodicity,
      setTimesOfExecution,
      setTransferOrderCustomTitle,
    } = this.props;

    $(".selectpicker.select-debit-account__dropdown").selectpicker('refresh')
    return (
      <form className="new-order-form">
        <SelectDebitAccount
          label={localizationText[language].debitAccount}
          debitAccount={!isEmpty(newOrderForm) ? newOrderForm.debitAccount : {}}
          accounts={accounts}
          loans={loans}
          creditCards={creditCards}
          prepaidCards={prepaidCards}
          language={language}
          setDebitAccount={setOrderDebitAccount}
        />
        <SelectBankType
          bankType={newOrderForm.beneficiaryBankType}
          language={language}
          setCreditBankType={setTransferOrderBeneficiaryBankType}
        />
        {
          !isEmpty(newOrderForm) && newOrderForm.beneficiaryBankType.value ? [
            newOrderForm.beneficiaryBankType.value == 'agileBank' ? [
              <CreditAgileAccountSelection
                accounts={accounts.filter(account => account.id != newOrderForm.debitAccount.value)}
                creditAccount={newOrderForm.beneficiaryAccount}
                language={language}
                setCreditAccount={setTransferOrderBeneficiaryAccount}
              />,
              newOrderForm.beneficiaryAccount.type == 'other' ? [
                <CreditAccountInput
                  showTitle={true}
                  creditAccount={newOrderForm.beneficiaryAccount}
                  language={language}
                  setCreditAccount={setTransferOrderBeneficiaryAccount}
                />,
                <BeneficiaryFullNameInput
                  fullName={newOrderForm.beneficiaryFullName}
                  language={language}
                  setCreditFullName={setTransferOrderBeneficiaryName}
                />
              ] : null
            ] : [
              <CreditAccountInput
                showTitle={true}
                creditAccount={newOrderForm.beneficiaryAccount}
                language={language}
                setCreditAccount={setTransferOrderBeneficiaryAccount}
              />,
              <BeneficiaryFullNameInput
                fullName={newOrderForm.beneficiaryFullName}
                language={language}
                setCreditFullName={setTransferOrderBeneficiaryName}
              />
            ],
              <AmountInput
                title={localizationText[language].amount}
                amount={newOrderForm.amount}
                language={language}
                setTransactionAmount={setTransferOrderAmount}
              />,
              newOrderForm.beneficiaryBankType.value != 'agileBank' ? (
                <ChargesSelection
                  chargesBeneficiary={newOrderForm.chargesBeneficiary}
                  language={language}
                  setChargesBeneficiary={setTransferOrderChargesBeneficiary}
                />
              ) : null,
              <Comments
                comments={!isEmpty(newOrderForm) ? newOrderForm.comments : {}}
                amount={newOrderForm.amount}
                language={language}
                setTransferComments={setTransferOrderComments}
              />,
              <SelectTransactionDate
                title={localizationText[language].startDate}
                date={newOrderForm.startDate}
                amount={newOrderForm.amount}
                language={language}
                setAsapTransaction={setTransferOrderAsapStart}
                setTransactionDate={setTransferOrderStartDate}
              />,
              <SelectPeriodicityAndTimesOfExecution
                periodicity={newOrderForm.periodicity}
                setPeriodicity={setPeriodicity}
                timesOfExecution={newOrderForm.timesOfExecution}
                language={language}
                setTimesOfExecution={setTimesOfExecution}
              />,
              <CustomTitleInput
                customTitle={newOrderForm.customTitle}
                language={language}
                setTransferOrderCustomTitle={setTransferOrderCustomTitle}
              />,
              <FormCompletionButtons
                shouldProcess={newOrderForm.shouldProcess}
                language={language}
                clearForm={this.clearForm.bind(this)}
                linkToApprovalForm='/banking/orders/transfer/new/approval'
              />
          ] : null
        }
      </form>
    )
  }
}

export default NewTransferOrderFormLayout
