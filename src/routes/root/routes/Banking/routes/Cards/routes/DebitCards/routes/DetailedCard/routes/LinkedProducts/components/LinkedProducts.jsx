import React from 'react';
import FontAwesome from 'react-fontawesome';
import currencyFormatter from 'currency-formatter';
import _ from 'underscore';
import './LinkedProducts.css';

export const LinkedProducts = ({ linkedProducts, deleteLinkedProduct }) => (
  <div role="tabpanel" className="tab-pane" id="cardProducts">
    <table id="linkedProductsTable" className="table">
      <thead>
        <tr className="tableHead titles">
          <th className="col-xs-2 text-center">Προϊόν</th>
          <th className="col-xs-4 text-center">Αριθμός Προϊόντος</th>
          <th className="col-xs-2 text-center">Υπόλοιπο</th>
          <th className="col-xs-1 text-center"></th>
        </tr>
      </thead>
      <tbody>
        {
          _.map(linkedProducts, (linkedProduct) => linkedProduct ? [
            <tr>
              <td className="cell col-xs-2 text-center">{linkedProduct.type}</td>
              <td className="cell col-xs-4 text-center">{linkedProduct.iban}</td>
              <td className="cell col-xs-2 text-center">
                {linkedProduct.ledgerBalance.toLocaleString('gr-GR', {minimumFractionDigits: 2})}
                {currencyFormatter.findCurrency(linkedProduct.currency).symbol}
              </td>
              <td className="cell col-xs-1 text-center">
                <FontAwesome className="xIcon" name="times" onClick={() => deleteLinkedProduct(linkedProduct.iban)}/>
              </td>
            </tr>
          ]: [])
        }
      </tbody>
    </table>
  </div>
)

export default LinkedProducts
