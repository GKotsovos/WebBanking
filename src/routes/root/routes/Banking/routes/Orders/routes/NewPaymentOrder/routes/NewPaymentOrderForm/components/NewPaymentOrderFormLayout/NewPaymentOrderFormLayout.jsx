import React, { Component, PropTypes }  from 'react'
import { isEmpty } from 'underscore';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import SearchPaymentMethod from 'routes/root/routes/Banking/routes/components/SearchPaymentMethod';
import PaymentCodeSelection from 'routes/root/routes/Banking/routes/components/PaymentCodeSelection';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import SelectPaymentOrderEndDate from '../SelectPaymentOrderEndDate';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import localizationText from './localizationText';

class NewPaymentOrderFormLayout extends Component {
  clearForm() {
    $('.selectpicker.select-debit-account__dropdown').selectpicker('val', [''])
    $('.selectpicker.search-payment-method__dropdown').selectpicker('val', [''])
    $('.selectpicker.customer-credit-cards__dropdown').selectpicker('val', [''])
    $('.selectpicker.loan-selection__dropdown').selectpicker('val', [''])
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
      <div className="new-order-form">
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
        <SearchPaymentMethod
          availablePaymentMethods={newOrderForm.availablePaymentMethods}
          activeMethod={newOrderForm.paymentSelections.paymentMethod}
          language={language}
          setActivePaymentMethod={setPaymentOrderPaymentMethod}
        />
        {
          !isEmpty(newOrderForm) && newOrderForm.paymentSelections.paymentMethod ? [
            <PaymentCodeSelection
              creditCards={creditCards}
              loans={loans}
              paymentType={isEmpty(newOrderForm.paymentSelections) ? {} : newOrderForm.paymentSelections.paymentType}
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
              endDate={!isEmpty(newOrderForm) ? newOrderForm.endDate : {}}
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
