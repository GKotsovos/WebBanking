import { injectReducer } from 'store/reducers'
import Transfers from './components/TransfersLayout'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/transfers',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reducer = require('./modules/transfers').default
      injectReducer(store, { key: 'transfers', reducer })
      cb(null, Transfers)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      replace("/")
    }
  }
})
