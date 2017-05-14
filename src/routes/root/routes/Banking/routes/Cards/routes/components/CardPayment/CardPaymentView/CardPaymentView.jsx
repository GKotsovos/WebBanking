import React from 'react';
import CardPaymentForm from '../CardPaymentForm';
import CardPaymentApproval from '../CardPaymentApproval'
import CardPaymentResult from '../CardPaymentResult'
import './CardPaymentLayout.css';

export const CardPaymentLayout = () => (
  <div role="tabpanel" className="tab-pane" id="cardPayment">
    <CardPaymentForm />
    {/* <CardPaymentApproval /> */}
    {/* <CardPaymentResult /> */}
  </div>
)

export default CardPaymentLayout
