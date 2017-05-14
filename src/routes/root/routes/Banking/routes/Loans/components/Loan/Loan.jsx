import React from 'react';
import './Loan.css';

export const Loan = () => (
  <div className="panel panel-default loanContainer">
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
  </div>
)

export default Loan
