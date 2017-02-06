import React from 'react';
import Success from '../Success'
import Failure from '../Failure'
import './Result.css';

export const Result = () => (
  <div className="paymentContainer" id="Result">
    <Success />
    {/* <Failure /> */}
  </div>
)

export default Result
