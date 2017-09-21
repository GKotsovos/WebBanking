import { injectReducer } from 'store/reducers'
import { makeRootReducer } from 'store/reducers'
import { combineReducers } from 'redux'
import OrdersLayout from './containers/OrdersLayoutContainer'
import {
  ExistingTransferOrdersRoute,
  ExistingPaymentOrdersRoute,
  NewTransferOrderRoute,
  NewPaymentOrderRoute,
} from './routes'
import orders from './modules/orders'

export const OrdersRoute = (store) => {
  injectReducer(store, { key: 'orders', reducer: orders });
  return {
    path        : '/banking/orders',
    component   : OrdersLayout,
    childRoutes : [
      ExistingTransferOrdersRoute(store),
      ExistingPaymentOrdersRoute(store),
      NewTransferOrderRoute(store),
      NewPaymentOrderRoute(store),
    ]
  }
}

export default OrdersRoute
