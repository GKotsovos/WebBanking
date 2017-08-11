// import { injectReducer } from 'store/reducers'
// import Accounts from './containers/AccountsLayoutContainer'
// import cookie from 'react-cookie'
//
// export default (store) => ({
//   getComponent (nextState, cb) {
//     require.ensure([], (require) => {
//       const reducer = require('./modules/accounts').default
//       injectReducer(store, { key: 'accounts', reducer })
//       cb(null, Accounts)
//     })
//   },
//   onEnter(nextState, replace) {
//     if (!cookie.load('access_token')) {
//       window.location.href = '/';
//     }
//   }
// })


import { injectReducer } from 'store/reducers'
import AccountsLayout from './containers/AccountsLayoutContainer'
import accounts from './modules/accounts'

export const AccountsRoute = (store) => {
  injectReducer(store, { key: 'accounts', reducer: accounts });

  return {
    component   : AccountsLayout,
    indexRoute  : AccountsLayout
  }
}

export default AccountsRoute
