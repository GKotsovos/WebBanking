import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import './SelectPeriodicity.css';

class SelectPeriodicity extends Component {
  componentDidMount() {
    const { periodicity } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transferBankSelect').selectpicker('val', [periodicity ? periodicity.selection : ''])
  }

  render() {
    const {
      periodicity,
      setPeriodicity
    } = this.props;
    return (
      <div className="form-group col-xs-6">
        <label htmlFor="periodSelect">Περιοδικότητα</label>
        <select
          id="periodSelect"
          className={`selectpicker periodSelect form-control ${_.isEmpty(periodicity) || periodicity.correct ? "" : "notValid"}`}
          data-show-subtext="true"
          title="Επιλέξτε περιοδικότητα"
          onChange={(e) => setPeriodicity(e.target.value, e.target.options[e.target.options.selectedIndex].className)}>
          <option
            className="1"
            value={periodicity.value}>
            Κάθε μήνα
          </option>
          <option
            className="2"
            value={periodicity.value}>
            Κάθε δύο μήνες
          </option>
          <option
            className="3"
            value={periodicity.value}>
            Κάθε τρεις μήνες
          </option>
          <option
            className="4"
            value={periodicity.value}>
            Κάθε τέσσερις μήνες
          </option>
          <option
            className="5"
            value={periodicity.value}>
            Κάθε πέντε μήνες
          </option>
          <option
            className="6"
            value={periodicity.value}>
            Κάθε έξι μήνες
          </option>
          <option
            className="12"
            value={periodicity.value}>
            Κάθε έτος
          </option>
        </select>
      </div>
    )
  }
}

export default SelectPeriodicity
