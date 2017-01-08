import React from 'react';
import './Card.css';

export const Card = () => (
  <div className="panel panel-default cardContainer">
    <div id="cardTitle" className="panel-heading">
      <h3 className="panel-title">
        <span className="titles">DEBIT MASTERCARD</span>
        <span className="titles" id="cardNumber">
          5351 5452 1425 9685
        </span>
      </h3>
    </div>
    <div className="panel-body">
      <span className="row">
        <span className="col-xs-3 col-sm-2 text-right">800,00€</span>
        <span className="col-xs-4 col-sm-5 text-right">800,00€</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">500,25€</span>
      </span>
      <span className="row cardSummary">
        <span className="col-xs-3 col-sm-2 text-right">Ημερήσιο Όριο</span>
        <span className="col-xs-4 col-sm-5 text-right">Διαθέσιμο Όριο</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">Λογιστικό Υπόλοιπο</span>
      </span>
    </div>
  </div>
)

export default Card
