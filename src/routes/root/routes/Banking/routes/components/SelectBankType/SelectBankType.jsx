import React, { Component, PropTypes }  from 'react';
import _ from 'underscore';
import './SelectBankType.css';

export class SelectBankType extends Component {
  componentDidMount() {
    const { bankType } = this.props;
    $('.selectpicker').selectpicker();
    $('.selectpicker.transferBankSelect').selectpicker('val', [bankType.selection])
  }

  render(){
    const {
      bankType,
      setCreditBankType
    } = this.props;
    setTimeout(() => $('.selectpicker.transferBankSelect').selectpicker('val', [bankType.selection]), 1);
    return (
      <div id="bankDiv" className="form-group">
        <label htmlFor="transferBankSelect">Τράπεζα</label>
        <div>
          <select
            className={`selectpicker transferBankSelect form-control ${_.isEmpty(bankType) || bankType.correct ? "" : "notValid"}`}
            data-show-subtext="true"
            title="Επιλέξτε Τύπο Τράπεζας"
            value={bankType ? bankType.value : ""}
            onChange={(e) => setCreditBankType(e.target.value, e.target.options[e.target.options.selectedIndex].id)}>
            <option id="agileBank">Agile Bank</option>
            <option id="domesticBank">Τράπεζα Εσωτερικού</option>
            <option id="foreignBank">Τράπεζα Εξωτερικού</option>
          </select>
        </div>
      </div>
    )
  }
}

export default SelectBankType
