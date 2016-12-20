import { injectReducer } from 'store/reducers'
import Menu from './components/MenuView'

export default (store) => ({
  path: 'menu',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const reducer = require('./modules/menu').default
      injectReducer(store, { key: 'menu', reducer })
      cb(null, Menu)
    })
  }
})
