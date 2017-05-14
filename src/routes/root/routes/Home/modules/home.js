import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router'
import _ from 'underscore'

const INITIAL_STATE = 'INITIAL_STATE';
const AUTHENTICATE = 'AUTHENTICATE';
const AUTHENTICATED = 'AUTHENTICATED';
const UNAUTHENTICATED = 'UNAUTHENTICATED';
const CHANGE_PANEL = 'CHANGE_PANEL'

export function initialState(){
  return{
    type: INITIAL_STATE
  }
}

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
          type    : AUTHENTICATED,
          payload : response.data
        })
      })
      .then(() => browserHistory.push('/banking'))
      .catch((exception)  => {
        dispatch({
          type    : UNAUTHENTICATED,
          payload : exception
        })
      })
  }
}

export function changePanel(panel){
  return{
    type: CHANGE_PANEL,
    payload: panel
  }
}

export const actions = {
  initialState,
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
  INITIAL_STATE: (state, action) => {
    return initState();
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
    return {
      ...state,
      returnedError: action.payload
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
