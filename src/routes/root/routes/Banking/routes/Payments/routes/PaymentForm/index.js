import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
import PaymentForm from './containers/PaymentFormLayoutContainer';
import cookie from 'react-cookie'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, PaymentForm)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
