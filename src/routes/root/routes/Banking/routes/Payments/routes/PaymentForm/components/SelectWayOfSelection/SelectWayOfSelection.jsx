import React from 'react'
import _ from 'underscore';
import localizationText from './localizationText';
import './SelectWayOfSelection.css';

export const SelectWayOfSelection = ({ setSearchPayment, language, shouldSearch }) => (
  <div id="wayOfSelection" className="form-group">
    <label htmlFor="selectWayOfSelection">{localizationText[language].paymentLabel}</label>
    <div id="selectWayOfSelection">
      <span
        id="select"
        onClick={() => setSearchPayment(false)}>
        <input
          type="radio"
          name="wayOfSelection"
          onChange={() => setSearchPayment(false)}
          checked={!shouldSearch}
        />
        {localizationText[language].select}
      </span>
      <span
        id="search"
        onClick={() => setSearchPayment(true)}>
        <input
          type="radio"
          name="wayOfSelection"
          onChange={() => setSearchPayment(true)}
          checked={shouldSearch}
        />
        {localizationText[language].search}
      </span>
    </div>
  </div>
)

export default SelectWayOfSelection
