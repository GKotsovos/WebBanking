import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import _ from 'underscore';
import localizationText from './localizationText';
import './TimePeriodSelection.css';

export const TimePeriodSelection = ({
  startDate,
  endDate,
  validSelection,
  language,
  setTransactionHistoryStartDate,
  setTransactionHistoryEndDate,
  getTransactionHistoryByTimePeriod,
}) => (
  <div className="timePeriodSelectionContainer">
    <span id="timePeriodGroup">
      <label className="timePeriodLabel">{localizationText[language].fromTimePeriodLabel}</label>
      <DatePicker
        id="timePeriodPicker"
        className={`text-right ${_.isEmpty(startDate) || startDate.valid ? "" : "notValid"}`}
        weekStartsOnMonday
        calendarPlacement="top"
        placeholder={localizationText[language].datePickerPlaceholder}
        value={startDate ? startDate.value : ''}
        onChange={(value, formattedValue) => setTransactionHistoryStartDate(value)}
      />
      <label className="timePeriodLabel">{localizationText[language].untilTimePeriodLabel}</label>
      <DatePicker
        id="timePeriodPicker"
        className={`text-right ${_.isEmpty(endDate) || endDate.valid ? "" : "notValid"}`}
        weekStartsOnMonday
        calendarPlacement="top"
        placeholder={localizationText[language].datePickerPlaceholder}
        value={endDate ? endDate.value : ''}
        onChange={(value, formattedValue) => setTransactionHistoryEndDate(value)}
      />
      <button
        id="submitTransaction"
        type="button"
        className="btn btn-default"
        disabled={!validSelection}
        onClick={() => getTransactionHistoryByTimePeriod(startDate.value, endDate.value)}>
        {localizationText[language].search}
      </button>
    </span>
  </div>
)

export default TimePeriodSelection
