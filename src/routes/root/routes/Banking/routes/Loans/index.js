import LoansLayout from './components/LoansLayout'
import { LoanPaymentRoute, TransactionHistoryRoute } from './routes'

export const LoansRoute = (store) => ({
  path        : '/banking/loans',
  component   : LoansLayout,
  indexRoute  : TransactionHistoryRoute,
  childRoutes : [
    LoanPaymentRoute(store)
  ]
})

export default LoansRoute
