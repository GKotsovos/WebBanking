import React, { Component } from 'react';
import _ from 'underscore';
import SelectDebitAccount from 'routes/root/routes/Banking/routes/components/SelectDebitAccount';
import SelectTransactionDate from 'routes/root/routes/Banking/routes/components/SelectTransactionDate';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import SelectBankType from 'routes/root/routes/Banking/routes/components/SelectBankType';
import Comments from 'routes/root/routes/Banking/routes/components/Comments';
import localizationText from './localizationText';

class TransferFormLayout extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker();
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
      language,
      setDebitAccount,
      setCreditBankType,
      setAsapTransfer,
      setTransferComments,
      setTransactionDate,
      children,
    } = this.props;

    $(".selectpicker.select-debit-account__dropdown").selectpicker('refresh')
    return (
      <form className="transfer-form">
        <SelectDebitAccount
          label={localizationText[language].from}
          debitAccount={!_.isEmpty(transactionForm) ? transactionForm.debitAccount : {}}
          accounts={accounts}
          loans={loans}
          creditCards={creditCards}
          prepaidCards={prepaidCards}
          language={language}
          setDebitAccount={setDebitAccount}
        />
        <SelectBankType
          bankType={!_.isEmpty(transactionForm) ? transactionForm.bankType : {}}
          language={language}
          setCreditBankType={setCreditBankType}
        />
        {
          !_.isEmpty(transactionForm) && transactionForm.bankType.value ? [
            children,
            <Comments
              key='comments'
              comments={!_.isEmpty(transactionForm) ? transactionForm.comments : {}}
              language={language}
              setTransferComments={setTransferComments}
            />,
            <SelectTransactionDate
              key='date'
              title={localizationText[language].executionDate}
              date={!_.isEmpty(transactionForm) ? transactionForm.date : {}}
              language={language}
              setAsapTransaction={setAsapTransfer}
              setTransactionDate={setTransactionDate}
            />,
            <FormCompletionButtons
              key='completion'
              shouldProcess={!_.isEmpty(transactionForm) ? transactionForm.shouldProcess : false}
              language={language}
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
