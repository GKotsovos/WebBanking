import { injectReducer } from 'store/reducers'
import TransactionHistory from './containers/TransactionHistoryContainer'
import cookie from 'react-cookie'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, TransactionHistory)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      replace("/")
    }
  }
})
