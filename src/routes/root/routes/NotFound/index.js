import { linkTo } from 'routes/root/routes/Banking/modules/banking';
import cookie from 'react-cookie'

export default (store) => ({
  path: '*',
  onEnter(nextState, replace) {
    linkTo('/');
    cookie.remove('access_token');
  }
})
