import { injectReducer } from 'store/reducers'
import NewOrder from './components/NewOrderLayout'
import cookie from 'react-cookie'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reducer = require('./modules/newOrder').default
      injectReducer(store, { key: 'newOrder', reducer })
      cb(null, NewOrder)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      replace("/")
    }
  }
})
