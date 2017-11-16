import React, { Component, PropTypes }  from 'react'
import _ from 'underscore';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import SearchPaymentMethod from 'routes/root/routes/Banking/routes/components/SearchPaymentMethod';
import PaymentCodeSelection from 'routes/root/routes/Banking/routes/components/PaymentCodeSelection';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import SelectPaymentOrderEndDate from '../SelectPaymentOrderEndDate';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import localizationText from './localizationText';
import './NewPaymentOrderFormLayout.css';

class NewPaymentOrderFormLayout extends Component {
  clearForm() {
    $('.selectpicker.transactionDebitAccount').selectpicker('val', [''])
    $('.selectpicker.searchPayment').selectpicker('val', [''])
    $('.selectpicker.paymentCreditCard').selectpicker('val', [''])
    $('.selectpicker.paymentLoan').selectpicker('val', [''])
    this.props.initNewPaymentOrderForm();
  }

  render() {
    const {
      newOrderForm,
      accounts,
      loans,
      creditCards,
      prepaidCards,
      language,
      setOrderDebitAccount,
      setPaymentOrderPaymentMethod,
      setPaymentOrderPaymentCode,
      setPaymentOrderMaxAmount,
      setPaymentOrderEndDate,
    } = this.props;
    return (
      <div className="newOrderForm">
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
        <SearchPaymentMethod
          availablePaymentMethods={newOrderForm.availablePaymentMethods}
          activeMethod={newOrderForm.paymentSelections.paymentMethod}
          language={language}
          setActivePaymentMethod={setPaymentOrderPaymentMethod}
        />
        {
          !_.isEmpty(newOrderForm) && newOrderForm.paymentSelections.paymentMethod ? [
            <PaymentCodeSelection
              creditCards={creditCards}
              loans={loans}
              paymentType={_.isEmpty(newOrderForm.paymentSelections) ? {} : newOrderForm.paymentSelections.paymentType}
              paymentCode={newOrderForm.paymentCode}
              language={language}
              setPaymentCode={setPaymentOrderPaymentCode}
            />,
            <AmountInput
              title={localizationText[language].maxPaymentAmount}
              amount={newOrderForm.maxAmount}
              setTransactionAmount={setPaymentOrderMaxAmount}
            />,
            <SelectPaymentOrderEndDate
              key='date'
              language={language}
              endDate={!_.isEmpty(newOrderForm) ? newOrderForm.endDate : {}}
              setPaymentOrderEndDate={setPaymentOrderEndDate}
            />,
            <FormCompletionButtons
              key='completion'
              shouldProcess={!!newOrderForm.shouldProcess}
              language={language}
              clearForm={this.clearForm.bind(this)}
              linkToApprovalForm='/banking/orders/payment/new/approval'
            />
          ] : null
        }
      </div>
    )
  }
}

export default NewPaymentOrderFormLayout
