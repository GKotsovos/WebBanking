import { logOut } from 'routes/root/routes/Banking/modules/banking';
import ExistingAccountOrders from './containers/ExistingAccountOrdersLayoutContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/existing/account',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ExistingAccountOrders)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
