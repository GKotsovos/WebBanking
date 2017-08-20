import React, { Component, PropTypes } from 'react';
import _ from 'underscore';
import './TransfersLayout.css';

export const TransfersLayout = ({ children }) => (
  <div role="tabpanel" className="tab-pane" id="transfers">
    {children}
  </div>
)

export default TransfersLayout
