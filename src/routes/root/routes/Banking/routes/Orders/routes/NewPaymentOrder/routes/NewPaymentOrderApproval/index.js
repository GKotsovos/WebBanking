import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewPaymentOrderApproval from './containers/NewPaymentOrderApprovalContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/payment/new/approval',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewPaymentOrderApproval)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
