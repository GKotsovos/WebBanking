import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import './Payment.css';

const callJquery = () => {
  $(document).ready( () => $('.selectpicker').selectpicker() )
}

export const Payment = () => (
  <form className="paymentContainer">

    {callJquery()}
    <div className="form-group">
      <label htmlFor="paymentAccount">Λογαριασμός Χρέωσης</label>
      <div>
      <select className="selectpicker paymentAccount form-control" data-show-subtext="true">
        <option data-subtext="Μισθοδοσία 525,00€">GR2201100470000009237465820</option>
        <option data-subtext="Αποταμίευση 1525,00€">GR2201100470000009237465350</option>
        <option data-subtext="Αποταμίευση 5425,00€">GR2201100470000009237465700</option>
      </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="organizationSelect">Οργανισμός</label>
      <div>
        <select id="organizationSelect" className="selectpicker organizationSelect form-control">
          <option>Cosmote</option>
          <option>Vodafone</option>
          <option>ΔΕΗ</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label htmlFor="paymentCode">Κωδικός Πληρωμής</label>
      <input className="form-control" id="paymentCode" />
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
      <label id="savePayment">
        <input id="savePaymentCheckBox" type="checkbox" />
        <span>Αποθήκευση ως πρότυπο</span>
      </label>
    </div>

    <div id="completionPaymentButtons" className="form-group">
      <button id="clearPaymentForm" type="button" className="btn btn-default">Καθαρισμός</button>
      <button id="nextPaymentForm" type="button" className="btn btn-default">Συνέχεια</button>
    </div>

  </form>
)

export default Payment
