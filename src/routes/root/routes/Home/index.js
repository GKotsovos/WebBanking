import { injectReducer } from 'store/reducers'
import Home from './components/HomeView'

export default (store) => ({
  path: 'home',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reducer = require('./modules/home').default
      injectReducer(store, { key: 'home', reducer })
      cb(null, Home)
    })
  }
})
