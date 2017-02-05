import React from 'react';
import './CardPaymentApproval.css';

export const CardPaymentApproval = () => (
  <form id="cardPaymentApprovalForm" className="col-sm-offset-2 col-sm-8">

    <div id="cardPaymentApprovalTable" className="form-group">
      <table className="table table-bordered">
        <thead>
          <tr id="tableHead" className="titles">
            <th colSpan="3" className="text-center">Στοιχεία Πληρωμής</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="titleCell col-sm-5 text-right">Λογαριασμός χρέωσης</td>
            <td className="cell col-sm-4 text-center">GR2201100470000009237465820</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Ποσό πληρωμής</td>
            <td className="cell col-sm-4 text-center">250,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Έξοδα πληρωμής</td>
            <td className="cell col-sm-4 text-center">0,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Σύνολο χρέωσης λογαριασμού</td>
            <td className="cell col-sm-4 text-center">250,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Ημερομηνία εκτέλεσης</td>
            <td className="cell col-sm-4 text-center">29/12/2016</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div id="cardPaymentApprovalFormButtons">
      <button id="previousPaymentForm" type="button" className="btn btn-default">Επιστροφή</button>
      <button id="submitCardPaymentApprovalForm" type="submit" className="btn btn-default">Επιβεβαίωση</button>
    </div>

  </form>
)

export default CardPaymentApproval
