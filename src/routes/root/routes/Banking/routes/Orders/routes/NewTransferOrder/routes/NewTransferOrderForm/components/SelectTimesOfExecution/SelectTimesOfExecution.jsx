import React from 'react'
import _ from 'underscore';
import './SelectTimesOfExecution.css';

export const SelectTimesOfExecution = ({ timesOfExecution, setTimesOfExecution}) => (
  <div className="form-group col-xs-6">
    <label id="times" htmlFor="timesInput">Πλήθος εκτελέσεων</label>
    <input
      id="timesInput"
      className={`form-control ${_.isEmpty(timesOfExecution) || timesOfExecution.correct ? "" : "notValid"}`}
      value={_.isEmpty(timesOfExecution) ? '' : timesOfExecution.value}
      onChange={(e) => setTimesOfExecution(e.target.value)}
     />
  </div>
)

export default SelectTimesOfExecution
