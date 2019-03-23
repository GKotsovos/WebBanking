import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export const SelectPaymentOrderEndDate = ({
  endDate,
  language,
  setPaymentOrderEndDate,
}) => (
  <div className="form-group">
    <label htmlFor="transaction-date">{localizationText[language].expirationDate}</label>
    <div id="transaction-date">
      <DatePicker
        id="transaction-date-picker"
        className={`form-control text-right ${isEmpty(endDate) || endDate.correct ? "" : "invalid-value"}`}
        weekStartsOnMonday
        calendarPlacement="top"
        placeholder={localizationText[language].datePlaceholder}
        value={endDate ? endDate.value : ''}
        onChange={(value, formattedValue) => setPaymentOrderEndDate(value, formattedValue)}
      />
    </div>
  </div>
)

export default SelectPaymentOrderEndDate
