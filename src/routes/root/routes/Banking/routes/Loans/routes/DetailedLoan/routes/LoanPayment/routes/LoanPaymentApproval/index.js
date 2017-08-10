import { injectReducer } from 'store/reducers'
import LoanPaymentApproval from './containers/LoanPaymentApprovalContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/loans/loan/payment/approval',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LoanPaymentApproval)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      replace("/")
    }
  }
})
