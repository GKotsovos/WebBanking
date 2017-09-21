import { injectReducer } from 'store/reducers'
import CreditCardsLayout from './containers/CreditCardsLayoutContainer'
import { DetailedCardRoute } from './routes'

export const CreditCardsRoute = (store) => {
  return {
    path        : '/banking/cards/creditcards',
    component   : CreditCardsLayout,
    childRoutes : [
      DetailedCardRoute(store)
    ]
  }
}

export default CreditCardsRoute
