import { injectReducer } from 'store/reducers'
import TransferFormLayout from './containers/TransferFormLayoutContainer'
import {
  ToAgileBankFormRoute,
  ToDomesticBankFormRoute,
  ToForeignBankFormRoute,
} from './routes'

export const TransferFormRoute = (store) => {
  return {
    component   : TransferFormLayout,
    indexRoute  : ToAgileBankFormRoute(store),
    childRoutes : [
      ToAgileBankFormRoute(store),
      ToDomesticBankFormRoute(store),
      ToForeignBankFormRoute(store),
    ]
  }
}

export default TransferFormRoute
