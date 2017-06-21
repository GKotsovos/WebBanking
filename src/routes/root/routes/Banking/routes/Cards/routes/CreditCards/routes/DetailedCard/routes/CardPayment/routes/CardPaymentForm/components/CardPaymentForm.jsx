import React, { Component, PropTypes } from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import FormCompletionButtons from '../../../../../../../../../../components/FormCompletionButtons'
import './CardPaymentForm.css';

class CardPaymentForm extends Component {
  componentDidMount() {
    const { transactionForm } = this.props;
    $('.selectpicker').selectpicker()
    $('.selectpicker').selectpicker('val', [transactionForm.debitAccount])
  }

  clearForm() {
    const { clearTransactionForm } = this.props;
    $('.selectpicker').selectpicker('val', [''])
    clearTransactionForm();
  }

  render() {
    const {
      accounts,
      transactionForm,
      setDebitAccount,
      setTransactionAmount,
      setTransactionDate
    } = this.props;
    return (
      <form id="creditCardPaymentForm" className="cardPaymentContainer">

        <div className="form-group">
          <label htmlFor="paymentAccount">Λογαριασμός Χρέωσης</label>
          <div>
            <select
              id="paymentAccount"
              className="selectpicker paymentAccount form-control"
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
            </select>
          </div>
        </div>

        <div className="form-group">
          <label
            htmlFor="amount">Ποσό</label>
          <input
            className="form-control text-right"
            id="amount"
            placeholder="€"
            value={transactionForm.amount}
            onChange={(e) => setTransactionAmount(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="paymentDatePicker">Ημερομηνία Εκτέλεσης</label>
          <DatePicker
            id="paymentDatePicker"
            weekStartsOnMonday
            calendarPlacement="top"
            placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"
            value={transactionForm.viewDate}
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
          clearForm={this.clearForm.bind(this)}
          linkToApprovalForm='/banking/cards/creditcards/card/payment/approval'
        />

      </form>
    )
  }
}

export default CardPaymentForm
