import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
import PaymentResult from './containers/PaymentResultContainer';
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/payments/result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, PaymentResult)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
