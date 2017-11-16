import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import _ from 'underscore';
import localizationText from './localizationText';
import './SelectPaymentOrderEndDate.css';

export const SelectPaymentOrderEndDate = ({
  endDate,
  language,
  setPaymentOrderEndDate,
}) => (
  <div className="form-group">
    <label htmlFor="transactionDate">{localizationText[language].expirationDate}</label>
    <div id="transactionDate">
      <DatePicker
        id="transactionDatePicker"
        className={`form-control text-right ${_.isEmpty(endDate) || endDate.correct ? "" : "notValid"}`}
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
