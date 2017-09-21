import { injectReducer } from 'store/reducers'
import PaymentsLayout from './containers/PaymentsLayoutContainer'
import { PaymentFormRoute, PaymentApprovalRoute, PaymentResultRoute } from './routes'
import payments from './modules/payments'

export const PaymentsRoute = (store) => {
  injectReducer(store, { key: 'payments', reducer: payments });
  return {
    path        : '/banking/Payments',
    component   : PaymentsLayout,
    indexRoute  : PaymentFormRoute(store),
    childRoutes : [
      PaymentFormRoute(store),
      PaymentApprovalRoute(store),
      PaymentResultRoute(store),
    ]
  }
}

export default PaymentsRoute
