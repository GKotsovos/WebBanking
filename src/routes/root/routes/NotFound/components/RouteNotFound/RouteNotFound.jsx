import React from 'react';
import { browserHistory } from 'react-router'
import './RouteNotFound.css';

export const RouteNotFound = () => (
  <div>
    {browserHistory.push('/')}
  </div>
)

export default RouteNotFound
