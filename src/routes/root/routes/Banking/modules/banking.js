import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router'

const INITIAL_STATE = 'INITIAL_STATE';
const REQUESTING = 'REQUESTING';
const RECEIVE_CUSTOMER_NAME = 'RECEIVE_CUSTOMER_NAME';
const REQUEST_ERROR = 'REQUEST_ERROR';
const LOG_OUT = 'LOG_OUT';
const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';

export function initialState(){
  return {
    type: INITIAL_STATE
  }
}

export const getCustomerName = () => {
  return (dispatch, getState) => {
    dispatch({
      type: REQUESTING
    });

    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/customer/GetCustomerName',
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_CUSTOMER_NAME,
        payload : response.data
      })
    })
    .catch((exception)  => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : LOG_OUT,
      }) :
      dispatch({
        type    : REQUEST_ERROR,
        payload : exception
      })
    })
  }
}

export const linkTo = (route) => {
  localStorage.setItem('path', route);
  browserHistory.push(route);

  return (dispatch, getState) => {
    dispatch({
      type: CHANGE_ACTIVE_TAB,
      payload: route
    });
  }
}

export const logOut = () => {
    return (dispatch, getState) => {
      dispatch({
        type    : INITIAL_STATE
      });
      dispatch({
        type    : LOG_OUT
      });
    }
}

export const actions = {
  getCustomerName,
  linkTo,
  logOut
}

const ACTION_HANDLERS = {

  INITIAL_STATE: (state, action) => {
    return {};
  },

  REQUESTING: (state, action) => {
    return {
      ...state,
      phase: 'REQUESTING'
    }
  },

  RECEIVE_CUSTOMER_NAME: (state, action) => {
    return {
      ...state,
      customerName: action.payload
    }
  },

  REQUEST_ERROR: (state, action) => {
    return {
      ...state,
      returnedError: action.payload
    }
  },

  LOG_OUT: (state, action) => {
    cookie.remove('access_token');
    window.location.href = '/';
    return state;
  },

  CHANGE_ACTIVE_TAB: (state, action) => {
    return {
      ...state,
      activeRoute: action.payload
    }
  },
}

export default function bankReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
