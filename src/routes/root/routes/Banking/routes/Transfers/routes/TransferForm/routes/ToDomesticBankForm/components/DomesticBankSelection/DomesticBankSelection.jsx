import React, { Component, PropTypes } from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

class DomesticBankSelection extends Component {
  componentDidMount() {
    $('.selectpicker').selectpicker();
    $('.selectpicker.domesticBankSelect').selectpicker('val', [this.props.bank.selection]);
  }

  render() {
    const {
      bank,
      domesticBanks,
      language,
      setCreditBank,
    } = this.props;

    $(".selectpicker.domesticBankSelect").selectpicker('refresh')
    return (
      <div className="bottomOfTwoDivs">
        <select
          className={`selectpicker domesticBankSelect form-control ${_.isEmpty(bank) || bank.correct ? "" : "notValid"} `}
          data-show-subtext="true"
          title={localizationText[language].selectBeneficiaryBank}
          value={bank.selection || ""}
          onChange={(e) => setCreditBank(e.target.value)}>
          {
            _.map(domesticBanks, (domesticBank) => (
              <option className="isDomesticBank">
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
