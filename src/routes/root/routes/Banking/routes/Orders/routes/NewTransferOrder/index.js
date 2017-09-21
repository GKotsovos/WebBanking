import NewTransferOrderLayout from './containers/NewTransferOrderLayoutContainer'
import {
  NewTransferOrderFormRoute,
  NewTransferOrderApprovalRoute,
  NewTransferOrderResultRoute
} from './routes'

export const NewTransferOrderRoute = (store) => {
  return {
    path        : '/banking/orders/transfer/new',
    component   : NewTransferOrderLayout,
    indexRoute  : NewTransferOrderFormRoute(store),
    childRoutes : [
      NewTransferOrderFormRoute(store),
      NewTransferOrderApprovalRoute(store),
      NewTransferOrderResultRoute(store),
    ]
  }
}

export default NewTransferOrderRoute
