import { injectReducer } from 'store/reducers'
import LoadLayout from './components/LoadLayout'
import { LoadFormRoute, LoadApprovalRoute, LoadResultRoute } from './routes'

export const LoadRoute = (store) => {
  return {
    path        : '/banking/cards/prepaidcards/card/load',
    component   : LoadLayout,
    indexRoute  : LoadFormRoute(store),
    childRoutes : [
      LoadApprovalRoute(store),
      LoadResultRoute(store)
    ]
  }
}

export default LoadRoute
