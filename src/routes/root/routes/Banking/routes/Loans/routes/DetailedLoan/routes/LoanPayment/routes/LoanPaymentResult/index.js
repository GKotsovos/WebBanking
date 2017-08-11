import { injectReducer } from 'store/reducers'
import LoanPaymentResult from './containers/LoanPaymentResultContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/loans/loan/payment/result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LoanPaymentResult)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      window.location.href = '/';
    }
  }
})
