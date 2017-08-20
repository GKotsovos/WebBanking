import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router';
import dateformat from 'dateformat';
import _ from 'underscore'
import { getAccountById } from 'routes/root/routes/Banking/routes/Accounts/modules/accounts';
import { getCreditCardById, getPrepaidCardById } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import { getTransferById } from 'routes/root/routes/Banking/routes/Transfers/modules/transfers';

const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
const INIT_TRANSFER_TRANSACTION_FORM = 'INIT_TRANSFER_TRANSACTION_FORM';
const SET_TRANSFER_DEBIT_ACCOUNT = 'SET_TRANSFER_DEBIT_ACCOUNT';
const SET_TRANSFER_CREDIT_ACCOUNT = 'SET_TRANSFER_CREDIT_ACCOUNT';
const SET_TRANSFER_AMOUNT = 'SET_TRANSFER_AMOUNT';
const SET_TRANSFER_TRANSACTION_DATE = 'SET_TRANSFER_TRANSACTION_DATE';
const VALIDATE_TRANSFER_TRANSACTION_FORM = 'VALIDATE_TRANSFER_TRANSACTION_FORM';
const CLEAR_TRANSFER_TRANSACTION_FORM = 'CLEAR_TRANSFER_TRANSACTION_FORM';
const SUCCESSFUL_TRANSACTION = 'SUCCESSFUL_TRANSACTION';
const UNSUCCESSFUL_TRANSACTION = 'UNSUCCESSFUL_TRANSACTION';

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

export const transfer = () => {
  return (dispatch, getState) => {
    const transactionForm = getState().transfers.transactionForm;
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/transfer/Transfer',
      data: querystring.stringify({
        transferId: transactionForm.transferId,
        debitAccount: transactionForm.debitAccount.value,
        debitAccountType: transactionForm.debitAccount.type,
        amount: transactionForm.amount.value,
        currency: transactionForm.currency,
        date: transactionForm.date.value
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_TRANSACTION,
        payload : '/banking/transfers'
      })
    })
    .then(() => getTransferById(transactionForm.transferId)(dispatch, getState))
    .then(() => {
      dispatch({
        type    : SET_ACTIVE_LOAN,
        payload : _.filter(getState().transfers.transfers, (transfer) => transfer.id == getState().transfers.activeTransfer.id)[0]
      })
    })
    .then(() => getTransferTransactionHistory(transactionForm.transferId)(dispatch, getState))
    .then(() => linkTo('/banking/transfers/result'))
    .then(() => {
      switch (transactionForm.debitAccount.type) {
        case "isAccount":
          getAccountById(transactionForm.debitAccount.value)(dispatch, getState)
          break;
        case "isTransfer":
          getTransferById(transactionForm.debitAccount.value)(dispatch, getState)
          break;
        case "isCreditCard":
          getCreditCardById(transactionForm.debitAccount.value)(dispatch, getState)
          break;
        case "isPrepaidCard":
          getPrepaidCardById(transactionForm.debitAccount.value)(dispatch, getState)
          break;
      }
    })
    .catch((exception) => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : LOG_OUT,
      }) :
      dispatch({
        type    : UNSUCCESSFUL_TRANSACTION,
        payload : {
          exception,
          linkToStart: '/banking/transfer/'
        }
      })
    })
    .then(() => linkTo('/banking/transfers/result'))
  }
}

export const setDebitAccount = (debitAccount, debitAccountType) => {
  return (dispatch, getState) => {

    let availableBalance = 0;

    switch (debitAccountType) {
      case "isAccount":
        availableBalance = _.chain(getState().accounts.accounts)
          .filter((account) => account.iban == debitAccount)
          .first()
          .value().ledgerBalance;
        break;
      case "isLoan":
        availableBalance = _.chain(getState().loans.loans)
          .filter((loan) => loan.id == debitAccount)
          .first()
          .value().availableBalance;
        break;
      case "isCreditCard":
        availableBalance = _.chain(getState().cards.creditCards)
          .filter((creditCard) => creditCard.id == debitAccount)
          .first()
          .value().availableLimit;
        break;
      case "isPrepaidCard":
        availableBalance = _.chain(getState().cards.prepaidCards)
          .filter((prepaidCard) => prepaidCard.id == debitAccount)
          .first()
          .value().availableLimit;
        break;
    }

    dispatch({
      type: SET_LOAN_DEBIT_ACCOUNT,
      payload: {
        debitAccount,
        debitAccountType,
        availableBalance,
      }
    });
    dispatch({
      type: VALIDATE_LOANS_TRANSACTION_FORM
    });
  }
}

export const setTransferAmount = (amount) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER__AMOUNT,
      payload: amount
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const setTransactionDate = (date, formattedDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_TRANSACTION_DATE,
      payload: {
        date,
        formattedDate
      }
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const initTransferTransactionForm = () => {
  return {
    type: INIT_TRANSFER_TRANSACTION_FORM,
  }
}

export function clearTransferTransactionForm(){
  return {
    type: CLEAR_TRANSFER_TRANSACTION_FORM,
  }
}

export const actions = {
  linkTo,
  initTransferTransactionForm,
  setDebitAccount,
  setTransferAmount,
  setTransactionDate,
  transfer,
  clearTransferTransactionForm,
}

const ACTION_HANDLERS = {

  INITIAL_STATE: (state, action) => {
    return {};
  },

  INIT_TRANSFER_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        // transferId: state.activeTransfer.id,
        debitAccount: {},
        amount: {},
        // currency: state.activeTransfer.currency,
        date: {},
        shouldProcess: false
      }
    }
  },

  SET_TRANSFER_DEBIT_ACCOUNT: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        debitAccount: {
          value: action.payload.debitAccount,
          availableBalance: action.payload.availableBalance,
          correct: action.payload != "",
          type: action.payload.debitAccountType
        }
      }
    }
  },

  SET_TRANSFER__AMOUNT: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        amount: {
          value: action.payload,
          correct: action.payload > 0 &&
          (parseFloat(action.payload) <= state.activeTransfer.nextInstallmentAmount ||
           parseFloat(action.payload) <= state.activeTransfer.debt) &&
           (parseFloat(action.payload)) <= state.transactionForm.debitAccount.availableBalance
        }
      }
    }
  },

  SET_TRANSFER_TRANSACTION_DATE: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        viewDate: action.payload.formattedDate,
        date: {
          value: action.payload.date,
          correct: new Date(action.payload.date).setHours(0,0,0,0) >= new Date(dateformat()).setHours(0,0,0,0)
        }
      }
    }
  },

  VALIDATE_TRANSFER_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        shouldProcess: state.transactionForm.debitAccount.correct &&
        state.transactionForm.amount.correct &&
        state.transactionForm.date.correct
      }
    }
  },

  CLEAR_TRANSFER_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: undefined
    }
  },

  SUCCESSFUL_TRANSACTION: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        result: true,
        linkToStart: action.payload
      }
    }
  },

  UNSUCCESSFUL_TRANSACTION: (state, action) => {
    console.log(action.payload.exception)
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        result: false,
        errorMessage: action.payload.exception.response.data,
        linkToStart: action.payload.linkToStart
      }
    }
  },
}

export default function transfersReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
