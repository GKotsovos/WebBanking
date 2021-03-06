import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
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
      logOut()(store.dispatch, store.getState);
    }
  }
})
