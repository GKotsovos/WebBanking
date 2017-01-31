import React from 'react';
import './TransferApproval.css';

export const TransferApproval = () => (
  <form id="transferApprovalForm" className="col-sm-offset-2 col-sm-8">

    <div id="transferApprovalTable" className="form-group">
      <table className="table table-bordered">
        <thead>
          <tr id="tableHead" className="titles">
            <th colSpan="3" className="text-center">Στοιχεία Εμβάσματος</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="titleCell col-sm-5 text-right">Λογαριασμός χρέωσης</td>
            <td className="cell col-sm-4 text-center">GR2201100470000009237465820</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Λογαριασμός πίστωσης</td>
            <td className="cell col-sm-4 text-center">GR2201100470000009256765829</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Όνομα δικαιούχου</td>
            <td className="cell col-sm-4 text-center">Μαρία Κοτσοβού</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Τράπεζα</td>
            <td className="cell col-sm-4 text-center">Agile Bank</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Καθαρό ποσό εμβάσματος</td>
            <td className="cell col-sm-4 text-center">250,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Έξοδα εμβάσματος</td>
            <td className="cell col-sm-4 text-center">0,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Σύνολο χρέωσης λογαριασμού</td>
            <td className="cell col-sm-4 text-center">250,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Λογιστικό υπόλοιπο λογαριασμού</td>
            <td className="cell col-sm-4 text-center">5200,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Ημερομηνία συναλλαγής</td>
            <td className="cell col-sm-4 text-center">29/12/2016</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Σχόλια</td>
            <td className="cell col-sm-4 text-center">Δανεικά</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="transferApprovalFormButtons">
      <button id="previousTransferForm" type="button" className="btn btn-default">Επιστροφή</button>
      <button id="submitTransferApprovalForm" type="submit" className="btn btn-default">Επιβεβαίωση</button>
    </div>

  </form>
)

export default TransferApproval
