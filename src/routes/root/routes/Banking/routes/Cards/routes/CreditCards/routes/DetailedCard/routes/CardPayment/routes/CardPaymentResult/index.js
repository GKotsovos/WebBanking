import { injectReducer } from 'store/reducers'
import CardPaymentResult from './containers/CardPaymentResultContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/cards/creditcards/card/payment/result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, CardPaymentResult)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      replace("/")
    }
  }
})
