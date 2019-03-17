import React, { Component } from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

class DomesticBankSelection extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker();
    $('.selectpicker.domestic-bank-selection__dropdown').selectpicker('val', [this.props.bank.selection]);
  }

  render() {
    const {
      bank,
      domesticBanks,
      language,
      setCreditBank,
    } = this.props;

    $(".selectpicker.domestic-bank-selection__dropdown").selectpicker('refresh')
    return (
      <div className="form-group">
        <select
          className={`selectpicker domestic-bank-selection__dropdown form-control ${_.isEmpty(bank) || bank.correct ? "" : "invalid-value"} `}
          data-show-subtext="true"
          title={localizationText[language].selectBeneficiaryBank}
          value={bank.selection || ""}
          onChange={(e) => setCreditBank(e.target.value)}>
          {
            _.map(domesticBanks, (domesticBank) => (
              <option>
                {domesticBank}
              </option>
            ))
          }
        </select>
      </div>
    )
  }
}

export default DomesticBankSelection
