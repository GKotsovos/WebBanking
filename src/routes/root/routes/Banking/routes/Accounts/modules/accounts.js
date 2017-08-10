import axios from 'axios';
import querystring from 'querystring';
import _ from 'underscore'

const INITIAL_STATE = 'INITIAL_STATE';
const REQUESTING = 'REQUESTING';
const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';
const RECEIVE_ACCOUNT = 'RECEIVE_ACCOUNT';
const RECEIVE_ACCOUNT_TRANSACTION_HISTORY = 'RECEIVE_ACCOUNT_TRANSACTION_HISTORY';
const REQUEST_ERROR = 'REQUEST_ERROR';
const SET_ACTIVE_ACCOUNT = 'SET_ACTIVE_ACCOUNT';
const DEACTIVE_ACCOUNT = 'DEACTIVE_ACCOUNT';

export const getAccounts = () => {
  return (dispatch, getState) => {
    dispatch({
      type: REQUESTING
    });

    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/account/GetAllCustomerAccounts',
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_ACCOUNTS,
        payload : response.data
      })
    })
    .catch(({ response })  => {
      dispatch({
        type    : REQUEST_ERROR,
        payload : response.data
      })
    })
  }
}

export const getAccountById = (accountId) => {
  return (dispatch, getState) => {
    dispatch({
      type: REQUESTING
    });

    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/account/GetAccountById/' + accountId,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_ACCOUNT,
        payload : response.data
      })
    })
    .catch((exception)  => {
      dispatch({
        type    : REQUEST_ERROR,
        payload : exception
      })
    })
  }
}

export const getAccountTransactionHistory = (productId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/TransactionHistory/GetProductTransactionHistory/' + productId,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_ACCOUNT_TRANSACTION_HISTORY,
        payload : response.data
      })
    })
    .catch(( exception )  => {
      dispatch({
        type    : REQUEST_ERROR,
        payload : exception
      })
    })
  }
}

export function setActiveAccount(account){
  return {
    type: SET_ACTIVE_ACCOUNT,
    payload: account
  }
}

export function deactiveAccount(){
  return {
    type: SET_ACTIVE_ACCOUNT,
  }
}

export const actions = {
  getAccounts,
  getAccountById,
  getAccountTransactionHistory,
  setActiveAccount,
  deactiveAccount,
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

  RECEIVE_ACCOUNT: (state, action) => {
    return {
      ...state,
      accounts: _.map(state.accounts, (account) => account.iban == action.payload.iban ? action.payload : account)
    }
  },

  RECEIVE_ACCOUNTS: (state, action) => {
    return {
      ...state,
      accounts: action.payload
    }
  },

  RECEIVE_ACCOUNT_TRANSACTION_HISTORY: (state, action) => {
    return {
      ...state,
      activeAccount: {
        ...state.activeAccount,
        transactionHistory: action.payload
      }
    }
  },

  REQUEST_ERROR: (state, action) => {
    console.log(action.payload)
    return {
      ...state
    }
  },

  SET_ACTIVE_ACCOUNT: (state, action) => {
    return {
      ...state,
      activeAccount: action.payload
    }
  },

  DEACTIVE_ACCOUNT: (state, action) => {
    return {
      ...state,
      activeAccount: {}
    }
  },
}

export default function accountReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
