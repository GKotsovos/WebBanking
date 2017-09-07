import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewOrganizationOrderForm from './containers/NewOrganizationOrderFormLayoutContainer'
import cookie from 'react-cookie'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewOrganizationOrderForm)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
