import { injectReducer } from 'store/reducers'
import DetailedLoanLayout from './containers/DetailedLoanLayoutContainer'
import { LoanPaymentRoute, TransactionHistoryRoute } from './routes'

export const DetailedLoanRoute = (store) => {
  return {
    path        : '/banking/loans/loan',
    component   : DetailedLoanLayout,
    indexRoute  : TransactionHistoryRoute(store),
    childRoutes : [
      LoanPaymentRoute(store)
    ]
  }
}

export default DetailedLoanRoute
