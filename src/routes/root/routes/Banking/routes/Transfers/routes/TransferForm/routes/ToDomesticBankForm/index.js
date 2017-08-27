import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
import ToDomesticBankForm from './containers/ToDomesticBankFormContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/transfers/toDomesticBank',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, ToDomesticBankForm)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
