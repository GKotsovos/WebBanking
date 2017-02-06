import { injectReducer } from 'store/reducers'
import Banking from './components/BankingView'

export default (store) => ({
  path: 'banking',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reducer = require('./modules/banking').default
      injectReducer(store, { key: 'banking', reducer })
      cb(null, Banking)
    })
  }
})
