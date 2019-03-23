import React from 'react';
import DeleteLinkedProduct from '../../containers/DeleteLinkedProductContainer';
import currencyFormatter from 'currency-formatter';
import localizationText from './localizationText';

export const LinkedProductsLayout = ({
  debitCardId,
  linkedProducts,
  language,
}) => (
  <div role="tabpanel" className="tab-pane" id="cardProducts">
    <table id="linkedProductsTable" className="table linked-products-table">
      <thead className="common-table-header common-title">
        <tr className>
          <th className="col-xs-2 text-center">{localizationText[language].productHeader}</th>
          <th className="col-xs-4 text-center">{localizationText[language].productNumber}</th>
          <th className="col-xs-2 text-center">{localizationText[language].balance}</th>
          <th className="col-xs-1 text-center"></th>
        </tr>
      </thead>
      <tbody>
        {
          linkedProducts && linkedProducts.map((linkedProduct, key) => linkedProduct ? [
            <tr key={key}>
              <td key={key++} className="common-table-cell col-xs-2 text-center">{linkedProduct.type}</td>
              <td key={key++} className="common-table-cell col-xs-4 text-center">{linkedProduct.id}</td>
              <td key={key++} className="common-table-cell col-xs-2 text-center">
                {linkedProduct.ledgerBalance.toLocaleString('el-GR', {minimumFractionDigits: 2})}
                {currencyFormatter.findCurrency(linkedProduct.currency).symbol}
              </td>
              <td key={key++} className="common-table-cell col-xs-1 text-center">
                <DeleteLinkedProduct
                  key={key++}
                  debitCardId={debitCardId}
                  linkedProductId={linkedProduct.id}
                />
              </td>
            </tr>
          ]: [])
        }
      </tbody>
    </table>
  </div>
)

export default LinkedProductsLayout
