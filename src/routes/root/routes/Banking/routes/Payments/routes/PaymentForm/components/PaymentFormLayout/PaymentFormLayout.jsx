import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import SelectPayment from '../SelectPayment';
import PaymentCodeSelection from '../PaymentCodeSelection';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import SelectTransactionDate from 'routes/root/routes/Banking/routes/components/SelectTransactionDate';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import './PaymentFormLayout.css';

class PaymentFormLayout extends Component {
  componentDidMount() {
    const { initPaymentTransactionForm } = this.props;
    $('.selectpicker').selectpicker();
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
      setSearchPayment,
      setActivePaymentCategory,
      setActivePaymentSubCategory,
      setActivePaymentMethod,
      setPaymentCode,
      setPaymentAmount,
      setAsapTransaction,
      setTransactionDate,
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
        <SelectPayment
          setSearchPayment={setSearchPayment}
          shouldSearch={transactionForm.shouldSearch}
          availableCategories={transactionForm.availableCategories}
          activeCategory={_.isEmpty(transactionForm.paymentSelections) ? {} : transactionForm.paymentSelections.category}
          setActivePaymentCategory={setActivePaymentCategory}
          availableSubCategories={transactionForm.availableSubCategories}
          paymentSubCategories={transactionForm.subCategories}
          activeSubCategory={_.isEmpty(transactionForm.paymentSelections) ? {} : transactionForm.paymentSelections.subCategory}
          setActivePaymentSubCategory={setActivePaymentSubCategory}
          availablePaymentMethods={transactionForm.availablePaymentMethods}
          activeMethod={_.isEmpty(transactionForm.paymentSelections) ? {} : transactionForm.paymentSelections.paymentMethod}
          setActivePaymentMethod={setActivePaymentMethod}
        />
        {
          !_.isEmpty(transactionForm) && transactionForm.paymentSelections.paymentMethod ? [
            <PaymentCodeSelection
              creditCards={creditCards}
              loans={loans}
              paymentType={_.isEmpty(transactionForm.paymentSelections) ? {} : transactionForm.paymentSelections.paymentType}
              paymentCode={transactionForm.paymentCode}
              setPaymentCode={setPaymentCode}
            />,
            <AmountInput
              amount={transactionForm.amount}
              setTransactionAmount={setPaymentAmount}
            />,
            <SelectTransactionDate
              key='date'
              date={!_.isEmpty(transactionForm) ? transactionForm.date : {}}
              setAsapTransaction={setAsapTransaction}
              setTransactionDate={setTransactionDate}
            />,
            <FormCompletionButtons
              key='completion'
              shouldProcess={!!transactionForm.shouldProcess}
              clearForm={this.clearForm.bind(this)}
              linkToApprovalForm='/banking/payments/approval'
            />
          ] : null
        }
      </form>
    )
  }
}

export default PaymentFormLayout
