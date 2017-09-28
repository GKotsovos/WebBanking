import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router'
import { handleRequestException } from 'routes/root/routes/Banking/routes/utils/commonActions';

const RECEIVED_CUSTOMER_NAME = 'RECEIVED_CUSTOMER_NAME';
const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
const UPDATE_LOG_OUT_TIMER = 'UPDATE_LOG_OUT_TIMER';
const SHOW_LOG_OUT_MODAL = 'SHOW_LOG_OUT_MODAL';
const LOG_OUT = 'LOG_OUT';
const REQUEST_ERROR = 'REQUEST_ERROR';

export const getCustomerName = () => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/customer/GetCustomerName',
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_CUSTOMER_NAME,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
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

export const logOutCountDown = () => {
  return (dispatch, getState) => {
    const interval = setInterval(function() {
      localStorage.secondsLeft--;
      const date = new Date(null);
      date.setSeconds(localStorage.secondsLeft);
      dispatch({
        type    : UPDATE_LOG_OUT_TIMER,
        payload : date.toISOString().substr(14, 5)
      });

      if (localStorage.secondsLeft == 0 || localStorage.secondsLeft > 600 || localStorage.secondsLeft < 0) {
        clearInterval(interval);
        dispatch({
          type    : SHOW_LOG_OUT_MODAL
        });
      }
    }, 1000);
  }
}

export const logOut = () => {
  return (dispatch, getState) => {
    dispatch({
      type    : LOG_OUT
    });
  }
}

export const actions = {
  getCustomerName,
  linkTo,
  logOutCountDown,
  logOut
}

const ACTION_HANDLERS = {
  RECEIVED_CUSTOMER_NAME: (state, action) => {
    return {
      ...state,
      customerName: action.payload
    }
  },

  CHANGE_ACTIVE_TAB: (state, action) => {
    return {
      ...state,
      activeRoute: action.payload
    }
  },

  UPDATE_LOG_OUT_TIMER: (state, action) => {
    return {
      ...state,
      timeLeftToLogOut: action.payload
    }
  },

  SHOW_LOG_OUT_MODAL: (state, action) => {
    return {
      ...state,
      logOutModal: {
        shouldShow: true
      }
    }
  },

  LOG_OUT: (state, action) => {
    cookie.remove('access_token');
    localStorage.clear();
    window.location.href = '/';
    return {};
  },

  REQUEST_ERROR: (state, action) => {
    return {
      ...state,
      returnedError: action.payload
    }
  },
}

export default function bankReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
