import { injectReducer } from 'store/reducers'
import BankingLayout from './containers/BankingContainer'
import {
  AccountsRoute,
  CardsRoute,
  LoansRoute,
  PaymentsRoute,
  TransfersRoute,
  OrdersRoute,
} from './routes'
import banking, { linkTo } from './modules/banking'
import cookie from 'react-cookie'

export const BankingRoute = (store) => {
  injectReducer(store, { key: 'banking', reducer: banking });

  return {
    path        : '/banking',
    component   : BankingLayout,
    indexRoute  : AccountsRoute(store),
    onEnter     : () => !cookie.load('access_token') ? linkTo('/') : null,
    childRoutes : [
      CardsRoute(store),
      LoansRoute(store),
      PaymentsRoute(store),
      TransfersRoute(store),
      OrdersRoute(store),
    ]
  }
}

export default BankingRoute
