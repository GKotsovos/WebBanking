import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

export class ChargesSelection extends Component {
  componentDidMount() {
    const { chargesBeneficiary } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transferSelectCharges').selectpicker('val', [chargesBeneficiary.selection]);
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.transferSelectCharges").selectpicker('refresh'), 350);
  }

  render() {
    const { chargesBeneficiary, language, setChargesBeneficiary } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="transferSelectCharges">{localizationText[language].charges}</label>
        <select
          id="transferSelectCharges"
          className={`selectpicker transferSelectCharges form-control ${_.isEmpty(chargesBeneficiary) || chargesBeneficiary.correct ? "" : "notValid"}`}
          data-show-subtext="true"
          title={localizationText[language].selectChargesTitle}
          onChange={(e) => setChargesBeneficiary(e.target.value, e.target.options[e.target.options.selectedIndex].id)}>
          <option
            id="both"
            className="chargesText"
            data-subtext="3,00€">
            {localizationText[language].chargeBoth}
          </option>
          <option
            id="sender"
            className="chargesText"
            data-subtext="6,00€">
            {localizationText[language].chargeSender}
          </option>
          <option
            id="beneficiary"
            className="chargesText"
            data-subtext="0,00€">
            {localizationText[language].chargeBeneficiary}
          </option>
        </select>
      </div>
    )
  }
}

export default ChargesSelection
