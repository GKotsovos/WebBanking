import OrdersLayout from './components/OrdersLayout'
import NewOrderRoute from './routes'

export const OrdersRoute = (store) => ({
  path        : '/banking/orders',
  component   : OrdersLayout,
  // indexRoute  : TransactionHistoryRoute,
  childRoutes : [
    NewOrderRoute(store)
  ]
})

export default OrdersRoute
