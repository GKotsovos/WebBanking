import React from 'react';
import FontAwesome from 'react-fontawesome'
import './LinkedProducts.css';

export const LinkedProducts = () => (
  <div role="tabpanel" className="tab-pane" id="cardProducts">
    <table id="linkedProductsTable" className="table">
      <thead>
        <tr id="tableHead" className="titles">
          <th className="col-xs-2 text-center">Προϊόν</th>
          <th className="col-xs-4 text-center">Αριθμός Προϊόντος</th>
          <th className="col-xs-2 text-center">Υπόλοιπο</th>
          <th className="col-xs-1 text-center"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="cell col-xs-2 text-center">Καταθετικός</td>
          <td className="cell col-xs-4 text-center">09237465820</td>
          <td className="cell col-xs-2 text-center">250,00€</td>
          <td className="cell col-xs-1 text-center"><FontAwesome className="xIcon" name="times"/></td>
        </tr>
        <tr>
          <td className="cell col-xs-2 text-center">Μισθοδοσίας</td>
          <td className="cell col-xs-4 text-center">09237465820</td>
          <td className="cell col-xs-2 text-center">500,00€</td>
          <td className="cell col-xs-1 text-center"><FontAwesome className="xIcon" name="times"/></td>
        </tr>
        <tr>
          <td className="cell col-xs-2 text-center">Δάνειο</td>
          <td className="cell col-xs-4 text-center">09237465820</td>
          <td className="cell col-xs-2 text-center">1200,00€</td>
          <td className="cell col-xs-1 text-center"><FontAwesome className="xIcon" name="times"/></td>
        </tr>
      </tbody>
    </table>
  </div>
)

export default LinkedProducts
