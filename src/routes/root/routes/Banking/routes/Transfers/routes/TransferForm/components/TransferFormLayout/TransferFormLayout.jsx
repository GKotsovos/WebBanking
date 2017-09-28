import React, { Component, PropTypes } from 'react';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import SelectTransactionDate from 'routes/root/routes/Banking/routes/components/SelectTransactionDate';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import SelectBankType from 'routes/root/routes/Banking/routes/components/SelectBankType';
import Comments from 'routes/root/routes/Banking/routes/components/Comments';
import _ from 'underscore';
import './TransferFormLayout.css';

class TransferFormLayout extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker();
    this.props.initTransferTransactionForm();
  }

  clearForm() {
    $('.selectpicker').selectpicker('val', [''])
    this.props.initTransferTransactionForm();
  }

  render() {
    const {
      accounts,
      loans,
      creditCards,
      prepaidCards,
      transactionForm,
      setDebitAccount,
      setCreditBankType,
      setAsapTransfer,
      setTransferComments,
      setTransactionDate,
      children,
    } = this.props;

    $(".selectpicker.transactionDebitAccount").selectpicker('refresh')
    return (
      <form id="transferCompletionForm" className="transfersContainer">
        <SelectDebitAccount
          label='Aπό'
          debitAccount={!_.isEmpty(transactionForm) ? transactionForm.debitAccount : {}}
          accounts={accounts}
          loans={loans}
          creditCards={creditCards}
          prepaidCards={prepaidCards}
          setDebitAccount={setDebitAccount}
        />
        <SelectBankType
          bankType={!_.isEmpty(transactionForm) ? transactionForm.bankType : {}}
          setCreditBankType={setCreditBankType}
        />
        {
          !_.isEmpty(transactionForm) && transactionForm.bankType.value ? [
            children,
            <Comments
              key='comments'
              comments={!_.isEmpty(transactionForm) ? transactionForm.comments : {}}
              setTransferComments={setTransferComments}
            />,
            <SelectTransactionDate
              key='date'
              title='Εκτέλεση Συναλλαγής'
              date={!_.isEmpty(transactionForm) ? transactionForm.date : {}}
              setAsapTransaction={setAsapTransfer}
              setTransactionDate={setTransactionDate}
            />,
            <FormCompletionButtons
              key='completion'
              shouldProcess={!_.isEmpty(transactionForm) ? transactionForm.shouldProcess : false}
              clearForm={this.clearForm.bind(this)}
              linkToApprovalForm='/banking/transfers/approval'
            />,
          ] : null
        }
      </form>
    )
  }
}

export default TransferFormLayout
