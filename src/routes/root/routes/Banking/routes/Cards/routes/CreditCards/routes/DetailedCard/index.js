import { injectReducer } from 'store/reducers'
import DetailedCardLayout from './containers/DetailedCardLayoutContainer'
import { CardPaymentRoute, TransactionHistoryRoute } from './routes'

export const DetailedCardRoute = (store) => {

  return {
    path        : '/banking/cards/creditcards/card',
    component   : DetailedCardLayout,
    indexRoute  : TransactionHistoryRoute(store),
    childRoutes : [
      CardPaymentRoute(store)
    ]
  }
}

export default DetailedCardRoute
