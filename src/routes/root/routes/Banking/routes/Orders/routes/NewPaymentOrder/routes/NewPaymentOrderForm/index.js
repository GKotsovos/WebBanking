import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewPaymentOrderForm from './containers/NewPaymentOrderFormLayoutContainer'
import cookie from 'react-cookie'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewPaymentOrderForm)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
