import axios from 'axios';
import querystring from 'querystring';
import _ from 'underscore'
import { handleRequestException } from 'routes/root/routes/Banking/routes/utils/commonActions';

const RECEIVED_ACCOUNTS = 'RECEIVED_ACCOUNTS';
const RECEIVED_ACCOUNT = 'RECEIVED_ACCOUNT';
const RECEIVED_ACCOUNT_TRANSACTION_HISTORY = 'RECEIVED_ACCOUNT_TRANSACTION_HISTORY';
const REQUEST_ERROR = 'REQUEST_ERROR';
const SET_ACTIVE_ACCOUNT = 'SET_ACTIVE_ACCOUNT';
const SET_ACCOUNT_TRANSACTION_HISTORY_START_DATE = 'SET_ACCOUNT_TRANSACTION_HISTORY_START_DATE';
const SET_ACCOUNT_TRANSACTION_HISTORY_END_DATE = 'SET_ACCOUNT_TRANSACTION_HISTORY_END_DATE';
const VALIDATE_TRANSACTION_HISTORY_TIME_PERIOD = 'VALIDATE_TRANSACTION_HISTORY_TIME_PERIOD';
const DEACTIVE_ACCOUNT = 'DEACTIVE_ACCOUNT';

export const getAccounts = () => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/account/GetAllCustomerAccounts',
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_ACCOUNTS,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getAccountById = (accountId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/account/GetAccountById/' + accountId,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_ACCOUNT,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getAccountCurrentMonthTransactionHistory = (productId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/Transaction/GetCurrentMonthProductTransactionHistory/' + productId,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_ACCOUNT_TRANSACTION_HISTORY,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getTransactionHistoryByTimePeriod = (startDate, endDate) => {
  return (dispatch, getState) => {
    const productId = getState().accounts.activeAccount.id;
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/Transaction/GetProductTransactionHistoryByTimePeriod',
      data: querystring.stringify({
        productId,
        startDate,
        endDate
      }),
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_ACCOUNT_TRANSACTION_HISTORY,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export function setActiveAccount(account) {
  return {
    type: SET_ACTIVE_ACCOUNT,
    payload: account
  }
}

export const setTransactionHistoryStartDate = (startDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ACCOUNT_TRANSACTION_HISTORY_START_DATE,
      payload: startDate
    });
    dispatch({
      type: VALIDATE_TRANSACTION_HISTORY_TIME_PERIOD
    });
  }
}

export const setTransactionHistoryEndDate = (endDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ACCOUNT_TRANSACTION_HISTORY_END_DATE,
      payload: endDate
    });
    dispatch({
      type: VALIDATE_TRANSACTION_HISTORY_TIME_PERIOD
    });
  }
}

export function deactiveAccount() {
  return {
    type: DEACTIVE_ACCOUNT,
  }
}

export const actions = {
  getAccounts,
  getAccountById,
  getAccountCurrentMonthTransactionHistory,
  setActiveAccount,
  setTransactionHistoryStartDate,
  setTransactionHistoryEndDate,
  deactiveAccount,
}

const ACTION_HANDLERS = {
  RECEIVED_ACCOUNT: (state, action) => {
    return {
      ...state,
      accounts: getUpdatedAccounts(state.accounts, action.payload)
    }
  },

  RECEIVED_ACCOUNTS: (state, action) => {
    return {
      ...state,
      accounts: action.payload
    }
  },

  SET_ACTIVE_ACCOUNT: (state, action) => {
    return {
      ...state,
      activeAccount: action.payload
    }
  },

  SET_ACCOUNT_TRANSACTION_HISTORY_START_DATE: (state, action) => {
    return {
      ...state,
      activeAccount: {
        ...state.activeAccount,
        transactionHistoryTimePeriod: {
          ...state.activeAccount.transactionHistoryTimePeriod,
          startDate: {
            value: action.payload,
            valid: action.payload > '0'
          }
        }
      }
    }
  },

  SET_ACCOUNT_TRANSACTION_HISTORY_END_DATE: (state, action) => {
    return {
      ...state,
      activeAccount: {
        ...state.activeAccount,
        transactionHistoryTimePeriod: {
          ...state.activeAccount.transactionHistoryTimePeriod,
          endDate: {
            value: action.payload,
            valid: state.activeAccount.transactionHistoryTimePeriod.startDate.value <= action.payload
          }
        }
      }
    }
  },

  VALIDATE_TRANSACTION_HISTORY_TIME_PERIOD: (state, action) => {
    return {
      ...state,
      activeAccount: {
        ...state.activeAccount,
        transactionHistoryTimePeriod: {
          ...state.activeAccount.transactionHistoryTimePeriod,
          valid: state.activeAccount.transactionHistoryTimePeriod.startDate &&
            state.activeAccount.transactionHistoryTimePeriod.startDate.valid &&
            state.activeAccount.transactionHistoryTimePeriod.endDate &&
            state.activeAccount.transactionHistoryTimePeriod.endDate.valid
        }
      }
    }
  },

  RECEIVED_ACCOUNT_TRANSACTION_HISTORY: (state, action) => {
    return {
      ...state,
      activeAccount: {
        ...state.activeAccount,
        transactionHistory: action.payload
      }
    }
  },

  DEACTIVE_ACCOUNT: (state, action) => {
    return {
      ...state,
      activeAccount: undefined
    }
  },

  REQUEST_ERROR: (state, action) => {
    return {
      ...state,
      returnedError: action.payload
    }
  },
}

export default function accountReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
