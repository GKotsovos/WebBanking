import React from 'react';
import Success from '../Success'
import Failure from '../Failure'
import './Result.css';

export const Result = () => (
  <div className="resultContainer" id="OrderResult">
    <Success />
    {/* <Failure /> */}
  </div>
)

export default Result
