import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewTransferOrderResult from './containers/NewTransferOrderResultContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/transfer/new/result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewTransferOrderResult)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
