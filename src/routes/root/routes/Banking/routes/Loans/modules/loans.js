import axios from 'axios';
import querystring from 'querystring';
import { linkTo } from 'routes/root/routes/Banking/modules/banking';
import {
  getDebitAccount,
  getDebitAccountAvailableBalance,
  isValidInstallmentPaymentAmount,
  isValidDate,
  isValidInstallmentPaymentForm,
  getImmediateText,
} from 'routes/root/routes/Banking/routes/utils/commonUtils';
import {
  handleRequestException,
  handleTransactionException
} from 'routes/root/routes/Banking/routes/utils/commonActions';
import {
  getActiveLoan,
  getUpdatedLoans
 } from '../utils/loanUtils'

const RECEIVED_LOANS = 'RECEIVED_LOANS';
const RECEIVED_LOAN = 'RECEIVED_LOAN';
const RECEIVED_LOAN_TRANSACTION_HISTORY = 'RECEIVED_LOAN_TRANSACTION_HISTORY';
const INIT_LOAN_TRANSACTION_FORM = 'INIT_LOAN_TRANSACTION_FORM';
const SET_LOAN_DEBIT_ACCOUNT = 'SET_LOAN_DEBIT_ACCOUNT';
const SET_LOAN_PAYMENT_AMOUNT = 'SET_LOAN_PAYMENT_AMOUNT';
const SET_ASAP_LOAN_TRANSACTION_DATE = 'SET_ASAP_LOAN_TRANSACTION_DATE';
const SET_LOAN_TRANSACTION_DATE = 'SET_LOAN_TRANSACTION_DATE';
const VALIDATE_LOANS_TRANSACTION_FORM = 'VALIDATE_LOANS_TRANSACTION_FORM';
const CLEAR_LOAN_TRANSACTION_FORM = 'CLEAR_LOAN_TRANSACTION_FORM';
const SUCCESSFUL_TRANSACTION = 'SUCCESSFUL_TRANSACTION';
const UNSUCCESSFUL_TRANSACTION = 'UNSUCCESSFUL_TRANSACTION';
const REQUEST_ERROR = 'REQUEST_ERROR';
const SET_ACTIVE_LOAN = 'SET_ACTIVE_LOAN';
const SET_LOAN_TRANSACTION_HISTORY_START_DATE = 'SET_LOAN_TRANSACTION_HISTORY_START_DATE';
const SET_LOAN_TRANSACTION_HISTORY_END_DATE = 'SET_LOAN_TRANSACTION_HISTORY_END_DATE';
const VALIDATE_LOAN_TRANSACTION_HISTORY_TIME_PERIOD = 'VALIDATE_LOAN_TRANSACTION_HISTORY_TIME_PERIOD';
const DEACTIVATE_LOAN = 'DEACTIVATE_LOAN';

export const getLoans = () => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/loan/GetAllCustomerLoans',
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_LOANS,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getLoanById = (id) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/loan/GetLoanById/' + id,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_LOAN,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getLoanTransactionHistory = (loanId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/Transaction/GetCurrentMonthProductTransactionHistory/' + loanId,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_LOAN_TRANSACTION_HISTORY,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getTransactionHistoryByTimePeriod = (startDate, endDate) => {
  return (dispatch, getState) => {
    const productId = getState().loans.activeLoan.id;
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
        type    : RECEIVED_LOAN_TRANSACTION_HISTORY,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const loanPayment = () => {
  return (dispatch, getState) => {
    const transactionForm = getState().loans.transactionForm;
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/Payment/LoanPayment',
      data: querystring.stringify({
        debitProductId: transactionForm.debitAccount.value,
        debitProductType: transactionForm.debitAccount.type,
        creditProductId: transactionForm.loanId,
        creditProductType: 'isLoan',
        beneficiary: 'AGILE BANK',
        bank: 'AGILE BANK',
        isTransfer: false,
        amount: Number(transactionForm.amount.value).toLocaleString('el-GR', {minimumFractionDigits: 2}).replace('.', ''),
        currency: transactionForm.currency,
        date: transactionForm.date.value,
        isAsap: transactionForm.date.asapTransaction,
        expenses: 0,
        comments: '',
        language: getState().root.language,
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
        payload : getActiveLoan(getState().loans.loans, getState().loans.activeLoan.id)
      })
    })
    .then(() => linkTo('/banking/loans/loan/payment/result'))
    .then(() => getDebitAccount(transactionForm.debitAccount.type, transactionForm.debitAccount.value))    .catch((exception) => handleTransactionException(exception, '/banking/loans/loan/payment', dispatch))
    .then(() => linkTo('/banking/loans/loan/payment/result'))
  }
}

