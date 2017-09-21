import { logOut } from 'routes/root/routes/Banking/modules/banking';
import ExistingPaymentOrders from './containers/ExistingPaymentOrderLayoutContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/payment/existing',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ExistingPaymentOrders)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
