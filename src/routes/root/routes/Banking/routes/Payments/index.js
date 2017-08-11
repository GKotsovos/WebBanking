import { injectReducer } from 'store/reducers'
import Payments from './components/PaymentsLayout'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/payments',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reducer = require('./modules/payments').default
      injectReducer(store, { key: 'payments', reducer })
      cb(null, Payments)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      window.location.href = '/';
    }
  }
})
