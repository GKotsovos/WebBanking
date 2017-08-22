import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
// import TransferResult from './containers/TransferResultContainer'
import TransferResult from './components'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/transfers/result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, TransferResult)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(store.dispatch, store.getState);
    }
  }
})
