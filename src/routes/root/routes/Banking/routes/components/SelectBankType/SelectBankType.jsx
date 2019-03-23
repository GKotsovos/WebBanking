import React, { Component }  from 'react';
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export class SelectBankType extends Component {
  componentDidMount() {
    const { bankType } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.select-bank-type__dropdown').selectpicker('val', [bankType.selection])
  }

  render() {
    const {
      bankType,
      language,
      setCreditBankType
    } = this.props;
    setTimeout(() => $('.selectpicker.select-bank-type__dropdown').selectpicker('val', [bankType.selection]), 1);
    return (
      <div className="form-group select-bank-type">
        <label htmlFor="select-bank-type-dropdown">{localizationText[language].transferBankSelectLabel}</label>
        <div>
          <select
            id="select-bank-type-dropdown"
            className={`selectpicker select-bank-type__dropdown form-control ${isEmpty(bankType) || bankType.correct ? "" : "invalid-value"}`}
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
