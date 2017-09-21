import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
import LoadApproval from './containers/LoadApprovalContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/cards/prepaidcards/card/load/approval',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LoadApproval)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
