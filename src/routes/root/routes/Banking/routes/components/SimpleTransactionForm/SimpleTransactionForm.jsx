import React, { Component, PropTypes } from 'react';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import SelectTransactionDate from 'routes/root/routes/Banking/routes/components/SelectTransactionDate';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import localizationText from './localizationText';

class SimpleTransactionForm extends Component {
  componentDidMount() {
    const { transactionForm } = this.props;
    $('.selectpicker').selectpicker()
  }

  clearForm() {
    const { initTransactionForm } = this.props;
    $('.selectpicker').selectpicker('val', [''])
    initTransactionForm();
  }

  render() {
    const {
      label,
      debitAccount,
      accounts,
      loans,
      creditCards,
      prepaidCards,
      setDebitAccount,
      amount,
      setTransactionAmount,
      date,
      language,
      setAsapTransaction,
      setTransactionDate,
      shouldProcess,
      linkToApprovalForm,
    } = this.props;
    return (
      <form className="simpleTransactionForm">
        <SelectDebitAccount
          label={label}
          debitAccount={debitAccount}
          accounts={accounts}
          loans={loans}
          creditCards={creditCards}
          prepaidCards={prepaidCards}
          language={language}
          setDebitAccount={setDebitAccount}
        />
        <AmountInput
          title={localizationText[language].amount}
          amount={amount}
          setTransactionAmount={setTransactionAmount}
        />
        <SelectTransactionDate
          title={localizationText[language].transactionExecution}
          date={date}
          language={language}
          setAsapTransaction={setAsapTransaction}
          setTransactionDate={setTransactionDate}
        />
        <FormCompletionButtons
          shouldProcess={shouldProcess}
          language={language}
          clearForm={this.clearForm.bind(this)}
          linkToApprovalForm={linkToApprovalForm}
        />
      </form>
    )
  }
}

export default SimpleTransactionForm
