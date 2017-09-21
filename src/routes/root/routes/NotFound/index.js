import RouteNotFound from './components/RouteNotFound'

export default (store) => ({
  path: '*',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, RouteNotFound)
    })
  }
})
