import React, { Component, PropTypes } from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons'
import './TransferFormLayout.css';

class TransferFormLayout extends Component {
  componentDidMount() {
    const { transactionForm } = this.props;
    $('.selectpicker').selectpicker()
    $('.selectpicker.transferSelectAccount').selectpicker('val', [transactionForm.debitAccount.value])
    $('.selectpicker.transferBankSelect').selectpicker('val', [transactionForm.bank.selection])
  }

  clearForm() {
    const { initTransferTransactionForm } = this.props;
    $('.selectpicker').selectpicker('val', [''])
    initTransferTransactionForm();
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

    $(".selectpicker.transferSelectAccount").selectpicker('refresh')
    return (
      <form id="transferCompletionForm" className="transfersContainer">
        <div className="form-group">
          <label htmlFor="transferSelectAccount">Από</label>
          <div>
          <select
            className={`selectpicker transferSelectAccount form-control ${_.isEmpty(transactionForm.debitAccount) || transactionForm.debitAccount.correct ? "" : "notValid"}`}
            data-show-subtext="true"
            title="Επιλέξτε λογαριασμό"
            onChange={
              (e) => setDebitAccount(e.target.value, e.target.options[e.target.options.selectedIndex].className)
            }
          >
            {
              _.map(accounts, (account) => (
                <option
                  key={account.iban}
                  className="isAccount"
                  data-subtext={
                    `${account.type} ${account.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(account.currency).symbol}`
                  }
                >
                  {account.iban}
                </option>
              ))
            }
            {
              _.map(loans, (loan) => (
                <option
                  key={loan.id}
                  className="isLoan"
                  data-subtext={
                    `${loan.customTitle} ${loan.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(loan.currency).symbol}`
                  }
                >
                  {loan.id}
                </option>
              ))
            }
            {
              _.map(creditCards, (creditCard) => (
                <option
                  key={creditCard.id}
                  className="isCreditCard"
                  data-subtext={
                    `Credit Card ${creditCard.availableLimit.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(creditCard.currency).symbol}`
                  }
                  value={creditCard.id}
                >
                  {_.map(creditCard.id, ((num, key) =>  key % 4 == 0 ? ' ' + num : num ))}
                </option>
              ))
            }
            {
              _.map(prepaidCards, (prepaidCard) => (
                <option
                  key={prepaidCard.id}
                  className="isPrepaidCard"
                  data-subtext={
                    `Prepaid Card ${prepaidCard.availableLimit.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(prepaidCard.currency).symbol}`
                  }
                  value={prepaidCard.id}
                >
                  {_.map(prepaidCard.id, ((num, key) =>  key % 4 == 0 ? ' ' + num : num ))}
                </option>
              ))
            }
          </select>
          </div>
        </div>

        <div id="bankDiv" className="form-group">
          <label htmlFor="transferBankSelect">Τράπεζα</label>
          <div>
            <select
              className={`selectpicker transferBankSelect form-control ${_.isEmpty(transactionForm.bank) || transactionForm.bank.correct ? "" : "notValid"}`}
              data-show-subtext="true"
              title="Επιλέξτε Τύπο Τράπεζας"
              value={transactionForm.bank.type || ""}
              onChange={
                (e) => setCreditBankType(e.target.value, e.target.options[e.target.options.selectedIndex].id)
              }
            >
              <option id="agileBank">Agile Bank</option>
              <option id="domesticBank">Τράπεζα Εσωτερικού</option>
              <option id="foreignBank">Τράπεζα Εξωτερικού</option>
            </select>
          </div>
        </div>
        {children}
        <div
          style={
            !_.isEmpty(transactionForm.bank) && transactionForm.bank.type != '' ? {} : { display: 'none' }
          }>
          <div
            className="form-group">
            <label htmlFor="transferComment">Σχόλια</label>
            <textarea
              id="transferComment"
              className={`form-control ${_.isEmpty(transactionForm.comments) || transactionForm.comments.correct ? "" : "notValid"}`}
              value={transactionForm.comments.value || ""}
              onChange={(e) => setTransferComments(e.target.value)}
              rows="3"
            />
          </div>
          <div className="form-group">
            <label htmlFor="transferDate">Εκτέλεση Συναλλαγής</label>
            <div id="transferDate">
              <span
                id="now"
                className="transferDateRadio">
                <input
                  type="radio"
                  name="transferDate"
                  onChange={() => setAsapTransfer(true)}
                  checked={transactionForm.date.asapTransfer}
                />
                <span
                  id="amesa"
                  onClick={() => setAsapTransfer(true)}>
                  Άμεσα
                </span>
              </span>
              <span
                id="later"
                className="transferDateRadio">
                <input
                  type="radio"
                  name="transferDate"
                  onChange={() => setAsapTransfer(false)}
                  checked={!_.isEmpty(transactionForm.date) && !transactionForm.date.asapTransfer}
                />
                <span
                  id="stis"
                  onClick={() => setAsapTransfer(false)}>
                  Στις
                </span>
                <DatePicker
                  id="transferDatePicker"
                  className={`form-control text-right ${_.isEmpty(transactionForm.date) || transactionForm.date.correct ? "" : "notValid"}`}
                  weekStartsOnMonday
                  calendarPlacement="top"
                  placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"
                  value={transactionForm.date.value}
                  onChange={(value, formattedValue) => setTransactionDate(value, formattedValue)}
                  disabled={_.isEmpty(transactionForm.date) || transactionForm.date.asapTransfer}
                />
              </span>
            </div>
          </div>

          <div className="form-group">
            <label id="saveTransfer">
              <input id="saveTransferCheckBox" type="checkbox" />
              <span>Αποθήκευση ως πρότυπο</span>
            </label>
          </div>

          <FormCompletionButtons
            shouldProcess={transactionForm.shouldProcess}
            clearForm={this.clearForm.bind(this)}
            linkToApprovalForm='/banking/transfers/approval'
          />
        </div>
      </form>
    )
  }
}

export default TransferFormLayout
