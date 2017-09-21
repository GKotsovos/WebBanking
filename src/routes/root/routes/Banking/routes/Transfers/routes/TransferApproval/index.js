import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
import TransferApproval from './containers/TransferApprovalContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/transfers/approval',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, TransferApproval)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
