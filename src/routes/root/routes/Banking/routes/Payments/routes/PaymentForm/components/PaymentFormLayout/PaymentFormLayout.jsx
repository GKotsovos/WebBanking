import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
// import SelectPaymentMethod from '../SelectPaymentMethod';
import PaymentCodeInput from '../PaymentCodeInput';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import SelectTransactionDate from 'routes/root/routes/Banking/routes/components/SelectTransactionDate';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import './PaymentFormLayout.css';

class PaymentFormLayout extends Component {
  componentDidMount() {
    const { initPaymentTransactionForm } = this.props;
    $('.selectpicker').selectpicker();
    initPaymentTransactionForm();
  }

  clearForm() {
    const { initPaymentTransactionForm } = this.props;
    $('.selectpicker').selectpicker('val', [''])
    initPaymentTransactionForm();
  }

  render() {
    const {
      accounts,
      loans,
      creditCards,
      prepaidCards,
      transactionForm,
      setDebitAccount,
      setPaymentMethod,
      setPaymentCode,
      setPaymentAmount,
      setAsapPayment,
      setTransactionDate,
      children,
    } = this.props;
    return (
      <form className="paymentContainer">
        <SelectDebitAccount
          label='Λογαριασμός Χρέωσης'
          debitAccount={!_.isEmpty(transactionForm) ? transactionForm.debitAccount : {}}
          accounts={accounts}
          loans={loans}
          creditCards={creditCards}
          prepaidCards={prepaidCards}
          setDebitAccount={setDebitAccount}
        />
        {/*
          <SelectPaymentMethod
            paymentMethods={transactionForm.paymentMethods}
            setPaymentMethod={setPaymentMethod}
          />

        <PaymentCodeInput
          paymentCode={transactionForm.paymentCode}
          setPaymentCode={setPaymentCode}
        />
        */}
        <AmountInput
          amount={transactionForm.amount}
          setTransactionAmount={setPaymentAmount}
        />
        <SelectTransactionDate
          key='date'
          date={!_.isEmpty(transactionForm) ? transactionForm.date : {}}
          setAsapTransaction={setAsapPayment}
          setTransactionDate={setTransactionDate}
        />
        <FormCompletionButtons
          key='completion'
          shouldProcess={!!transactionForm.shouldProcess}
          clearForm={this.clearForm.bind(this)}
          linkToApprovalForm='/banking/payments/approval'
        />
      </form>
    )
  }
}

export default PaymentFormLayout
