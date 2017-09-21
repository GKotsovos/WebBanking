import ExistingOrdersLayout from './components/ExistingOrdersLayout'
import { ExistingAccountOrdersRoute, ExistingOrgainizationOrdersRoute } from './routes'

export const ExistingOrdersRoute = (store) => ({
  path        : '/banking/orders/existing',
  component   : ExistingOrdersLayout,
  childRoutes : [
    ExistingAccountOrdersRoute(store),
    ExistingOrgainizationOrdersRoute(store)
  ]
})

export default ExistingOrdersRoute
