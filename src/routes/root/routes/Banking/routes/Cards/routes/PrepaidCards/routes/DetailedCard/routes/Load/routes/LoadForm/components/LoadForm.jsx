import React, { Component, PropTypes } from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import FormCompletionButtons from 'routes/root/routes/Banking/routes/components/FormCompletionButtons'
import './LoadForm.css';

// const callJquery = () => {
//   $(document).ready( () => $('.selectpicker').selectpicker() )
// }

// export const LoadForm = () => (
class LoadForm extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker()
  }

  render() {
    return (
      <form className="loadFormContainer">

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
          <label htmlFor="loadDatePicker">Ημερομηνία Εκτέλεσης</label>
          <DatePicker id="loadDatePicker" weekStartsOnMonday calendarPlacement="top" placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"/>
        </div>

        <div className="form-group">
          <label id="saveLoad">
            <input id="saveLoadCheckBox" type="checkbox" />
            <span>Αποθήκευση ως πρότυπο</span>
          </label>
        </div>

        <FormCompletionButtons />

      </form>
    )
  }
}

export default LoadForm
