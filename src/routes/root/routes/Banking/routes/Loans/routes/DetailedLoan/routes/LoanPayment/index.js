import { injectReducer } from 'store/reducers'
import LoanPaymentLayout from './components/LoanPaymentLayout'
import { LoanPaymentFormRoute, LoanPaymentApprovalRoute, LoanPaymentResultRoute } from './routes'

export const LoanPaymentRoute = (store) => {
  return {
    path        : '/banking/loans/loan/payment',
    component   : LoanPaymentLayout,
    indexRoute  : LoanPaymentFormRoute(store),
    childRoutes : [
      LoanPaymentApprovalRoute(store),
      LoanPaymentResultRoute(store)
    ]
  }
}

export default LoanPaymentRoute
