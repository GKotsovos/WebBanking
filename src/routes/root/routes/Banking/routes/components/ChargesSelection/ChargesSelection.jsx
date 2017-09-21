import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
import './ChargesSelection.css';

export class ChargesSelection extends Component {
  componentDidMount() {
    const { chargesBeneficiary } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transferSelectCharges').selectpicker('val', [chargesBeneficiary.selection]);
  }

  render(){
    const { chargesBeneficiary, setChargesBeneficiary } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="transferSelectCharges">Επιβάρυνση Εξόδων</label>
        <select
          id="transferSelectCharges"
          className={`selectpicker transferSelectCharges form-control ${_.isEmpty(chargesBeneficiary) || chargesBeneficiary.correct ? "" : "notValid"}`}
          data-show-subtext="true"
          title="Επιλέξτε επιβάρυνση εξόδων"
          onChange={(e) => setChargesBeneficiary(e.target.value, e.target.options[e.target.options.selectedIndex].id)}>
          <option
            id="both"
            className="chargesText"
            data-subtext="3,00€">
            Να επιβαρυνθώ μόνο με τα έξοδα της τράπεζας μου
          </option>
          <option
            id="sender"
            className="chargesText"
            data-subtext="6,00€">
            Να επιβαρυνθώ με όλα τα έξοδα
          </option>
          <option
            id="beneficiary"
            className="chargesText"
            data-subtext="0,00€">
            Να επιβαρυνθεί ο δικαιούχος με όλα τα έξοδα
          </option>
        </select>
      </div>
    )
  }
}

export default ChargesSelection
