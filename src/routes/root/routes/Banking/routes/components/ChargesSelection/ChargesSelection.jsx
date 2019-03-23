import React, { Component } from 'react'
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export class ChargesSelection extends Component {
  componentDidMount() {
    const { chargesBeneficiary } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.charges-selection__dropdown').selectpicker('val', [chargesBeneficiary.selection]);
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.charges-selection__dropdown").selectpicker('refresh'), 350);
  }

  render() {
    const { chargesBeneficiary, language, setChargesBeneficiary } = this.props;
    return (
      <div className="form-group">
        <label htmlFor="charges-selection">{localizationText[language].charges}</label>
        <select
          id="charges-selection"
          className={`selectpicker charges-selection__dropdown form-control ${isEmpty(chargesBeneficiary) || chargesBeneficiary.correct ? "" : "invalid-value"}`}
          data-show-subtext="true"
          title={localizationText[language].selectChargesTitle}
          onChange={(e) => setChargesBeneficiary(e.target.value, e.target.options[e.target.options.selectedIndex].dataset.value)}>
          <option
            data-value="both"
            className="charges-selection__option"
            data-subtext="3,00€">
            {localizationText[language].chargeBoth}
          </option>
          <option
            data-value="sender"
            className="charges-selection__option"
            data-subtext="6,00€">
            {localizationText[language].chargeSender}
          </option>
          <option
            data-value="beneficiary"
            className="charges-selection__option"
            data-subtext="0,00€">
            {localizationText[language].chargeBeneficiary}
          </option>
        </select>
      </div>
    )
  }
}

export default ChargesSelection
