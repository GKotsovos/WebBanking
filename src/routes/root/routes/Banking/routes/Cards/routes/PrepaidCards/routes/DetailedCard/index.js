import { injectReducer } from 'store/reducers'
import DetailedCardLayout from './containers/DetailedCardLayoutContainer'
import { LoadRoute, TransactionHistoryRoute } from './routes'

export const DetailedCardRoute = (store) => {

  return {
    path        : '/banking/cards/prepaidcards/card',
    component   : DetailedCardLayout,
    indexRoute  : TransactionHistoryRoute(store),
    childRoutes : [
      LoadRoute(store)
    ]
  }
}

export default DetailedCardRoute
