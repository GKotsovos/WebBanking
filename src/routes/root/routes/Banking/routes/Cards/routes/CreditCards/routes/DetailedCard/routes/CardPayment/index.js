import { injectReducer } from 'store/reducers'
import CardPaymentLayout from './components/CardPaymentLayout'
import { CardPaymentFormRoute, CardPaymentApprovalRoute, CardPaymentResultRoute } from './routes'

export const CardPaymentRoute = (store) => {
  return {
    path        : '/banking/cards/creditcards/card/payment',
    component   : CardPaymentLayout,
    indexRoute  : CardPaymentFormRoute(store),
    childRoutes : [
      CardPaymentApprovalRoute(store),
      CardPaymentResultRoute(store)
    ]
  }
}

export default CardPaymentRoute
