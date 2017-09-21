import NewOrganizationOrderLayout from './containers/NewOrganizationOrderLayoutContainer'
import {
  NewOrganizationOrderFormRoute,
  NewOrganizationOrderApprovalRoute,
  NewOrganizationOrderResultRoute
} from './routes'

export const NewOrganizationOrderRoute = (store) => {
  return {
    path        : '/banking/orders/new/organization',
    component   : NewOrganizationOrderLayout,
    indexRoute  : NewOrganizationOrderFormRoute(store),
    childRoutes : [
      NewOrganizationOrderFormRoute(store),
      NewOrganizationOrderApprovalRoute(store),
      NewOrganizationOrderResultRoute(store),
    ]
  }
}

export default NewOrganizationOrderRoute
