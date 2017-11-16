import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import localizationText from './localizationText';
import './SelectPeriodicity.css';

class SelectPeriodicity extends Component {
  componentDidMount() {
    const { periodicity } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transferBankSelect').selectpicker('val', [periodicity ? periodicity.selection : ''])
  }

  componentWillReceiveProps() {
    setTimeout(() => $(".selectpicker.transferBankSelect").selectpicker('refresh'), 350);
  }

  render() {
    const {
      periodicity,
      language,
      setPeriodicity
    } = this.props;
    return (
      <div className="form-group col-xs-6">
        <label htmlFor="periodSelect">{localizationText[language].executionFrequency}</label>
        <select
          id="periodSelect"
          className={`selectpicker periodSelect form-control ${_.isEmpty(periodicity) || periodicity.correct ? "" : "notValid"}`}
          data-show-subtext="true"
          title={localizationText[language].selectExecutionFrequencyTitle}
          onChange={(e) => setPeriodicity(e.target.value, e.target.options[e.target.options.selectedIndex].className)}>
          <option
            className="1"
            value={periodicity.value}>
            {localizationText[language].everyMonthSelection}
          </option>
          <option
            className="2"
            value={periodicity.value}>
            {localizationText[language].everyTwoMonthsSelection}
          </option>
          <option
            className="3"
            value={periodicity.value}>
            {localizationText[language].everyThreeMonthsSelection}
          </option>
          <option
            className="4"
            value={periodicity.value}>
            {localizationText[language].everyFourMonthsSelection}
          </option>
          <option
            className="5"
            value={periodicity.value}>
            {localizationText[language].everyFiveMonthsSelection}
          </option>
          <option
            className="6"
            value={periodicity.value}>
            {localizationText[language].everySixMonthsSelection}
          </option>
          <option
            className="12"
            value={periodicity.value}>
            {localizationText[language].everyYearSelection}
          </option>
        </select>
      </div>
    )
  }
}

export default SelectPeriodicity
