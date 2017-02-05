import React from 'react';
import './OrganizationApproval.css';

export const OrganizationApproval = () => (
  <div id="orderApprovalTable" className="form-group">
    <table className="table table-bordered">
      <thead>
        <tr id="tableHead" className="titles">
          <th colSpan="3" className="text-center">Στοιχεία Πάγιας Εντολής</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="titleCell col-sm-5 text-right">Λογαριασμός χρέωσης</td>
          <td className="cell col-sm-4 text-center">GR2201100470000009237465820</td>
        </tr>
        <tr>
          <td className="titleCell col-sm-5 text-right">Όνομα οργανισμού</td>
          <td className="cell col-sm-4 text-center">Cosmote</td>
        </tr>
        <tr>
          <td className="titleCell col-sm-5 text-right">Έξοδα εντολής</td>
          <td className="cell col-sm-4 text-center">0,00€</td>
        </tr>
        <tr>
          <td className="titleCell col-sm-5 text-right">Ημερομηνία λήξης</td>
          <td className="cell col-sm-4 text-center">29/12/2018</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default OrganizationApproval
