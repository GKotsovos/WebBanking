import { logOut } from 'routes/root/routes/Banking/modules/banking';
import ExistingOrganizationOrders from './containers/ExistingOrganizationOrderLayoutContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/existing/organization',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ExistingOrganizationOrders)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