export const setDebitAccount = (debitAccount, debitAccountType) => {
  return (dispatch, getState) => {
    const availableBalance = getDebitAccountAvailableBalance(debitAccountType, debitAccount, getState())
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

export const setAsapLoanTransaction = (isAsap) => {
  return (dispatch, getState) => {
    const immediateText = getImmediateText(getState().root.language);
    dispatch({
      type: SET_ASAP_LOAN_TRANSACTION_DATE,
      payload: {
        isAsap,
        immediateText
      }
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

export const setTransactionHistoryStartDate = (startDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_LOAN_TRANSACTION_HISTORY_START_DATE,
      payload: startDate
    });
    dispatch({
      type: VALIDATE_LOAN_TRANSACTION_HISTORY_TIME_PERIOD
    });
  }
}

export const setTransactionHistoryEndDate = (endDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_LOAN_TRANSACTION_HISTORY_END_DATE,
      payload: endDate
    });
    dispatch({
      type: VALIDATE_LOAN_TRANSACTION_HISTORY_TIME_PERIOD
    });
  }
}

export function deactivateLoan() {
  return {
    type: DEACTIVATE_LOAN
  }
}

export const initLoanTransactionForm = () => {
  return {
    type: INIT_LOAN_TRANSACTION_FORM,
  }
}

export function clearLoanTransactionForm() {
  return {
    type: CLEAR_LOAN_TRANSACTION_FORM,
  }
}

export const actions = {
  linkTo,
  getLoans,
  getLoanById,
  setActiveLoan,
  setTransactionHistoryStartDate,
  setTransactionHistoryEndDate,
  deactivateLoan,
  initLoanTransactionForm,
  getLoanTransactionHistory,
  setDebitAccount,
  setLoanPaymentAmount,
  setAsapLoanTransaction,
  setTransactionDate,
  loanPayment,
  clearLoanTransactionForm,
}

const ACTION_HANDLERS = {
  RECEIVED_LOANS: (state, action) => {
    return {
      ...state,
      loans: action.payload,
    }
  },

  RECEIVED_LOAN: (state, action) => {
    return {
      ...state,
      loans: getUpdatedLoans(state.loans, action.payload)
    }
  },

  SET_ACTIVE_LOAN: (state, action) => {
    return {
      ...state,
      activeLoan: action.payload
    }
  },

  SET_LOAN_TRANSACTION_HISTORY_START_DATE: (state, action) => {
    return {
      ...state,
      activeLoan: {
        ...state.activeLoan,
        transactionHistoryTimePeriod: {
          ...state.activeLoan.transactionHistoryTimePeriod,
          startDate: {
            value: action.payload,
            valid: action.payload > '0'
          }
        }
      }
    }
  },

  SET_LOAN_TRANSACTION_HISTORY_END_DATE: (state, action) => {
    return {
      ...state,
      activeLoan: {
        ...state.activeLoan,
        transactionHistoryTimePeriod: {
          ...state.activeLoan.transactionHistoryTimePeriod,
          endDate: {
            value: action.payload,
            valid: state.activeLoan.transactionHistoryTimePeriod.startDate.value <= action.payload
          }
        }
      }
    }
  },

  VALIDATE_LOAN_TRANSACTION_HISTORY_TIME_PERIOD: (state, action) => {
    return {
      ...state,
      activeLoan: {
        ...state.activeLoan,
        transactionHistoryTimePeriod: {
          ...state.activeLoan.transactionHistoryTimePeriod,
          valid: state.activeLoan.transactionHistoryTimePeriod.startDate &&
            state.activeLoan.transactionHistoryTimePeriod.startDate.valid &&
            state.activeLoan.transactionHistoryTimePeriod.endDate &&
            state.activeLoan.transactionHistoryTimePeriod.endDate.valid
        }
      }
    }
  },

  DEACTIVATE_LOAN: (state, action) => {
    return {
      ...state,
      activeLoan: undefined
    }
  },

  RECEIVED_LOAN_TRANSACTION_HISTORY: (state, action) => {
    return {
      ...state,
      activeLoan: {
        ...state.activeLoan,
        transactionHistory: action.payload
      }
    }
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
          correct: isValidInstallmentPaymentAmount(state.activeLoan, action.payload, state.transactionForm.debitAccount.availableBalance)
        }
      }
    }
  },

  SET_ASAP_LOAN_TRANSACTION_DATE: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        date: {
          ...state.transactionForm.date,
          asapTransaction: action.payload.isAsap,
          correct: action.payload.isAsap,
          value: undefined,
          asapText: action.payload.immediateText
        }
      }
    }
  },

  SET_LOAN_TRANSACTION_DATE: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        date: {
          ...state.transactionForm.date,
          value: action.payload.date,
          asapTransaction: false,
          asapText: undefined,
          view: action.payload.formattedDate,
          correct: isValidDate(action.payload.date)
        }
      }
    }
  },

  VALIDATE_LOANS_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        shouldProcess: isValidInstallmentPaymentForm(state.transactionForm)
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

  REQUEST_ERROR: (state, action) => {
    return {
      ...state,
      returnedError: action.payload
    }
  },
}

export default function loansReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
