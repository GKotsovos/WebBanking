import { injectReducer } from 'store/reducers'
import DetailedCardLayout from './containers/DetailedCardLayoutContainer'
import { TransactionHistoryRoute, LinkedProductsRoute } from './routes'

export const DetailedCardRoute = (store) => {

  return {
    path        : '/banking/cards/debitcards/card',
    component   : DetailedCardLayout,
    indexRoute  : TransactionHistoryRoute(store),
    childRoutes : [
      LinkedProductsRoute(store)
    ]
  }
}

export default DetailedCardRoute
