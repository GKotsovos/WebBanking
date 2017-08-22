import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
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
      logOut()(store.dispatch, store.getState);
    }
  }
})
