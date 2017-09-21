import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
import CardPaymentApproval from './containers/CardPaymentApprovalContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/cards/creditcards/card/payment/approval',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, CardPaymentApproval)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
