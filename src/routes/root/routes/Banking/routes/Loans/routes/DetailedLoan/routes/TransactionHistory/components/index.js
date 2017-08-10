import { injectReducer } from 'store/reducers'
import TransactionHistory from './TransactionHistory'
import cookie from 'react-cookie'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      // const reducer = require('./modules/cardPayment').default
      // injectReducer(store, { key: 'cardPayment', reducer })
      cb(null, TransactionHistory)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      replace("/")
    }
  }
})
