import NewAccountOrderLayout from './containers/NewAccountOrderLayoutContainer'
import {
  NewAccountOrderFormRoute,
  NewAccountOrderApprovalRoute,
  NewAccountOrderResultRoute
} from './routes'

export const NewAccountOrderRoute = (store) => {
  return {
    path        : '/banking/orders/new/account',
    component   : NewAccountOrderLayout,
    indexRoute  : NewAccountOrderFormRoute(store),
    childRoutes : [
      NewAccountOrderFormRoute(store),
      NewAccountOrderApprovalRoute(store),
      NewAccountOrderResultRoute(store),
    ]
  }
}

export default NewAccountOrderRoute
