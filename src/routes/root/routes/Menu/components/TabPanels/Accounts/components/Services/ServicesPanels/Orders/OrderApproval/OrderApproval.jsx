import React from 'react';
import './OrderApproval.css';

export const OrderApproval = () => (
  <form id="orderApprovalForm" className="col-sm-offset-2 col-sm-8">

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
            <td className="titleCell col-sm-5 text-right">Καθαρό ποσό εντολής</td>
            <td className="cell col-sm-4 text-center">250,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Χρέωση εντολής</td>
            <td className="cell col-sm-4 text-center">0,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Σύνολο χρέωσης εντολής</td>
            <td className="cell col-sm-4 text-center">250,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Ημερομηνία ενεργοποίησης</td>
            <td className="cell col-sm-4 text-center">29/12/2016</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Περιοδικότητα</td>
            <td className="cell col-sm-4 text-center">Κάθε μήνα</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Πλήθος εκτελέσεων</td>
            <td className="cell col-sm-4 text-center">12</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Σχόλια</td>
            <td className="cell col-sm-4 text-center">Αποταμίευση</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="orderApprovalFormButtons">
      <button id="previousOrderForm" type="button" className="btn btn-default">Επιστροφή</button>
      <button id="submitOrderApprovalForm" type="submit" className="btn btn-default">Επιβεβαίωση</button>
    </div>

  </form>
)

export default orderApproval
