import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewTransferOrderApproval from './containers/NewTransferOrderApprovalContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/transfer/new/approval',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewTransferOrderApproval)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
