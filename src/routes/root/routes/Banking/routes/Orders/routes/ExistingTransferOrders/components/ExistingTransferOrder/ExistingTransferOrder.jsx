import React from 'react';
import dateformat from 'dateformat';
import currencyFormatter from 'currency-formatter';
import ExistingOrderTitle from '../../../components/ExistingOrderTitle';
import './ExistingTransferOrder.css';

export const ExistingTransferOrder = ({ transferOrder, cancelTransferOrder }) => (
  <div className="panel panel-default existingOrderContainer">
    <ExistingOrderTitle
      orderTitle={transferOrder.customTitle}
      orderTo={transferOrder.creditProductId}
    />
    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-6 text-right idOrder">
            {transferOrder.debitProductId}
          </span>
          <span className="col-xs-2 text-right">
            {transferOrder.amount.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
            {currencyFormatter.findCurrency(transferOrder.currency).symbol}
          </span>
          <span className="col-xs-4 text-right">
            {dateformat(transferOrder.nextExecutionDate, 'dd/mm/yyyy')}
          </span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Λογαριασμός Πίστωσης</span>
          <span className="col-xs-2 text-right">Ποσό</span>
          <span className="col-xs-4 text-right">Ημ/νία Επόμενης Εκτέλεσης</span>
        </span>
      </div>
      <div className="row secondRow">
        <span>
          <span className="col-xs-6 text-right">{transferOrder.executionFrequency}</span>
          <span className="col-xs-6 text-right">{transferOrder.executionsLeft}</span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Περιοδικότητα Εκτέλεσης</span>
          <span className="col-xs-6 text-right">Εναπομείναντες Εκτελέσεις</span>
        </span>
      </div>
      <button
        className="btn btn-default orderCancel"
        onClick={() => cancelTransferOrder(transferOrder.id)}>
        Ακύρωση
      </button>
    </div>
  </div>
)

export default ExistingTransferOrder
