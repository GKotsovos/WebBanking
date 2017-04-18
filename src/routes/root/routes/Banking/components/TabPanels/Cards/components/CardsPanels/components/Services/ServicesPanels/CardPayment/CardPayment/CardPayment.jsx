import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import './CardPayment.css';

const callJquery = () => {
  $(document).ready( () => $('.selectpicker').selectpicker() )
}

export const CardPayment = () => (
  <form className="cardPaymentContainer">

    {callJquery()}
    <div className="form-group">
      <label htmlFor="paymentAccount">Λογαριασμός Χρέωσης</label>
      <div>
      <select id="paymentAccount" className="selectpicker paymentAccount form-control" data-show-subtext="true">
        <option data-subtext="Μισθοδοσία 525,00€">GR2201100470000009237465820</option>
        <option data-subtext="Αποταμίευση 1525,00€">GR2201100470000009237465350</option>
        <option data-subtext="Αποταμίευση 5425,00€">GR2201100470000009237465700</option>
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

    <div id="completionCardPaymentButtons" className="form-group">
      <button id="clearCardPaymentForm" type="button" className="btn btn-default">Καθαρισμός</button>
      <button id="nextCardPaymentForm" type="button" className="btn btn-default">Συνέχεια</button>
    </div>

  </form>
)

export default CardPayment
