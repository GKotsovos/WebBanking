import { injectReducer } from 'store/reducers'
import PrepaidCardsLayout from './containers/PrepaidCardsLayoutContainer'
import { DetailedCardRoute } from './routes'

export const PrepaidCardsRoute = (store) => {
  return {
    path        : '/banking/cards/prepaidcards',
    component   : PrepaidCardsLayout,
    childRoutes : [
      DetailedCardRoute(store)
    ]
  }
}

export default PrepaidCardsRoute
