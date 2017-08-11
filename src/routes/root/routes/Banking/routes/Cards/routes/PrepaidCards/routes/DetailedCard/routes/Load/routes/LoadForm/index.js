import { injectReducer } from 'store/reducers'
import LoadForm from './containers/LoadFormContainer'
import cookie from 'react-cookie'

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, LoadForm)
    })
  },
  onEnter(nextState, replace) {
    if (!cookie.load('access_token')) {
      window.location.href = '/';
    }
  }
})
