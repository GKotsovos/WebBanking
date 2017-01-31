import React from 'react'
import NewAccountOrder from '../NewAccountOrder'
import NewOrganizationOrder from '../NewOrganizationOrder'
import './NewOrder.css';

export const NewOrder = () => (
  <form id="orderCompletionForm">

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
