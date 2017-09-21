import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewPaymentOrderResult from './containers/NewPaymentOrderResultContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/payment/new/result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewPaymentOrderResult)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
