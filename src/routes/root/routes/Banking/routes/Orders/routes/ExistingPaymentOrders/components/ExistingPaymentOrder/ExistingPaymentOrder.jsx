import React from 'react';
import dateformat from 'dateformat';
import currencyFormatter from 'currency-formatter';
import ExistingOrderTitle from '../../../components/ExistingOrderTitle';
import CancelOrderButton from '../../../components/CancelOrderButton';
import localizationText from './localizationText';
import './ExistingPaymentOrder.css';

export const ExistingPaymentOrder = ({ paymentOrder, language, cancelPaymentOrder }) => (
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
            {paymentOrder.state ? localizationText[language].active : localizationText[language].inactive}
          </span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">{localizationText[language].debitAccount}</span>
          <span className="col-xs-3 text-right">{localizationText[language].expirationDate}</span>
          <span className="col-xs-3 text-right">{localizationText[language].state}</span>
        </span>
      </div>
      <div className="row secondRow">
        <span>
          <span className="col-xs-6 text-right orderDetails">
            {paymentOrder.maxPaymentAmount.toLocaleString('el-GR', {minimumFractionDigits: 2})}
            {currencyFormatter.findCurrency(paymentOrder.currency).symbol}
          </span>
          <span className="col-xs-offset-2 col-xs-4 text-right orderDetails">
            {dateformat(paymentOrder.lastExecutionDate, 'dd/mm/yyyy')}
          </span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">{localizationText[language].maxPaymentAmount}</span>
          <span className="col-xs-6 text-right">{localizationText[language].previousExecutionDate}</span>
        </span>
      </div>
      <CancelOrderButton
        orderName={paymentOrder.paymentMethod}
        orderId={paymentOrder.id}
        language={language}
        cancelOrder={cancelPaymentOrder}
      />
    </div>
  </div>
)

export default ExistingPaymentOrder
