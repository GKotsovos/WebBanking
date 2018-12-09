import React from 'react'
import _ from 'underscore';
import localizationText from './localizationText';

export const SelectTimesOfExecution = ({ timesOfExecution, language, setTimesOfExecution}) => (
  <div className="form-group col-xs-6">
    <label id="times" htmlFor="timesInput">{localizationText[language].executionsLabel}</label>
    <input
      id="timesInput"
      className={`form-control ${_.isEmpty(timesOfExecution) || timesOfExecution.correct ? "" : "notValid"}`}
      value={_.isEmpty(timesOfExecution) ? '' : timesOfExecution.value}
      onChange={(e) => setTimesOfExecution(e.target.value)}
     />
  </div>
)

export default SelectTimesOfExecution
