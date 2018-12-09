import React, { Component, PropTypes }  from 'react';
import _ from 'underscore';
import localizationText from './localizationText';

export class SelectBankType extends Component {
  componentDidMount() {
    const { bankType } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transferBankSelect').selectpicker('val', [bankType.selection])
  }

  render() {
    const {
      bankType,
      language,
      setCreditBankType
    } = this.props;
    setTimeout(() => $('.selectpicker.transferBankSelect').selectpicker('val', [bankType.selection]), 1);
    return (
      <div id="bankDiv" className="form-group">
        <label htmlFor="transferBankSelect">{localizationText[language].transferBankSelectLabel}</label>
        <div>
          <select
            className={`selectpicker transferBankSelect form-control ${_.isEmpty(bankType) || bankType.correct ? "" : "notValid"}`}
            data-show-subtext="true"
            title={localizationText[language].transferBankSelectTitle}
            value={bankType ? bankType.value : ""}
            onChange={(e) => setCreditBankType(e.target.value, e.target.options[e.target.options.selectedIndex].id)}>
            <option id="agileBank">{localizationText[language].agileBankOption}</option>
            <option id="domesticBank">{localizationText[language].domesticBankOption}</option>
            <option id="foreignBank">{localizationText[language].foreignBankOption}</option>
          </select>
        </div>
      </div>
    )
  }
}

export default SelectBankType
