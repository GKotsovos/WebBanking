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
              onChange={(e) => setDebitAccount(e.target.value)}
            >
              {
                _.map(accounts, (account) => (
                  <option
                    data-subtext={
                      `${account.type} ${account.ledgerBalance} ${currencyFormatter.findCurrency(account.currency).symbol}`
                    }
                  >
                    {account.iban}
                  </option>
                ))
              }
              {/* Add logic for credit cards and loans*/}
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
          clearForm={this.clearForm.bind(this)}
          linkToApprovalForm='/banking/cards/creditcards/card/payment/approval'
        />

      </form>
    )
  }
}

export default LoadForm
