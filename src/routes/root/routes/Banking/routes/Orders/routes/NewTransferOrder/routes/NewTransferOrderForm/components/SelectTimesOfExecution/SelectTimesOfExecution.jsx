import React from 'react'
import { isEmpty } from 'underscore';
import localizationText from './localizationText';

export const SelectTimesOfExecution = ({ timesOfExecution, language, setTimesOfExecution}) => (
  <div className="form-group col-xs-6">
    <label htmlFor="times-of-execution">{localizationText[language].executionsLabel}</label>
    <input
      id="times-of-execution"
      className={`form-control ${isEmpty(timesOfExecution) || timesOfExecution.correct ? "" : "invalid-value"}`}
      value={isEmpty(timesOfExecution) ? '' : timesOfExecution.value}
      onChange={(e) => setTimesOfExecution(e.target.value)}
     />
  </div>
)

export default SelectTimesOfExecution
