import OrdersLayout from './containers/OrdersLayoutContainer'
import { ExistingRoutes , NewOrderRoute } from './routes'

export const OrdersRoute = (store) => ({
  path        : '/banking/orders',
  component   : OrdersLayout,
  childRoutes : [
    ExistingRoutes(store),
    NewOrderRoute(store)
  ]
})

export default OrdersRoute
