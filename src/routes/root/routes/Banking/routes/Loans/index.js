import { injectReducer } from 'store/reducers'
import LoansLayout from './containers/LoansLayoutContainer'
import { DetailedLoanRoute } from './routes'
import loans from './modules/loans'

export const LoansRoute = (store) => {
  injectReducer(store, { key: 'loans', reducer: loans });
  return {
    path        : '/banking/loans',
    component   : LoansLayout,
    childRoutes : [
      DetailedLoanRoute(store)
    ]
  }
}

export default LoansRoute
