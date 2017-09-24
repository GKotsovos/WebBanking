import { injectReducer } from 'store/reducers'
import CardsLayout from './containers/CardsLayoutContainer'
import { DebitCardsRoute, CreditCardsRoute, PrepaidCardsRoute } from './routes'
import cards from './modules/cards'

export const CardsRoute = (store) => {
  injectReducer(store, { key: 'cards', reducer: cards });
  return {
    path        : '/banking/cards',
    component   : CardsLayout,
    indexRoute  : DebitCardsRoute(store),
    childRoutes : [
      DebitCardsRoute(store),
      CreditCardsRoute(store),
      PrepaidCardsRoute(store),
    ]
  }
}

export default CardsRoute
