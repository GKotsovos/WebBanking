import NewOrderLayout from './containers/NewOrderLayoutContainer'
import { NewAccountOrderRoute , NewOrgainizationOrderRoute } from './routes'

export const OrdersRoute = (store) => ({
  path        : '/banking/orders/new',
  component   : NewOrderLayout,
  childRoutes : [
    NewAccountOrderRoute(store),
    NewOrgainizationOrderRoute(store)
  ]
})

export default OrdersRoute
