import React, { Component, PropTypes } from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons';
import './LoadForm.css';

class LoadForm extends Component {
  componentDidMount() {
    const { transactionForm } = this.props;
    $('.selectpicker').selectpicker()
    $('.selectpicker').selectpicker('val', [transactionForm.debitAccount.value])
  }

  clearForm() {
    const { initCardTransactionForm } = this.props;
    $('.selectpicker').selectpicker('val', [''])
    initCardTransactionForm();
  }

  render() {
    const {
      accounts,
      creditCards,
      prepaidCards,
      loans,
      transactionForm,
      setDebitAccount,
      setPrepaidCardLoadAmount,
      setTransactionDate
    } = this.props;
    return (
      <form className="loadFormContainer">

        <div className="form-group">
          <label htmlFor="loadAmount">Λογαριασμός Χρέωσης</label>
          <div>
            <select
              id="loadAmount"
              className={`selectpicker loadAccount form-control ${_.isEmpty(transactionForm.debitAccount) || transactionForm.debitAccount.correct ? "" : "notValid"}`}
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

        <div className="form-group">
          <label htmlFor="amount">Ποσό</label>
          <input
            className={`form-control text-right ${_.isEmpty(transactionForm.amount) || transactionForm.amount.correct ? "" : "notValid"}`}
            id="amount"
            placeholder="€"
            value={transactionForm.amount.value || ""}
            onChange={(e) => setPrepaidCardLoadAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentDatePicker">Ημερομηνία Εκτέλεσης</label>
          <DatePicker
            id="loadDatePicker"
            className={`form-control text-right ${_.isEmpty(transactionForm.date) || transactionForm.date.correct ? "" : "notValid"}`}
            weekStartsOnMonday
            calendarPlacement="top"
            placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"
            value={transactionForm.date.value}
            onChange={(value, formattedValue) => setTransactionDate(value, formattedValue)}
          />
        </div>

        <div className="form-group">
          <label id="saveLoad">
            <input
              id="saveLoadCheckBox"
              type="checkbox"
            />
            <span>Αποθήκευση ως πρότυπο</span>
          </label>
        </div>

        <FormCompletionButtons
          shouldProcess={transactionForm.shouldProcess}
          clearForm={this.clearForm.bind(this)}
          linkToApprovalForm='/banking/cards/prepaidcards/card/load/approval'
        />

      </form>
    )
  }
}

export default LoadForm
