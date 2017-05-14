import { injectReducer } from 'store/reducers'
import LoanPayment from './components/LoanPaymentLayout'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/loans/payment',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reducer = require('./modules/loanPayment').default
      injectReducer(store, { key: 'loanPayment', reducer })
      cb(null, LoanPayment)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      replace("/")
    }
  }
})
