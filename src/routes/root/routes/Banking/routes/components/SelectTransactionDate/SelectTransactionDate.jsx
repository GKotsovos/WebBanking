import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import _ from 'underscore';
import './SelectTransactionDate.css';

export const SelectTransactionDate = ({
  title,
  date,
  setAsapTransaction,
  setTransactionDate,
}) => (
  <div className="form-group">
    <label htmlFor="transactionDate">{title}</label>
    <div id="transactionDate">
      <span
        id="now"
        className="transactionDateRadio">
        <input
          type="radio"
          name="transactionDate"
          onChange={() => setAsapTransaction(true)}
          checked={date ? date.asapTransaction : false}
        />
        <span
          id="amesa"
          onClick={() => setAsapTransaction(true)}>
          Άμεσα
        </span>
      </span>
      <span
        id="later"
        className="transactionDateRadio">
        <input
          type="radio"
          name="transactionDate"
          onChange={() => setAsapTransaction(false)}
          checked={!_.isEmpty(date) && !date.asapTransaction}
        />
        <span
          id="stis"
          onClick={() => setAsapTransaction(false)}>
          Στις
        </span>
        <DatePicker
          id="transactionDatePicker"
          className={`form-control text-right ${_.isEmpty(date) || date.correct ? "" : "notValid"}`}
          weekStartsOnMonday
          calendarPlacement="top"
          placeholder="ΗΗ/ΜΜ/ΕΕΕΕ"
          value={date? date.value : ''}
          onChange={(value, formattedValue) => setTransactionDate(value, formattedValue)}
          disabled={_.isEmpty(date) || date.asapTransaction}
        />
      </span>
    </div>
  </div>
)

export default SelectTransactionDate
