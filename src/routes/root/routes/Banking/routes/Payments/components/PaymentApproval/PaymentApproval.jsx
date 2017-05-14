import React from 'react';
import TransactionApprovalButtons from '../../../components/TransactionApprovalButtons';
import './PaymentApproval.css';

export const PaymentApproval = () => (
  <form id="paymentApprovalForm">

    <div id="paymentApprovalTable" className="form-group">
      <table className="table table-bordered">
        <thead>
          <tr className="tableHead titles">
            <th colSpan="3" className="text-center">Στοιχεία Πληρωμής</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="titleCell col-sm-5 text-right">Λογαριασμός χρέωσης</td>
            <td className="cell col-sm-4 text-center">GR2201100470000009237465820</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Κωδικός πληρωμής</td>
            <td className="cell col-sm-4 text-center">00000001318571331010</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Όνομα οργανισμού</td>
            <td className="cell col-sm-4 text-center">Cosmote</td>
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

    <TransactionApprovalButtons />

  </form>
)

export default PaymentApproval
