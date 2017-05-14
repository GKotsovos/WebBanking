import React, { Component, PropTypes } from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import FormCompletionButtons from '../../../../../../../../../../components/FormCompletionButtons'
import './CardPaymentForm.css';

class CardPaymentForm extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker()
  }

  render() {
    const { accounts } = this.props;
    return (
      <form className="cardPaymentContainer">

        <div className="form-group">
          <label htmlFor="paymentAccount">Λογαριασμός Χρέωσης</label>
          <div>
          <select id="paymentAccount" className="selectpicker paymentAccount form-control" data-show-subtext="true">
            {
              _.map(accounts, (account) =>
              <option data-subtext={`${account.type} ${account.ledgerBalance} ${currencyFormatter.findCurrency(account.currency).symbol}`}>
                {account.iban}
              </option>)
            }
          </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Ποσό</label>
          <input className="form-control text-right" id="amount" placeholder="€"/>
        </div>

        <div className="form-group">
          <label htmlFor="paymentDatePicker">Ημερομηνία Εκτέλεσης</label>
          <DatePicker id="paymentDatePicker" weekStartsOnMonday calendarPlacement="top" placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"/>
        </div>

        <div className="form-group">
          <label id="saveCardPayment">
            <input id="saveCardPaymentCheckBox" type="checkbox" />
            <span>Αποθήκευση ως πρότυπο</span>
          </label>
        </div>

        <FormCompletionButtons linkToApprovalForm='/banking/cards/creditcards/card/payment/approval' />

      </form>
    )
  }
}

export default CardPaymentForm
