import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
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
import './NewTransferOrderFormLayout.css';

class NewTransferOrderFormLayout extends Component {
  clearForm() {
    $('.selectpicker.transactionDebitAccount').selectpicker('val', [''])
    $('.selectpicker.transferBankSelect').selectpicker('val', [''])
    $('.selectpicker.transferCreditAccountType').selectpicker('val', [''])
    $('.selectpicker.transferSelectCharges').selectpicker('val', [''])
    $('.selectpicker.transferBankSelect').selectpicker('val', [''])
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
      setTransferOrderBeneficiaryBankBic,
      setTransferOrderAmount,
      setTransferOrderChargesBeneficiary,
      setTransferOrderComments,
      setTransferOrderAsapStart,
      setTransferOrderStartDate,
      setPeriodicity,
      setTimesOfExecution,
      setTransferOrderCustomTitle,
    } = this.props;

    $(".selectpicker.transactionDebitAccount").selectpicker('refresh')
    return (
      <form className="newOrderForm">
        <SelectDebitAccount
          label={localizationText[language].debitAccount}
          debitAccount={!_.isEmpty(newOrderForm) ? newOrderForm.debitAccount : {}}
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
          !_.isEmpty(newOrderForm) && newOrderForm.beneficiaryBankType.value ? [
            newOrderForm.beneficiaryBankType.value == 'agileBank' ? [
              <CreditAgileAccountSelection
                accounts={_.filter(accounts, (account) => account.id != newOrderForm.debitAccount.value)}
                creditAccount={newOrderForm.beneficiaryAccount}
                language={language}
                setCreditAccount={setTransferOrderBeneficiaryAccount}
              />,
              newOrderForm.beneficiaryAccount.type == 'other' ? [
                <CreditAccountInput
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
                comments={!_.isEmpty(newOrderForm) ? newOrderForm.comments : {}}
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
