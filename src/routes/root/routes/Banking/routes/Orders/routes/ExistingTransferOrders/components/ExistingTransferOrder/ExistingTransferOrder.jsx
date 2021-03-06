import React from 'react';
import dateformat from 'dateformat';
import currencyFormatter from 'currency-formatter';
import ExistingOrderTitle from '../../../components/ExistingOrderTitle';
import CancelOrderButton from '../../../components/CancelOrderButton';
import localizationText from './localizationText';

export const ExistingTransferOrder = ({ transferOrder, language, cancelTransferOrder }) => (
  <div className="panel panel-default existing-order-container">
    <ExistingOrderTitle
      orderTitle={transferOrder.customTitle}
      orderTo={transferOrder.creditProductId}
    />
    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-6 text-right existing-transfer-order__debit-product-id">
            {transferOrder.debitProductId}
          </span>
          <span className="col-xs-2 text-right">
            {transferOrder.amount.toLocaleString('el-GR', {minimumFractionDigits: 2})}
            {currencyFormatter.findCurrency(transferOrder.currency).symbol}
          </span>
          <span className="col-xs-4 text-right">
            {dateformat(transferOrder.nextExecutionDate, 'dd/mm/yyyy')}
          </span>
        </span>
        <span className="common-label">
          <span className="col-xs-6 text-right">{localizationText[language].debitAccount}</span>
          <span className="col-xs-2 text-right">{localizationText[language].amount}</span>
          <span className="col-xs-4 text-right">{localizationText[language].nextExecutionDate}</span>
        </span>
      </div>
      <div className="row existing-order__second-row">
        <span>
          <span className="col-xs-6 text-right">{transferOrder.executionFrequency}</span>
          <span className="col-xs-6 text-right">{transferOrder.executionsLeft}</span>
        </span>
        <span className="common-label">
          <span className="col-xs-6 text-right">{localizationText[language].executionFrequency}</span>
          <span className="col-xs-6 text-right">{localizationText[language].executionsLeft}</span>
        </span>
      </div>
      <CancelOrderButton
        orderName={transferOrder.customTitle}
        orderId={transferOrder.id}
        language={language}
        cancelOrder={cancelTransferOrder}
      />
    </div>
  </div>
)

export default ExistingTransferOrder
