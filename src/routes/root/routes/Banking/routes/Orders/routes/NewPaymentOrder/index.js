import NewPaymentOrderLayout from './containers/NewPaymentOrderLayoutContainer'
import {
  NewPaymentOrderFormRoute,
  NewPaymentOrderApprovalRoute,
  NewPaymentOrderResultRoute
} from './routes'

export const NewPaymentOrderRoute = (store) => {
  return {
    path        : '/banking/orders/payment/new',
    component   : NewPaymentOrderLayout,
    indexRoute  : NewPaymentOrderFormRoute(store),
    childRoutes : [
      NewPaymentOrderFormRoute(store),
      NewPaymentOrderApprovalRoute(store),
      NewPaymentOrderResultRoute(store),
    ]
  }
}

export default NewPaymentOrderRoute
