import React from 'react';
import TransactionApprovalButtons from 'routes/root/routes/Banking/routes/components/TransactionApprovalButtons';
import './LoadApproval.css';

export const LoadApproval = () => (
  <form id="loadApprovalForm" className="col-sm-offset-2 col-sm-8">

    <div id="loadApprovalTable" className="form-group">
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
            <td className="titleCell col-sm-5 text-right">Ποσό φόρτισης</td>
            <td className="cell col-sm-4 text-center">250,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Έξοδα φόρτισης</td>
            <td className="cell col-sm-4 text-center">0,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Σύνολο χρέωσης λογαριασμού</td>
            <td className="cell col-sm-4 text-center">250,00€</td>
          </tr>
          <tr>
            <td className="titleCell col-sm-5 text-right">Ημερομηνία εκτέλεσης</td>
            <td className="cell col-sm-4 text-center">15/12/2016</td>
          </tr>
        </tbody>
      </table>
    </div>

    <TransactionApprovalButtons />

  </form>
)

export default LoadApproval
