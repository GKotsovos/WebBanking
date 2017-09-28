import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router'
import { logOutCountDown } from 'routes/root/routes/Banking/modules/banking';
import _ from 'underscore'

const INIT_LOG_OUT_TIMER = 'INIT_LOG_OUT_TIMER';
const AUTHENTICATE = 'AUTHENTICATE';
const AUTHENTICATED = 'AUTHENTICATED';
const UNAUTHENTICATED = 'UNAUTHENTICATED';
const CHANGE_PANEL = 'CHANGE_PANEL'

export const authenticate = (userId, password) => {
  return (dispatch, getState) => {
    return axios.post('http://localhost:26353/api/authenticate',
        querystring.stringify({
          userId: userId,
          password: password
        })
      )
      .then((response) => {
        dispatch({
          type    : INIT_LOG_OUT_TIMER,
          payload : response.data.expires_in
        })
        dispatch({
          type    : AUTHENTICATED,
          payload : response.data
        })
      })
      .then(() => browserHistory.push('/banking'))
      .catch((exception) => {
        dispatch({
          type    : UNAUTHENTICATED,
          payload : exception
        })
      })
  }
}

export const changePanel = (panel) => {
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE_PANEL,
      payload: panel
    });
  }
}

export const actions = {
  authenticate,
  changePanel
}

const initState = () => {
  return {
    activePanel: 'NEWS',
    returnedError: 'none'
  }
}

const ACTION_HANDLERS = {
  INIT_LOG_OUT_TIMER: (state, action) => {
    localStorage.setItem('secondsLeft', action.payload);
    return state;
  },

  AUTHENTICATED: (state, action) => {
    cookie.save('access_token',
      action.payload.access_token,
      {
        path: '/',
        maxAge: action.payload.expires_in
      }
    );
    return state;
  },

  UNAUTHENTICATED: (state, action) => {
    let errorMessage = "";

    if (_.has(action.payload.response, "status") &&
        action.payload.response.status == 401) {
      errorMessage = "Λάθος ID χρήστη ή κωδικός.";
    } else {
      errorMessage = "Αυτή την στιγμή υπάρχει κάποιο πρόβλημα με το σύστημα. Προσπαθήστε ξανά αργότερα."
    }

    return {
      ...state,
      returnedError: errorMessage
    }
  },

  CHANGE_PANEL: (state, action) => {
    return {
      ...state,
      activePanel: action.payload
    }
  },
}

export default function homeReducer (state = initState(), action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
