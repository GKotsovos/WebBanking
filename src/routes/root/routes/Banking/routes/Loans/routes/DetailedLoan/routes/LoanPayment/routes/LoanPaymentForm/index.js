import { injectReducer } from 'store/reducers'
import LoanPaymentForm from './containers/LoanPaymentFormContainer'
import cookie from 'react-cookie'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LoanPaymentForm)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      replace("/")
    }
  }
})
