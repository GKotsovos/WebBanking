import React from 'react';
import SelectTimesOfExecution from '../SelectTimesOfExecution';
import SelectPeriodicity from '../SelectPeriodicity';
import './SelectPeriodicityAndTimesOfExecution.css';

export const SelectPeriodicityAndTimesOfExecution = ({
  periodicity,
  setPeriodicity,
  timesOfExecution,
  setTimesOfExecution,
}) => (
  <div className="row">
    <div className="col-xs-12">
      <SelectPeriodicity
        periodicity={periodicity}
        setPeriodicity={setPeriodicity}
      />
      <SelectTimesOfExecution
        timesOfExecution={timesOfExecution}
        setTimesOfExecution={setTimesOfExecution}
      />
    </div>
  </div>
)

export default SelectPeriodicityAndTimesOfExecution
