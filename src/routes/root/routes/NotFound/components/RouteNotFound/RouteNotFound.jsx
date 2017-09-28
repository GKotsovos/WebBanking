import React from 'react';
import { browserHistory } from 'react-router'
import cookie from 'react-cookie';

export const RouteNotFound = () => (
  <div>
    {
      cookie.remove('access_token'),
      browserHistory.push('/')
    }
  </div>
)

export default RouteNotFound
