import React from 'react';
import dateformat from 'dateformat';
import currencyFormatter from 'currency-formatter';
import ExistingOrderTitle from '../../../components/ExistingOrderTitle';
import CancelOrderButton from '../../../components/CancelOrderButton';
import './ExistingPaymentOrder.css';

export const ExistingPaymentOrder = ({ paymentOrder, cancelPaymentOrder }) => (
  <div className="panel panel-default existingOrderContainer">
    <ExistingOrderTitle
      orderTitle={paymentOrder.paymentMethod}
      orderTo={paymentOrder.paymentCode}
    />
    <div className="panel-body existingOrderPanelBody">
      <div className="row">
        <span>
          <span className="col-xs-6 text-right orderDetails">
            {paymentOrder.debitProductId}
          </span>
          <span className="col-xs-3 text-right orderDetails">
            {dateformat(paymentOrder.expirationDate, 'dd/mm/yyyy')}
          </span>
          <span className="col-xs-3 text-right orderDetails">
            {paymentOrder.state ? 'Ενεργή' : 'Ανενεργή'}
          </span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Λογαριασμός Χρέωσης</span>
          <span className="col-xs-3 text-right">Ημ/νία Λήξης</span>
          <span className="col-xs-3 text-right">Κατάσταση</span>
        </span>
      </div>
      <div className="row secondRow">
        <span>
          <span className="col-xs-6 text-right orderDetails">
            {paymentOrder.maxPaymentAmount.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
            {currencyFormatter.findCurrency(paymentOrder.currency).symbol}
          </span>
          <span className="col-xs-offset-2 col-xs-4 text-right orderDetails">
            {dateformat(paymentOrder.lastExecutionDate, 'dd/mm/yyyy')}
          </span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Ανώτατο ποσό χρέωσης</span>
          <span className="col-xs-6 text-right">Ημ/νία τελευταίας εκτέλεσης</span>
        </span>
      </div>
      <CancelOrderButton
        orderName={paymentOrder.paymentMethod}
        orderId={paymentOrder.id}
        cancelOrder={cancelPaymentOrder}
      />
    </div>
  </div>
)

export default ExistingPaymentOrder
