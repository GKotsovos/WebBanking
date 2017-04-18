import { injectReducer } from 'store/reducers'
import Banking from './containers/BankingContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: 'banking',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reducer = require('./modules/banking').default
      injectReducer(store, { key: 'banking', reducer })
      cb(null, Banking)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      replace("/")
    }
  }
})
