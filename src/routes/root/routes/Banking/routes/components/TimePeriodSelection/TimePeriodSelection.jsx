import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import _ from 'underscore';
import localizationText from './localizationText';

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
    <div id="timePeriodGroup" className="row">
      <div className="col-xs-12">

        <div className="periodSelection col-xs-12 col-sm-4 vertical-align">
          <label className="fromPeriodLabel">{localizationText[language].fromTimePeriodLabel}</label>
          <DatePicker
            id="timePeriodPicker"
            className={`text-right ${_.isEmpty(startDate) || startDate.valid ? "" : "notValid"}`}
            weekStartsOnMonday
            calendarPlacement="top"
            placeholder={localizationText[language].datePickerPlaceholder}
            value={startDate ? startDate.value : ''}
            onChange={(value, formattedValue) => setTransactionHistoryStartDate(value)}
          />
        </div>

        <div className="periodSelection col-sm-offset-1 col-xs-12 col-sm-4 vertical-align">
          <label className="untilPeriodLabel">{localizationText[language].untilTimePeriodLabel}</label>
          <DatePicker
            id="timePeriodPicker"
            className={`text-right ${_.isEmpty(endDate) || endDate.valid ? "" : "notValid"}`}
            weekStartsOnMonday
            calendarPlacement="top"
            placeholder={localizationText[language].datePickerPlaceholder}
            value={endDate ? endDate.value : ''}
            onChange={(value, formattedValue) => setTransactionHistoryEndDate(value)}
          />
        </div>

        <div className="col-sm-offset-1 col-xs-12 col-sm-2 vertical-align">
          <button
            id="searchTransacrion"
            type="button"
            className="btn btn-default"
            disabled={!validSelection}
            onClick={() => getTransactionHistoryByTimePeriod(startDate.value, endDate.value)}>
            {localizationText[language].search}
          </button>
        </div>

      </div>
    </div>
  </div>
)

export default TimePeriodSelection
