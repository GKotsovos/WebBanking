import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'
import _ from 'underscore'
import localizationText from './localizationText'

export const TimePeriodSelection = ({
  startDate,
  endDate,
  validSelection,
  language,
  setTransactionHistoryStartDate,
  setTransactionHistoryEndDate,
  getTransactionHistoryByTimePeriod
}) => (
  <div className="time-period-selection">
    <div className="time-period-selection-date-picker-container">
      <label className="time-period-selection__label">{localizationText[language].fromTimePeriodLabel}</label>
      <DatePicker
        id="time-period-datepicker-start-date"
        className={`text-right ${_.isEmpty(startDate) || startDate.valid ? '' : 'invalid-value'}`}
        weekStartsOnMonday
        calendarPlacement="top"
        placeholder={localizationText[language].datePickerPlaceholder}
        value={startDate ? startDate.value : ''}
        onChange={(value, formattedValue) => setTransactionHistoryStartDate(value)}
      />
    </div>

    <div className="time-period-selection-date-picker-container">
      <label className="time-period-selection__label">{localizationText[language].untilTimePeriodLabel}</label>
      <DatePicker
        className={`text-right ${_.isEmpty(endDate) || endDate.valid ? '' : 'invalid-value'}`}
        weekStartsOnMonday
        calendarPlacement="top"
        placeholder={localizationText[language].datePickerPlaceholder}
        value={endDate ? endDate.value : ''}
        onChange={(value, formattedValue) => setTransactionHistoryEndDate(value)}
      />
    </div>

    <button
      type="button"
      className="common-button--blue btn time-period-selection__search-button"
      disabled={!validSelection}
      onClick={() => getTransactionHistoryByTimePeriod(startDate.value, endDate.value)}>
      {localizationText[language].search}
    </button>
  </div>
)

export default TimePeriodSelection
