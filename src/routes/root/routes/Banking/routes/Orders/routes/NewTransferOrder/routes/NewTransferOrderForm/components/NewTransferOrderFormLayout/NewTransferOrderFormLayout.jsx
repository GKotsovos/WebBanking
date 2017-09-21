import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import SelectBankType from 'routes/root/routes/Banking/routes/components/SelectBankType';
import SelectCustomerAccounts from '../SelectCustomerAccounts';
import CreditAccountInput from 'routes/root/routes/Banking/routes/components/CreditAccountInput';
import BeneficiaryFullNameInput from 'routes/root/routes/Banking/routes/components/BeneficiaryFullNameInput';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import ChargesSelection from 'routes/root/routes/Banking/routes/components/ChargesSelection';
import Comments from 'routes/root/routes/Banking/routes/components/Comments';
import SelectTransactionDate from 'routes/root/routes/Banking/routes/components/SelectTransactionDate';
import SelectPeriodicityAndTimesOfExecution from '../SelectPeriodicityAndTimesOfExecution';
import CustomTitleInput from '../CustomTitleInput';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import './NewTransferOrderFormLayout.css';

class NewTransferOrderFormLayout extends Component {
  clearForm() {
    $('.selectpicker').selectpicker('val', [''])
    this.props.initNewTransferOrderForm();
  }

  render() {
    const {
      accounts,
      loans,
      creditCards,
      prepaidCards,
      newOrderForm,
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
          label='Λογαριασμός Χρέωσης'
          debitAccount={!_.isEmpty(newOrderForm) ? newOrderForm.debitAccount : {}}
          accounts={accounts}
          loans={loans}
          creditCards={creditCards}
          prepaidCards={prepaidCards}
          setDebitAccount={setOrderDebitAccount}
        />
        <SelectBankType
          bankType={newOrderForm.beneficiaryBankType}
          setCreditBankType={setTransferOrderBeneficiaryBankType}
        />
        {
          !_.isEmpty(newOrderForm) && newOrderForm.beneficiaryBankType.value ? [
            newOrderForm.beneficiaryBankType.value == 'agileBank' ? (
              <SelectCustomerAccounts
                accounts={_.filter(accounts, (account) => account.id != newOrderForm.debitAccount.value)}
                creditAccount={newOrderForm.beneficiaryAccount}
                setCreditAccount={setTransferOrderBeneficiaryAccount}
              />
            ) : [
              <CreditAccountInput
                creditAccount={newOrderForm.beneficiaryAccount}
                setCreditAccount={setTransferOrderBeneficiaryAccount}
              />,
              <BeneficiaryFullNameInput
                fullName={newOrderForm.beneficiaryFullName}
                setCreditFullName={setTransferOrderBeneficiaryName}
              />,
            ],
              <AmountInput
                title='Ποσό'
                amount={newOrderForm.amount}
                setTransactionAmount={setTransferOrderAmount}
              />,
              newOrderForm.beneficiaryBankType.value != 'agileBank' ? (
                <ChargesSelection
                  chargesBeneficiary={newOrderForm.chargesBeneficiary}
                  setChargesBeneficiary={setTransferOrderChargesBeneficiary}
                />
              ) : null,
              <Comments
                comments={!_.isEmpty(newOrderForm) ? newOrderForm.comments : {}}
                setTransferComments={setTransferOrderComments}
              />,
              <SelectTransactionDate
                title='Έναρξη Εκτέλεσης'
                date={newOrderForm.startDate}
                setAsapTransaction={setTransferOrderAsapStart}
                setTransactionDate={setTransferOrderStartDate}
              />,
              <SelectPeriodicityAndTimesOfExecution
                periodicity={newOrderForm.periodicity}
                setPeriodicity={setPeriodicity}
                timesOfExecution={newOrderForm.timesOfExecution}
                setTimesOfExecution={setTimesOfExecution}
              />,
              <CustomTitleInput
                customTitle={newOrderForm.customTitle}
                setTransferOrderCustomTitle={setTransferOrderCustomTitle}
              />,
              <FormCompletionButtons
                shouldProcess={newOrderForm.shouldProcess}
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
