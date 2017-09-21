import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
import ToForeignBankForm from './containers/ToForeignBankFormContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/transfers/toForeignBank',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ToForeignBankForm)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
