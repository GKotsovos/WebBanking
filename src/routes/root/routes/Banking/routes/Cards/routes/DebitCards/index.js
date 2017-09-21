import { injectReducer } from 'store/reducers'
import DebitCardsLayout from './containers/DebitCardsLayoutContainer'
import { DetailedCardRoute } from './routes'

export const DebitCardsRoute = (store) => {
  return {
    path        : '/banking/cards/debitcards',
    component   : DebitCardsLayout,
    childRoutes : [
      DetailedCardRoute(store)
    ]
  }
}

export default DebitCardsRoute
