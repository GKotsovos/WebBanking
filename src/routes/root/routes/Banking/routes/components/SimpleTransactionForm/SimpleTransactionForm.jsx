import React, { Component, PropTypes } from 'react';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import AmountInput from 'routes/root/routes/Banking/routes/components/AmountInput';
import SelectTransactionDate from 'routes/root/routes/Banking/routes/components/SelectTransactionDate';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import './SimpleTransactionForm.css';

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
          setDebitAccount={setDebitAccount}
        />
        <AmountInput
          amount={amount}
          setTransactionAmount={setTransactionAmount}
        />
        <SelectTransactionDate
          date={date}
          setAsapTransaction={setAsapTransaction}
          setTransactionDate={setTransactionDate}
        />
        <FormCompletionButtons
          shouldProcess={shouldProcess}
          clearForm={this.clearForm.bind(this)}
          linkToApprovalForm={linkToApprovalForm}
        />
      </form>
    )
  }
}

export default SimpleTransactionForm
