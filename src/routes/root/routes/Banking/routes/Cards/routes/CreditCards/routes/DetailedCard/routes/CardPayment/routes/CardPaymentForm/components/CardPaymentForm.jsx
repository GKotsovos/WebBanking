import React, { Component, PropTypes } from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons'
import './CardPaymentForm.css';

class CardPaymentForm extends Component {
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
      setCreditCardPaymentAmount,
      setTransactionDate
    } = this.props;
    return (
      <form id="creditCardPaymentForm" className="cardPaymentContainer">

        <div className="form-group">
          <label htmlFor="paymentAccount">Λογαριασμός Χρέωσης</label>
          <div>
            <select
              id="paymentAccount"
              className={`selectpicker paymentAccount form-control ${_.isEmpty(transactionForm.debitAccount) || transactionForm.debitAccount.correct ? "" : "notValid"}`}
              data-show-subtext="true"
              title="Επιλέξτε λογαριασμό"
              onChange={(e) => setDebitAccount(e.target.value)}
            >
              {
                _.map(accounts, (account) => (
                  <option
                    key={account.iban}
                    data-subtext={
                      `${account.type} ${account.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(account.currency).symbol}`
                    }
                  >
                    {account.iban}
                  </option>
                ))
              }
              {/* Add logic for loans */}
                    key={loan.id}
                    data-subtext={
                      `${loan.customTitle} ${loan.availableBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})} ${currencyFormatter.findCurrency(loan.currency).symbol}`
                    }
                    key={creditCard.id}
                    key={prepaidCard.id}
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
            onChange={(e) => setCreditCardPaymentAmount(e.target.value)}
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
          <label id="saveCardPayment">
            <input
              id="saveCardPaymentCheckBox"
              type="checkbox"
            />
            <span>Αποθήκευση ως πρότυπο</span>
          </label>
        </div>

        <FormCompletionButtons
          shouldProcess={transactionForm.shouldProcess}
          clearForm={this.clearForm.bind(this)}
          linkToApprovalForm='/banking/cards/creditcards/card/payment/approval'
        />

      </form>
    )
  }
}

export default CardPaymentForm
