import React, { Component, PropTypes } from 'react'
import _ from 'underscore';

class DomesticBankSelection extends Component {
  componentDidMount() {
    const { bank } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.domesticBankSelect').selectpicker('val', [bank.value]);
  }

  render() {
    const {
      bank,
      domesticBanks,
      setCreditBank,
    } = this.props;

    $(".selectpicker.domesticBankSelect").selectpicker('refresh')
    return (
      <div className="bottomOfTwoDivs">
        <select
          className={`selectpicker domesticBankSelect form-control ${_.isEmpty(bank) || bank.correct ? "" : "notValid"} `}
          data-show-subtext="true"
          title="Επιλέξτε Τράπεζα Δικαιούχου"
          value={bank.name || ""}
          onChange={
            (e) => setCreditBank(e.target.value)
          }
        >
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
