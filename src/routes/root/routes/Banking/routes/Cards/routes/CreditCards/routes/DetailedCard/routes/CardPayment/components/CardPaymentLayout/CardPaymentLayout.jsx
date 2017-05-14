import React, { Component, PropTypes } from 'react';
import './CardPaymentLayout.css';

export const CardPaymentLayout = ({ children }) => (
  <div role="tabpanel" className="tab-pane" id="cardPayment">
    {children}
  </div>
)

export default CardPaymentLayout
