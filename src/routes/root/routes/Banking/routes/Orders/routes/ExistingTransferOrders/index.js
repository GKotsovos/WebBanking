import { logOut } from 'routes/root/routes/Banking/modules/banking';
import ExistingTransferOrders from './containers/ExistingTransferOrdersLayoutContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/transfer/existing',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ExistingTransferOrders)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
