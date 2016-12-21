import React from 'react';
import './MovementsHistory.css';

export const MovementsHistory = () => (
  <div role="tabpanel" className="tab-pane active" id="history">
    <table id="movementsTable" className="table">
      <thead>
        <tr id="tableHead" className="titles">
          <th className="col-sm-2 text-center">Ημ/νια Συνναλαγής</th>
          <th className="col-sm-2 text-center">Περιγραφή Συναλλαγής</th>
          <th className="col-sm-6 text-center">Δικαιούχος</th>
          <th className="col-sm-2">Ποσό</th>
          <th className="col-sm-2">Λογιστικό Υπόλοιπο</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="cell col-sm-2 text-center">10/11/2016</td>
          <td className="cell col-sm-2 text-center">ΠΛΗΡΩΜΗ</td>
          <td className="cell col-sm-6 text-center">VODAFONE BILLING</td>
          <td className="cell col-sm-2">25,00€</td>
          <td className="cell col-sm-2">475,57€</td>
        </tr>
        <tr>
          <td className="cell col-sm-2 text-center">15/11/2016</td>
          <td className="cell col-sm-2 text-center">ΑΤΜ-ΑΝΑΛΗΨΗ</td>
          <td className="cell col-sm-6 text-center">ATM AB5511</td>
          <td className="cell col-sm-2">50,00€</td>
          <td className="cell col-sm-2">252,27€</td>
        </tr>
        <tr>
          <td className="cell col-sm-2 text-center">27/11/2016</td>
          <td className="cell col-sm-2 text-center">ΑΤΜ-ΑΝΑΛΗΨΗ</td>
          <td className="cell col-sm-6 text-center">ATM AB5547</td>
          <td className="cell col-sm-2">50,00€</td>
          <td className="cell col-sm-2">575,57€</td>
        </tr>
        <tr>
          <td className="cell col-sm-2 text-center">31/11/2016</td>
          <td className="cell col-sm-2 text-center">ΜΙΣΘΟΔΟΣΙΑ</td>
          <td className="cell col-sm-6 text-center">AGILE ACTORS IKE</td>
          <td className="cell col-sm-2">5000,00€</td>
          <td className="cell col-sm-2">5600,25€</td>
        </tr>
        <tr>
          <td className="cell col-sm-2 text-center">11/12/2016</td>
          <td className="cell col-sm-2 text-center">ΠΛΗΡΩΜΗ</td>
          <td className="cell col-sm-6 text-center">PAYPAL *UDEMY</td>
          <td className="cell col-sm-2">24,68€</td>
          <td className="cell col-sm-2">600,25€</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default MovementsHistory
