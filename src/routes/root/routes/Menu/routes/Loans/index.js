import { injectReducer } from 'store/reducers'

export default (store) => ({
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      //const Loans = require('./containers/HomeContainer').default
      const Loans = require('./components/LoansView').default
      const reducer = require('./modules/loans').default

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'loans', reducer })

      /*  Return getComponent   */
      cb(null, Loans)

    /* Webpack named bundle   */
    }, 'loans')
  }
})
