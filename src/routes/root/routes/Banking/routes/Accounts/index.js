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
