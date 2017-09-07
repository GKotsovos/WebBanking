import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewOrganizationOrderResult from './containers/NewOrganizationOrderResultContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/new/organization/result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewOrganizationOrderResult)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
