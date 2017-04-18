import React from 'react'
import NewAccountOrder from '../NewAccountOrder'
import NewOrganizationOrder from '../NewOrganizationOrder'
import './NewOrder.css';

const callJquery = () => {
  $(document).ready( () => $('.selectpicker').selectpicker() )
}

export const NewOrder = () => (
  <form id="orderCompletionForm">

    {callJquery()}
    <div className="form-group">
      <label htmlFor="orderSelectAccount">Λογαριασμός Χρέωσης</label>
      <div>
      <select id="orderSelectAccount" className="selectpicker orderSelectAccount form-control" data-show-subtext="true">
        <option data-subtext="Μισθοδοσία 525,00€">GR2201100470000009237465820</option>
        <option data-subtext="Αποταμίευση 1525,00€">GR2201100470000009237465350</option>
        <option data-subtext="Αποταμίευση 5425,00€">GR2201100470000009237465700</option>
      </select>
      </div>
    </div>

    <NewOrganizationOrder />
    {/* <NewAccountOrder /> */}

    <div className="form-group">
      <label id="saveOrder">
        <input id="saveOrderCheckBox" type="checkbox" />
        <span>Αποθήκευση ως πρότυπο</span>
      </label>
    </div>

    <div id="completionOrderButtons" className="form-group">
      <button id="clearOrderForm" type="button" className="btn btn-default">Καθαρισμός</button>
      <button id="nextOrderForm" type="button" className="btn btn-default">Συνέχεια</button>
    </div>

  </form>
)

export default NewOrder
