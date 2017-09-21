import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewAccountOrderForm from './containers/NewAccountOrderFormLayoutContainer'
import cookie from 'react-cookie'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewAccountOrderForm)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
