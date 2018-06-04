import React from 'react'
import currencyFormatter from 'currency-formatter';
import './MoneyTransactionApprovalRow.css';

export const MoneyTransactionApprovalRow = ({ title, amount, currency }) => (
  <tr>
    <td className="titleCell col-sm-5 text-right">{title}</td>
    <td className="cell col-sm-4 text-center">
      {Number(amount).toLocaleString('el-GR', {minimumFractionDigits: 2})} {currencyFormatter.findCurrency(currency).symbol}
    </td>
  </tr>
)

export default MoneyTransactionApprovalRow
