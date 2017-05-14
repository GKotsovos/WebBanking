import { injectReducer } from 'store/reducers'
import LoadResult from './containers/LoadResultContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/cards/creditcards/card/load/result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LoadResult)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      replace("/")
    }
  }
})
