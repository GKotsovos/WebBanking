import React from 'react'
import currencyFormatter from 'currency-formatter';

export const MoneyTransactionApprovalRow = ({ title, amount, currency }) => (
  <tr>
    <td className="common-table-cell common-table-cell--bold col-sm-5 text-right">{title}</td>
    <td className="common-table-cell col-sm-4 text-center">
      {Number(amount).toLocaleString('el-GR', {minimumFractionDigits: 2})} {currencyFormatter.findCurrency(currency).symbol}
    </td>
  </tr>
)

export default MoneyTransactionApprovalRow
