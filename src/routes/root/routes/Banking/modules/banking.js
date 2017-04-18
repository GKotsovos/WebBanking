import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router'
import _ from 'underscore'

const INITIAL_STATE = 'INITIAL_STATE';
const REQUESTING = 'REQUESTING';
const RECEIVE_ACCOUNTS = 'RECEIVE_ACCOUNTS';
const RECEIVE_TRANSACTION_HISTORY = 'RECEIVE_TRANSACTION_HISTORY';
const REQUEST_ERROR = 'REQUEST_ERROR';
const SET_ACTIVE_ACCOUNT = 'SET_ACTIVE_ACCOUNT';
const INIT_ACCOUNTS_STATE = 'INIT_ACCOUNTS_STATE';
const INIT_CARDS_STATE = 'INIT_CARDS_STATE';
const INIT_LOANS_STATE = 'INIT_LOANS_STATE';
const INIT_TRANSFERS_STATE = 'INIT_TRANSFERS_STATE';
const INIT_PAYMENTS_STATE = 'INIT_PAYMENTS_STATE';
const INIT_ORDERS_STATE = 'INIT_ORDERS_STATE';

export function initialState(){
  return{
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
    .catch(({ response })  => {
      dispatch({
        type    : REQUEST_ERROR,
        payload : response.data
      })
    })
  }
}

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

export const getCards = () => {
  return (dispatch, getState) => {
    dispatch({
      type: REQUESTING
    });

    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/card/GetAllCustomerCards',
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_CARDS,
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

export const getProductTransactionHistory = (productId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/TransactionHistory/GetProductTransactionHistory/' + productId,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_TRANSACTION_HISTORY,
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

export function setActiveAccount(account){
  return {
    type: SET_ACTIVE_ACCOUNT,
    payload: account
  }
}

export function setInitAccountsTabState(){
  return {
    type: INIT_ACCOUNTS_STATE
  }
}

export function setInitCardsTabState(){
  return {
    type: INIT_CARDS_STATE
  }
}

export function setInitLoansTabState(){
  return {
    type: INIT_LOANS_STATE
  }
}

export function setInitTransfersTabState(){
  return {
    type: INIT_TRANSFERS_STATE
  }
}

export function setInitPaymentsTabState(){
  return {
    type: INIT_PAYMENTS_STATE
  }
}

export function setInitOrdersTabState(){
  return {
    type: INIT_ORDERS_STATE
  }
}

export const actions = {
  initialState,
  getCustomerName,
  getAccounts,
  getCards,
  getProductTransactionHistory,
  setActiveAccount
}

const initState = () => {
  return {
    initialFetch: false,
    phase: 'REQUESTING',
    customerName: '',
    accounts: [],
    activeAccount: {},
    cards: [],
    activeCard: {},
    loans: [],
    activeLoan: {},
    orders: [],
    activeOrder: {},
  }
}

const ACTION_HANDLERS = {
  INITIAL_STATE: (state, action) => {
    return initState();
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

  RECEIVE_ACCOUNTS: (state, action) => {
    return {
      ...state,
      accounts: action.payload
    }
  },

  RECEIVE_TRANSACTION_HISTORY: (state, action) => {
    return {
      ...state,
      activeAccount: {
        ...state.activeAccount,
        transactionHistory: action.payload
      }
    }
  },

  REQUEST_ERROR: (state, action) => {
    return {
      ...state,
      returnedError: action.payload
    }
  },

  SET_ACTIVE_ACCOUNT: (state, action) => {
    return {
      ...state,
      activeAccount: action.payload
    }
  },

  INIT_ACCOUNTS_STATE: (state, action) => {
    return {
      ...state,
      activeAccount: {}
    }
  },

  INIT_CARDS_STATE: (state, action) => {
    return {
      ...state,
      activeCard: {}
    }
  },

  INIT_LOANS_STATE: (state, action) => {
    return {
      ...state,
      activeLoan: {}
    }
  },

  INIT_TRANSFERS_STATE: (state, action) => {
    return {
      ...state,
      // activeAcco: action.payload
    }
  },

  INIT_PAYMENTS_STATE: (state, action) => {
    return {
      ...state,
      // activeAccount: action.payload
    }
  },

  INIT_ORDERS_STATE: (state, action) => {
    return {
      ...state,
      activeOrder: {}
    }
  },
}

export default function homeReducer (state = initState(), action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
