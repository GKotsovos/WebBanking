import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewAccountOrderApproval from './containers/NewAccountOrderApprovalContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/new/account/approval',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewAccountOrderApproval)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
