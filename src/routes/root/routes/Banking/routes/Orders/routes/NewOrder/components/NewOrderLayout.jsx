import React, { Component, PropTypes } from 'react'
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import './NewOrderLayout.css';

class NewOrderLayout extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker()
  }

  render() {
    const {
      children,
      accounts,
      loans,
      creditCards,
      prepaidCards,
      setDebitAccount,
    } = this.props;
    return (
      <form id="orderCompletionForm">
        <SelectDebitAccount
          label='Λογαριασμός Χρέωσης'
          debitAccount={!_.isEmpty(transactionForm) ? transactionForm.debitAccount : {}}
          accounts={accounts}
          loans={loans}
          creditCards={creditCards}
          prepaidCards={prepaidCards}
          setDebitAccount={setDebitAccount}
        />
        {children}
      </form>
    )
  }
}

export default NewOrderLayout
