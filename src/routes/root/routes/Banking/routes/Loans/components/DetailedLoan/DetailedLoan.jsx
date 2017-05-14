import React from 'react';
import './DetailedLoan.css';

export const DetailedLoan = () => (
  <div className="panel panel-default detailedLoanContainer">
    <div className="panel-heading loanTitle">
      <h3 className="panel-title">
        <span className="titles">(€) Δάνειο σπιτιού</span>
        <span className="titles loanCode">101A0C0D0A0B7D4</span>
      </h3>
    </div>

    <div className="panel-body">
      <div className="row">
        <span>
          <span className="col-xs-3 text-right">Στεγαστικό</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">100.000,00€</span>
          <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">25.600,00€</span>
        </span>
        <span className="summary">
          <span className="col-xs-3 text-right">Τύπος Δανείου</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">Αρχικό Ποσό</span>
          <span className="col-xs-offset-1 col-xs-3 text-right">Λογιστικό Υπόλοιπο</span>
        </span>
      </div>
    </div>

    <ul className="list-group">
      <li className="cellRow list-group-item">
        <div className="row">
          <span>
            <span className="col-xs-3 text-right">450,00€</span>
            <span className="col-xs-offset-1 col-xs-4 text-right">450,00€</span>
            <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">28/2/2017</span>
          </span>
          <span className="summary">
            <span className="col-xs-3 text-right">Τρέχων Δόση</span>
            <span className="col-xs-offset-1 col-xs-4 text-right">Σύνολο Οφειλών</span>
            <span className="col-xs-offset-1 col-xs-3 text-right">Ημ/νία Δόσης</span>
          </span>
        </div>
      </li>
    </ul>

    <ul className="list-group">
      <li className="cellRow list-group-item">
        <div className="row">
          <span>
            <span className="col-xs-3 text-right">1/12/2012</span>
            <span className="col-xs-offset-1 col-xs-4 text-right">1/12/2032</span>
            <span className="col-sm-offset-1 col-xs-4 col-sm-3 text-right">78.750,00€</span>
          </span>
          <span className="summary">
            <span className="col-xs-3 text-right">Ημ/νία Έκδοσης</span>
            <span className="col-xs-offset-1 col-xs-4 text-right">Ημ/νία Αποπληρωμής</span>
            <span className="col-xs-4 text-right">Υπόλοιπο Αποπληρωμής</span>
          </span>
        </div>
      </li>
    </ul>
  </div>
)

export default DetailedLoan
