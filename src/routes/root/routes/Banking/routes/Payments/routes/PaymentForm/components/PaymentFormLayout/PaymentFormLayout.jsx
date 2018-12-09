import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import SelectPayment from '../SelectPayment';
import PaymentCodeSelection from 'routes/root/routes/Banking/routes/components/PaymentCodeSelection';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import SelectTransactionDate from 'routes/root/routes/Banking/routes/components/SelectTransactionDate';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import localizationText from './localizationText';

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
      language,
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
          label={localizationText[language].debitAccount}
          debitAccount={!_.isEmpty(transactionForm) ? transactionForm.debitAccount : {}}
          accounts={accounts}
          loans={loans}
          creditCards={creditCards}
          prepaidCards={prepaidCards}
          language={language}
          setDebitAccount={setDebitAccount}
        />
        <SelectPayment
          language={language}
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
              language={language}
              setPaymentCode={setPaymentCode}
            />,
            <AmountInput
              title={localizationText[language].amount}
              amount={transactionForm.amount}
              setTransactionAmount={setPaymentAmount}
            />,
            <SelectTransactionDate
              key='date'
              title={localizationText[language].executionDate}
              date={!_.isEmpty(transactionForm) ? transactionForm.date : {}}
              language={language}
              setAsapTransaction={setAsapTransaction}
              setTransactionDate={setTransactionDate}
            />,
            <FormCompletionButtons
              key='completion'
              shouldProcess={!!transactionForm.shouldProcess}
              language={language}
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
