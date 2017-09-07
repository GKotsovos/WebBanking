import React from 'react';
import ExistingOrderTitle from '../../../components/ExisringOrderTitle'
import './ExistingOrganizationOrder.css';

export const ExistingOrganizationOrder = ({ key, accountOrder, cancelOrder }) => (
  <div className="panel panel-default accountContainer">
    <ExistingOrderTitle
      orderTitle={organizationOrder.orderTitle}
      orderTo={organizationOrder.orderTo}
    />
    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-6 text-right idOrder">{organizationOrder.debitAccount}</span>
          <span className="col-xs-3 text-right">{organizationOrder.nextExecutionDate}</span>
          <span className="col-xs-3 text-right">{organizationOrder.status}</span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Λογαριασμός Χρέωσης</span>
          <span className="col-xs-3 text-right">Ημ/νία Λήξης</span>
          <span className="col-xs-3 text-right">Κατάσταση</span>
        </span>
      </div>
      <div className="row secondRow">
        <span>
          <span className="col-xs-6 text-right">{organizationOrder.maxDebitAmount}</span>
          <span className="col-xs-offset-2 col-xs-4 text-right">{organizationOrder.expirationDate}</span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Ανώτατο ποσό χρέωσης</span>
          <span className="col-xs-6 text-right">Ημ/νία τελευταίας εκτέλεσης</span>
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

export default ExistingOrganizationOrder
