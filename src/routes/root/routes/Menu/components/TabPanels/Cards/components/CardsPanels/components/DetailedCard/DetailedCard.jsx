import React from 'react';
import './DetailedCard.css';

export const DetailedCard = () => (
  <div className="panel panel-default detailedCardContainer">
    <div className="cardTitle panel-heading">
      <h3 className="panel-title">
        <span className="titles">DEBIT MASTERCARD</span>
        <span className="titles" id="cardNumber">
          5351 5452 1425 9685
        </span>
      </h3>
    </div>

    <div className="panel-body">
      <span className="row">
        <span className="col-xs-3 col-sm-3 text-right">800,00€</span>
        <span className="col-xs-4 col-sm-4 text-right">800,00€</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">500,25€</span>
      </span>
      <span className="row cardSummary">
        <span className="col-xs-3 col-sm-3 text-right">Ημερήσιο Όριο</span>
        <span className="col-xs-4 col-sm-4 text-right">Διαθέσιμο Όριο</span>
        <span className="col-xs-offset-1 col-xs-4 text-right">Λογιστικό Υπόλοιπο</span>
      </span>
    </div>

    <ul className="list-group">
      <li className="list-group-item">
        <span className="row">
          <span className="col-xs-3 col-sm-3 text-right">20/12/2016</span>
          <span className="col-xs-4 col-sm-4 text-right">20/12/2021</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">Ενεργή</span>
        </span>
        <span className="row cardSummary">
          <span className="col-xs-3 col-sm-3 text-right">Ημ/νία Έκδοσης</span>
          <span className="col-xs-4 col-sm-4 text-right">Ημ/νία Λήξης</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">Κατάσταση</span>
        </span>
      </li>
    </ul>

    <ul className="list-group">
      <li className="list-group-item">
        <span className="row">
          <span className="col-xs-3 col-sm-3 text-right">85,25€</span>
          <span className="col-xs-4 col-sm-4 text-right">85,25€</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">28/2/2017</span>
        </span>
        <span className="row cardSummary">
          <span className="col-xs-3 col-sm-3 text-right">Σύνολο οφειλών</span>
          <span className="col-xs-4 col-sm-4 text-right">Τρέχων οφειλή</span>
          <span className="col-xs-offset-1 col-xs-4 text-right">Ημ/νία οφειλής</span>
        </span>
      </li>
    </ul>
    
  </div>
)

export default DetailedCard
