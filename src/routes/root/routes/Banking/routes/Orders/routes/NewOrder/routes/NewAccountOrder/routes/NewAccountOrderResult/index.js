import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewAccountOrderResult from './containers/NewAccountOrderResultContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/new/account/result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewAccountOrderResult)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
