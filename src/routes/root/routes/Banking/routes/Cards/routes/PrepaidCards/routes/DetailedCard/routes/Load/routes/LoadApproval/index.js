import { injectReducer } from 'store/reducers'
import LoadApproval from './containers/LoadApprovalContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/cards/creditcards/card/load/approval',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LoadApproval)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      window.location.href = '/';
    }
  }
})
