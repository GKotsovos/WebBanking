import React from 'react';
import './ExistingAccountOrder.css';

export const ExistingAccountOrder = ({ key, accountOrder, cancelOrder }) => (
  <div className="panel panel-default accountContainer">
    <ExistingOrderTitle
      orderTitle={accountOrder.orderTitle}
      orderTo={accountOrder.orderTo}
    />
    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-6 text-right idOrder">{accountOrder.debitAccount}</span>
          <span className="col-xs-3 text-right">{order.amount}</span>
          <span className="col-xs-3 text-right">{order.nextExecutionDate}</span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Λογαριασμός Πίστωσης</span>
          <span className="col-xs-3 text-right">Ποσό</span>
          <span className="col-xs-3 text-right">Ημ/νία Εκτέλεσης</span>
        </span>
      </div>
      <div className="row secondRow">
        <span>
          <span className="col-xs-6 text-right">{order.executionFrequency}</span>
          <span className="col-xs-6 text-right">{order.executionsLeft}</span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Περιοδικότητα Εκτέλεσης</span>
          <span className="col-xs-6 text-right">Εναπομείναντες Εκτελέσεις</span>
        </span>
      </div>
      <button
        className="btn btn-default orderCancel"
        onClick={() => cancelOrder(key)}>
        Ακύρωση
      </button>
    </div>
  </div>
)

export default ExistingAccountOrder
