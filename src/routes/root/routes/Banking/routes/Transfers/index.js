import { injectReducer } from 'store/reducers'
import TransfersLayout from './containers/TransfersLayoutContainer'
import { TransferFormRoute, TransferApprovalRoute, TransferResultRoute } from './routes'
import transfers from './modules/transfers'

export const TransfersRoute = (store) => {
  injectReducer(store, { key: 'transfers', reducer: transfers });
  return {
    path        : '/banking/transfers',
    component   : TransfersLayout,
    indexRoute  : TransferFormRoute(store),
    childRoutes : [
      TransferFormRoute(store),
      TransferApprovalRoute(store),
      TransferResultRoute(store),
    ]
  }
}

export default TransfersRoute
