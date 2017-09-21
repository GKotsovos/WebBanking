import { logOut } from 'routes/root/routes/Banking/modules/banking';
import NewOrganizationOrderApproval from './containers/NewOrganizationOrderApprovalContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/orders/new/organization/approval',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, NewOrganizationOrderApproval)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
