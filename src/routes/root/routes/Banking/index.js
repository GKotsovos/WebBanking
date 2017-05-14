import { injectReducer } from 'store/reducers'
import BankingLayout from './containers/BankingContainer'
import { AccountsRoute, CardsRoute, LoansRoute, OrdersRoute, PaymentsRoute, TransfersRoute } from './routes'
import banking from './modules/banking'

export const BankingRoute = (store) => {
  injectReducer(store, { key: 'banking', reducer: banking });

  return {
    path        : '/banking',
    component   : BankingLayout,
    indexRoute  : AccountsRoute(store),
    childRoutes : [
      CardsRoute(store),
      LoansRoute(store),
      OrdersRoute(store),
      PaymentsRoute(store),
      TransfersRoute(store)
    ]
  }
}

export default BankingRoute
