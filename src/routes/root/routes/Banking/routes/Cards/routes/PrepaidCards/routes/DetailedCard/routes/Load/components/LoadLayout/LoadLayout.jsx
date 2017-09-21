import React, { Component, PropTypes } from 'react';
import './LoadLayout.css';

export const LoadLayout = ({ children }) => (
  <div role="tabpanel" className="loadContainer tab-pane" id="load">
    {children}
  </div>
)

export default LoadLayout
