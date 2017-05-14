import React, { Component, PropTypes } from 'react'
import FormCompletionButtons from '../../../../../../components/FormCompletionButtons';
import NewAccountOrder from '../NewAccountOrder'
import NewOrganizationOrder from '../NewOrganizationOrder'
import './NewOrderFormLayout.css';

// const callJquery = () => {
//   $(document).ready( () => $('.selectpicker').selectpicker() )
// }

// export const NewOrderFormLayout = () => (
class NewOrderFormLayout extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker()
  }

  render() {
    return (
      <form id="orderCompletionForm">

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

        <FormCompletionButtons />

      </form>
    )
  }
}

export default NewOrderFormLayout
