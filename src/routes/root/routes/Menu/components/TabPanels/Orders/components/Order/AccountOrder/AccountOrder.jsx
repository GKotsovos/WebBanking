import React from 'react';
import './AccountOrder.css';

export const AccountOrder = () => (
  <div className="panel panel-default accountContainer">
    <div id="accountTitle" className="panel-heading">
      <h3 className="panel-title">
        <span className="titles">Αποταμίευση</span>
        <span className="titles" id="IBAN">
          GR2201100470000009237465820
        </span>
      </h3>
    </div>

    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-7 text-right ibanOrder">GR2201100470000009237465820</span>
          <span className="col-xs-2 text-right">100,00€</span>
          <span className="col-xs-3 text-right">3/2/2017</span>
        </span>
        <span className="summary">
          <span className="col-xs-7 text-right">Λογαριασμός Πίστωσης</span>
          <span className="col-xs-2 text-right">Ποσό</span>
          <span className="col-xs-offset-1 col-xs-2 text-right">Ημ/νία Εκτέλεσης</span>
        </span>
      </div>
      <div className="row secondRow">
        <span>
          <span className="col-xs-6 text-right">Κάθε μήνα</span>
          <span className="col-xs-6 text-right">4</span>
        </span>
        <span className="summary">
          <span className="col-xs-6 text-right">Περιοδικότητα Εκτέλεσης</span>
          <span className="col-xs-6 text-right">Εναπομείναντες Εκτελέσεις</span>
        </span>
      </div>
      <button className="btn btn-default orderCancel">Ακύρωση</button>
    </div>
  </div>
)

export default AccountOrder
