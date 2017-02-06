import React from 'react';
import CardPayment from '../CardPayment';
import CardPaymentApproval from '../CardPaymentApproval'
import CardPaymentResult from '../CardPaymentResult'
import './CardPaymentView.css';

export const CardPaymentView = () => (
  <div role="tabpanel" className="tab-pane" id="cardPayment">
    <CardPayment />
    {/* <CardPaymentApproval /> */}
    {/* <CardPaymentResult /> */}
  </div>
)

export default CardPaymentView
