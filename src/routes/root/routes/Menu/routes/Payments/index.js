import { injectReducer } from 'store/reducers'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      //const Payments = require('./containers/HomeContainer').default
      const Payments = require('./components/PaymentsView').default
      const reducer = require('./modules/payments').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'payments', reducer })

      /*  Return getComponent   */
      cb(null, Payments)

    /* Webpack named bundle   */
    }, 'payments')
  }
})
