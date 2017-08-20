import { injectReducer } from 'store/reducers'
import { logOut } from 'routes/root/routes/Banking/modules/banking';
import LoadResult from './containers/LoadResultContainer'
import cookie from 'react-cookie'

export default (store) => ({
  path: '/banking/cards/prepaidcards/card/load/result',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LoadResult)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      logOut()(dispatch, getState);
    }
  }
})
