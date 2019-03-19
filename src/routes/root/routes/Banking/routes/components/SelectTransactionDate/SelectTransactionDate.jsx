import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export const SelectTransactionDate = ({
  title,
  date,
  language,
  setAsapTransaction,
  setTransactionDate,
}) => (
  <div className="form-group select-transaction-date-container">
    <label htmlFor="select-transaction-date">{title}</label>
    <div id="select-transaction-date" className="select-transaction-date">
      <span className="select-transaction-date__execution-type">
        <input
          type="radio"
          name="transaction-execution-type"
          className="select-transaction-date__radio"
          onChange={() => setAsapTransaction(true)}
          checked={date ? date.asapTransaction : false}
        />
        <span
          onClick={() => setAsapTransaction(true)}>
          {localizationText[language].asap}
        </span>
      </span>
      <span
        className="select-transaction-date__execution-type">
        <input
          type="radio"
          name="transaction-execution-type"
          className="select-transaction-date__radio"
          onChange={() => setAsapTransaction(false)}
          checked={!isEmpty(date) && !date.asapTransaction}
        />
        <span
          onClick={() => setAsapTransaction(false)}>
          {localizationText[language].on}
        </span>
      </span>
      <DatePicker
        id="transaction-date-picker"
        className={`form-control text-right ${isEmpty(date) || date.correct ? "" : "invalid-value"}`}
        weekStartsOnMonday
        calendarPlacement="top"
        placeholder={localizationText[language].selectDatePlaceholder}
        value={date ? date.value : ''}
        onChange={(value, formattedValue) => setTransactionDate(value, formattedValue)}
        disabled={isEmpty(date) || date.asapTransaction}
      />
    </div>
  </div>
)

export default SelectTransactionDate
