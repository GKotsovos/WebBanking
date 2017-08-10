import { injectReducer } from 'store/reducers'
import LoansLayout from './containers/LoansLayoutContainer'
import { DetailedLoanRoute } from './routes'

export const LoansRoute = (store) => {
  return {
    path        : '/banking/loans',
    component   : LoansLayout,
    childRoutes : [
      DetailedLoanRoute(store)
    ]
  }
}

export default LoansRoute
