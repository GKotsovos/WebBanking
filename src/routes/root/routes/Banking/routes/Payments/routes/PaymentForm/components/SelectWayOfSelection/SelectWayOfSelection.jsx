import React from 'react'
import localizationText from './localizationText'

export const SelectWayOfSelection = ({ setSearchPayment, language, shouldSearch }) => (
  <div className="form-group select-way-of-selection-container">
    <label htmlFor="select-way-of-selection">{localizationText[language].paymentLabel}</label>
    <div id="select-way-of-selection" className="select-way-of-selection">
      <span
        className="select-way-of-selection__radio-container"
        onClick={() => setSearchPayment(false)}>
        <input
          type="radio"
          name="way-of-selection"
          className="select-way-of-selection__radio"
          onChange={() => setSearchPayment(false)}
          checked={!shouldSearch}
        />
        {localizationText[language].select}
      </span>
      <span
        className="select-way-of-selection__radio-container"
        onClick={() => setSearchPayment(true)}>
        <input
          type="radio"
          name="way-of-selection"
          className="select-way-of-selection__radio"
          onChange={() => setSearchPayment(true)}
          checked={shouldSearch}
        />
        {localizationText[language].search}
      </span>
    </div>
  </div>
)

export default SelectWayOfSelection
