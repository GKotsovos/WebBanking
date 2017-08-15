import React, { Component, PropTypes } from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons'
import './LoanPaymentForm.css';

class LoanPaymentForm extends Component {
  componentDidMount() {
    const { transactionForm } = this.props;
    $('.selectpicker').selectpicker()
    $('.selectpicker').selectpicker('val', [transactionForm.debitAccount.value])
  }

  clearForm() {
    const { initLoanTransactionForm } = this.props;
    $('.selectpicker').selectpicker('val', [''])
    initLoanTransactionForm();
  }

  render() {
    const {
      accounts,
      transactionForm,
      setDebitAccount,
      setLoanPaymentAmount,
      setTransactionDate
    } = this.props;
    return (
      <div id="loanPaymentForm" className="loanPaymentContainer">

        <div className="form-group">
          <label htmlFor="paymentAccount">Λογαριασμός Χρέωσης</label>
          <div>
          <select
            id="paymentAccount"
            className={`selectpicker paymentAccount form-control ${_.isEmpty(transactionForm.debitAccount) || transactionForm.debitAccount.correct ? "" : "notValid"}`} data-show-subtext="true"
            title="Επιλέξτε λογαριασμό"
            onChange={(e) => setDebitAccount(e.target.value)}
          >
          {
            _.map(accounts, (account, key) => (
              <option
                key={key}
                data-subtext={
                  `${account.type} ${account.ledgerBalance} ${currencyFormatter.findCurrency(account.currency).symbol}`
                }
              >
                {account.iban}
              </option>
            ))
          }
          {/* Add logic for credit cards */}
          </select>
          </div>
        </div>

        <div className="form-group">
          <label
            htmlFor="amount">Ποσό</label>
          <input
            className={`form-control text-right ${_.isEmpty(transactionForm.amount) || transactionForm.amount.correct ? "" : "notValid"}`}
            id="amount"
            placeholder="€"
            value={transactionForm.amount.value || ""}
            onChange={(e) => setLoanPaymentAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentDatePicker">Ημερομηνία Εκτέλεσης</label>
          <DatePicker
            id="paymentDatePicker"
            className={`form-control text-right ${_.isEmpty(transactionForm.date) || transactionForm.date.correct ? "" : "notValid"}`}
            weekStartsOnMonday
            calendarPlacement="top"
            placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"
            value={transactionForm.date.value}
            onChange={(value, formattedValue) => setTransactionDate(value, formattedValue)}
          />
        </div>

        <div className="form-group">
          <label id="saveLoanPayment">
            <input
              id="saveLoanPaymentCheckBox"
              type="checkbox"
            />
            <span>Αποθήκευση ως πρότυπο</span>
          </label>
        </div>

        <FormCompletionButtons
          shouldProcess={transactionForm.shouldProcess}
          clearForm={this.clearForm.bind(this)}
          linkToApprovalForm='/banking/loans/loan/payment/approval'
        />

      </div>
    )
  }
}

export default LoanPaymentForm
