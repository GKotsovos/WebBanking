import React from 'react';
import './OrganizationOrder.css';

export const OrganizationOrder = () => (
  <div className="panel panel-default accountContainer">
    <div className="organizationTitle panel-heading">
      <h3 className="panel-title">
        <span className="titles">Cosmote Κινητή</span>
        <span className="titles orderCode">00000001318571331010</span>
      </h3>
    </div>

    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-6 text-right idOrder">GR2201100470000009237465820</span>
          <span className="col-xs-3 text-right">1/1/2021</span>
          <span className="col-xs-3 text-right">Ενεργή</span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Λογαριασμός Χρέωσης</span>
          <span className="col-xs-3 text-right">Ημ/νία Λήξης</span>
          <span className="col-xs-3 text-right">Κατάσταση</span>
        </span>
      </div>
      <div className="row secondRow">
        <span>
          <span className="col-xs-6 text-right">250,00€</span>
          <span className="col-xs-offset-2 col-xs-4 text-right">28/1/2017</span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Ανώτατο ποσό χρέωσης</span>
          <span className="col-xs-6 text-right">Ημ/νία τελευταίας εκτέλεσης</span>
        </span>
      </div>
      <button className="btn btn-default orderCancel">Ακύρωση</button>
    </div>
  </div>
)

export default OrganizationOrder
