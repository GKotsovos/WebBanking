import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
import ToAgileBankForm from './containers/ToAgileBankFormContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/transfers/toAgileBank',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ToAgileBankForm)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
