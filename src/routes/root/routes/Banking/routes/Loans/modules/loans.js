import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router'
import dateformat from 'dateformat';
import _ from 'underscore'
import { getAccountById } from 'routes/root/routes/Banking/routes/Accounts/modules/accounts';
import { getCreditCardById, getPrepaidCardById } from 'routes/root/routes/Banking/routes/Cards/modules/cards';

const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
const REQUESTING = 'REQUESTING';
const RECEIVE_LOANS = 'RECEIVE_LOANS';
const RECEIVE_LOAN = 'RECEIVE_LOAN';
const RECEIVE_LOAN_TRANSACTION_HISTORY = 'RECEIVE_LOAN_TRANSACTION_HISTORY';
const INIT_LOAN_TRANSACTION_FORM = 'INIT_LOAN_TRANSACTION_FORM';
const SET_LOAN_DEBIT_ACCOUNT = 'SET_LOAN_DEBIT_ACCOUNT';
const SET_LOAN_PAYMENT_AMOUNT = 'SET_LOAN_PAYMENT_AMOUNT';
const SET_LOAN_TRANSACTION_DATE = 'SET_LOAN_TRANSACTION_DATE';
const VALIDATE_LOANS_TRANSACTION_FORM = 'VALIDATE_LOANS_TRANSACTION_FORM';
const CLEAR_LOAN_TRANSACTION_FORM = 'CLEAR_LOAN_TRANSACTION_FORM';
const SUCCESSFUL_TRANSACTION = 'SUCCESSFUL_TRANSACTION';
const UNSUCCESSFUL_TRANSACTION = 'UNSUCCESSFUL_TRANSACTION';
const REQUEST_ERROR = 'REQUEST_ERROR';
const SET_ACTIVE_LOAN = 'SET_ACTIVE_LOAN';
const DEACTIVATE_LOAN = 'DEACTIVATE_LOAN';

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

export const getLoans = () => {
  return (dispatch, getState) => {
    dispatch({
      type: REQUESTING
    });

    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/loan/GetAllCustomerLoans',
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_LOANS,
        payload : response.data
      })
    })
    .catch(( exception )  => {
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

export const getLoanById = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: REQUESTING
    });

    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/loan/GetLoanById/' + id,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_LOAN,
        payload : response.data
      })
    })
    .catch(( exception )  => {
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

export const getLoanTransactionHistory = (loanId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/TransactionHistory/GetProductTransactionHistory/' + loanId,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_LOAN_TRANSACTION_HISTORY,
        payload : response.data
      })
    })
    .catch((exception) => {
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

export const loanPayment = () => {
  return (dispatch, getState) => {
    const transactionForm = getState().loans.transactionForm;
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/loan/LoanPayment',
      data: querystring.stringify({
        loanId: transactionForm.loanId,
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
        payload : '/banking/loans/loan'
      })
    })
    .then(() => getLoanById(transactionForm.loanId)(dispatch, getState))
    .then(() => {
      dispatch({
        type    : SET_ACTIVE_LOAN,
        payload : _.filter(getState().loans.loans, (loan) => loan.id == getState().loans.activeLoan.id)[0]
      })
    })
    .then(() => getLoanTransactionHistory(transactionForm.loanId)(dispatch, getState))
    .then(() => linkTo('/banking/loans/loan/payment/result'))
    .then(() => {
      switch (transactionForm.debitAccount.type) {
        case "isAccount":
          getAccountById(transactionForm.debitAccount.value)(dispatch, getState)
          break;
        case "isLoan":
          getLoanById(transactionForm.debitAccount.value)(dispatch, getState)
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
          linkToStart: '/banking/loans/loan/payment'
        }
      })
    })
    .then(() => linkTo('/banking/loans/loan/payment/result'))
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

export const setLoanPaymentAmount = (amount) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_LOAN_PAYMENT_AMOUNT,
      payload: amount
    });
    dispatch({
      type: VALIDATE_LOANS_TRANSACTION_FORM
    });
  }
}

export const setTransactionDate = (date, formattedDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_LOAN_TRANSACTION_DATE,
      payload: {
        date,
        formattedDate
      }
    });
    dispatch({
      type: VALIDATE_LOANS_TRANSACTION_FORM
    });
  }
}

export function setActiveLoan(loan){
  return {
    type: SET_ACTIVE_LOAN,
    payload: loan
  }
}

export function deactivateLoan(){
  return {
    type: DEACTIVATE_LOAN
  }
}

export const initLoanTransactionForm = () => {
  return {
    type: INIT_LOAN_TRANSACTION_FORM,
  }
}

export function clearLoanTransactionForm(){
  return {
    type: CLEAR_LOAN_TRANSACTION_FORM,
  }
}

export const actions = {
  linkTo,
  getLoans,
  getLoanById,
  setActiveLoan,
  deactivateLoan,
  initLoanTransactionForm,
  getLoanTransactionHistory,
  setDebitAccount,
  setLoanPaymentAmount,
  setTransactionDate,
  loanPayment,
  clearLoanTransactionForm,
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

  RECEIVE_LOANS: (state, action) => {
    return {
      ...state,
      loans: action.payload,
    }
  },

  RECEIVE_LOAN: (state, action) => {
    return {
      ...state,
      loans: _.map(state.loans, (loan) => loan.id == action.payload.id ? action.payload : loan)
    }
  },

  RECEIVE_LOAN_TRANSACTION_HISTORY: (state, action) => {
    return {
      ...state,
      activeLoan: {
        ...state.activeLoan,
        transactionHistory: action.payload
      }
    }
  },

  REQUEST_ERROR: (state, action) => {
    console.log(action.payload)
    return state;
  },

  INIT_LOAN_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        loanId: state.activeLoan.id,
        debitAccount: {},
        amount: {},
        currency: state.activeLoan.currency,
        date: {},
        shouldProcess: false
      }
    }
  },

  SET_LOAN_DEBIT_ACCOUNT: (state, action) => {
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

  SET_LOAN_PAYMENT_AMOUNT: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        amount: {
          value: action.payload,
          correct: action.payload > 0 &&
          (parseFloat(action.payload) <= state.activeLoan.nextInstallmentAmount ||
           parseFloat(action.payload) <= state.activeLoan.debt) &&
           parseFloat(action.payload) <= state.transactionForm.debitAccount.availableBalance
        }
      }
    }
  },

  SET_LOAN_TRANSACTION_DATE: (state, action) => {
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

  VALIDATE_LOANS_TRANSACTION_FORM: (state, action) => {
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

  CLEAR_LOAN_TRANSACTION_FORM: (state, action) => {
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

  SET_ACTIVE_LOAN: (state, action) => {
    return {
      ...state,
      activeLoan: action.payload
    }
  },

  DEACTIVATE_LOAN: (state, action) => {
    return {
      ...state,
      activeLoan: undefined
    }
  },
}

export default function loansReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
