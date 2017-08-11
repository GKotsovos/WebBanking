import { injectReducer } from 'store/reducers'
import CardPaymentForm from './containers/CardPaymentFormContainer'
import cookie from 'react-cookie'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, CardPaymentForm)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      window.location.href = '/';
    }
  }
})
