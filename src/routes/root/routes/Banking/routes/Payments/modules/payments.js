import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router';
import dateformat from 'dateformat';
import _ from 'underscore'
import { getAccountById } from 'routes/root/routes/Banking/routes/Accounts/modules/accounts';
import { getCreditCardById, getPrepaidCardById } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import { getLoanById } from 'routes/root/routes/Banking/routes/Loans/modules/loans';

const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
const INIT_PAYMENT_TRANSACTION_FORM = 'INIT_PAYMENT_TRANSACTION_FORM';
const SET_PAYMENT_DEBIT_ACCOUNT = 'SET_PAYMENT_DEBIT_ACCOUNT';
const SET_PAYMENT_CURRENCY = 'SET_PAYMENT_CURRENCY';
const FETCHING_PAYMENT_METHODS = 'FETCHING_PAYMENT_METHODS';
const SET_PAYMENT_METHODS = 'SET_PAYMENT_METHODS';
const SET_PAYMENT_CODE = 'SET_PAYMENT_CODE';
const SET_PAYMENT_AMOUNT = 'SET_PAYMENT_AMOUNT';
const SET_ASAP_PAYMENT = 'SET_ASAP_PAYMENT';
const SET_PAYMENT_TRANSACTION_DATE = 'SET_PAYMENT_TRANSACTION_DATE';
const VALIDATE_PAYMENT_TRANSACTION_FORM = 'VALIDATE_PAYMENT_TRANSACTION_FORM';
const CLEAR_PAYMENT_TRANSACTION_FORM = 'CLEAR_PAYMENT_TRANSACTION_FORM';
const SUCCESSFUL_TRANSACTION = 'SUCCESSFUL_TRANSACTION';
const UNSUCCESSFUL_TRANSACTION = 'UNSUCCESSFUL_TRANSACTION';

const linkTo = (route) => {
  localStorage.setItem('path', route);
  browserHistory.push(route);
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE_ACTIVE_TAB,
      payload: route
    });
  }
}

export const getPaymentMethods = () => {
  return (dispatch, getState) => {
    if (_.isEmpty(getState().payments.transactionForm.organizations)) {
      dispatch({
        type    : FETCHING_PAYMENT_METHODS
      });

      return axios({
        method: 'get',
        url: 'http://localhost:26353/api/Payment/GetPaymentMethods',
        withCredentials: true,
      })
      .then((response) => {
        dispatch({
          type    : SET_PAYMENT_METHODS,
          payload : response
        })
      })
      .catch((exception) => {
        !_.isEmpty(exception.response) && exception.response.status == 401 ?
        dispatch({
          type    : 'LOG_OUT',
        }) :
        dispatch({
          type    : UNSUCCESSFUL_TRANSACTION,
          payload : {
            exception,
            linkToStart: '/banking/payments'
          }
        })
      })
    }
  }
}

export const payment = (transactionForm) => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/Payment/ThirdPartyPayment',
      data: querystring.stringify({
        debitProductId: transactionForm.debitAccount.value,
        debitProductType: transactionForm.debitAccount.type,
        creditProductId: '',
        creditProductType: '',
        beneficiary: '',
        bank: '',
        isPayment: false,
        amount: Number(transactionForm.amount.value).toLocaleString(undefined, {minimumFractionDigits: 2}).replace('.', ''),
        currency: transactionForm.currency.value,
        date: transactionForm.date.value,
        expenses: transactionForm.expenses,
        comments: '',
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_TRANSACTION,
        payload : '/banking/payments'
      })
    })
    .then(() => linkTo('/banking/payments/result'))
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
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : UNSUCCESSFUL_TRANSACTION,
        payload : {
          exception,
          linkToStart: '/banking/payments'
        }
      })
    })
  }
}

export const setDebitAccount = (debitAccount, debitAccountType) => {
  return (dispatch, getState) => {

    let innerDebitAccount = '';

    switch (debitAccountType) {
      case "isAccount":
        innerDebitAccount =  _.chain(getState().accounts.accounts)
          .filter((account) => account.id == debitAccount)
          .first()
          .value();
        break;
      case "isLoan":
        innerDebitAccount = _.chain(getState().loans.loans)
          .filter((loan) => loan.id == debitAccount)
          .first()
          .value();
        break;
      case "isCreditCard":
        innerDebitAccount = _.chain(getState().cards.creditCards)
          .filter((creditCard) => creditCard.id == debitAccount)
          .first()
          .value();
        break;
      case "isPrepaidCard":
        innerDebitAccount = _.chain(getState().cards.prepaidCards)
          .filter((prepaidCard) => prepaidCard.id == debitAccount)
          .first()
          .value();
        break;
    }
    const availableBalance = innerDebitAccount.availableBalance
    const currency = innerDebitAccount.currency

    dispatch({
      type: SET_PAYMENT_DEBIT_ACCOUNT,
      payload: {
        debitAccount,
        debitAccountType,
        availableBalance,
      }
    });
    dispatch({
      type: SET_PAYMENT_CURRENCY,
      payload: currency,
    });
    dispatch({
      type: VALIDATE_PAYMENT_TRANSACTION_FORM
    });
  }
}

export const setPaymentAmount = (amount) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PAYMENT_AMOUNT,
      payload: amount
    });
    dispatch({
      type: VALIDATE_PAYMENT_TRANSACTION_FORM
    });
  }
}

export const setAsapPayment = (isAsap) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ASAP_PAYMENT,
      payload: isAsap
    });
    dispatch({
      type: VALIDATE_PAYMENT_TRANSACTION_FORM
    });
  }
}

export const setTransactionDate = (date, formattedDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PAYMENT_TRANSACTION_DATE,
      payload: {
        date,
        formattedDate
      }
    });
    dispatch({
      type: VALIDATE_PAYMENT_TRANSACTION_FORM
    });
  }
}

export const initPaymentTransactionForm = () => {
  return (dispatch, getState) => {
    dispatch({
      type: INIT_PAYMENT_TRANSACTION_FORM,
    })
    getPaymentMethods()(dispatch, getState)
  }
}

export const clearPaymentTransactionForm = () => {
  return {
    type: CLEAR_PAYMENT_TRANSACTION_FORM,
  }
}

export const actions = {
  payment,
  getPaymentMethods,
  setDebitAccount,
  setPaymentAmount,
  setAsapPayment,
  setTransactionDate,
  initPaymentTransactionForm,
  clearPaymentTransactionForm,
}

const ACTION_HANDLERS = {

  INITIAL_STATE: (state, action) => {
    return {};
  },

  INIT_PAYMENT_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        debitAccount: {},
        amount: {},
        charges: {},
        date: {},
        shouldProcess: false
      }
    }
  },

  SET_PAYMENT_METHODS: (state, action) => {
    const categories = _.chain(action.payload.data)
                        .groupBy('category')
                        .keys()
                        .value();
                        
    const subCategories =
      _.chain(categories['ΛΟΙΠΩΝ ΕΤΑΙΡΙΩΝ'])
       .filter((payment) => payment.subCategory != " ")
       .map((payment) => payment.subCategory)
       .uniq()
       .value();

    const payments =
      _.chain(categories['ΛΟΙΠΩΝ ΕΤΑΙΡΙΩΝ'])
       .filter((payment) => payment.subCategory == subCategories[2])
       .map((payment) => payment.name)
       .value();

    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        paymentMethods: _.groupBy(action.payload.data, 'category')
      }
    }
  },

  SET_PAYMENT_DEBIT_ACCOUNT: (state, action) => {
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

  SET_PAYMENT_CURRENCY: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        currency: {
          value: action.payload,
          correct: action.payload != "",
        }
      }
    }
  },

  SET_PAYMENT_AMOUNT: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        amount: {
          value: action.payload,
          correct: action.payload > 0 &&
           (parseFloat(action.payload)) <= state.transactionForm.debitAccount.availableBalance
        }
      }
    }
  },

  SET_ASAP_PAYMENT: (state, action) => {

    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        date: {
          ...state.transactionForm.date,
          asapTransaction: action.payload,
          correct: action.payload,
          value: undefined,
          asapText: 'ΑΜΕΣΑ'
        }
      }
    }
  },

  SET_PAYMENT_TRANSACTION_DATE: (state, action) => {
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
          correct: new Date(action.payload.date).setHours(0,0,0,0) >= new Date(dateformat()).setHours(0,0,0,0)
        }
      }
    }
  },

  VALIDATE_PAYMENT_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        shouldProcess: state.transactionForm.debitAccount.correct &&
        state.transactionForm.creditAccount.correct &&
        ((state.transactionForm.bankType.value == 'agileBank' &&
        state.transactionForm.creditAccount.type != 'other') ||
        state.transactionForm.fullName.correct) &&
        state.transactionForm.bank.correct &&
        state.transactionForm.bankType.correct &&
        state.transactionForm.amount.correct &&
        (state.transactionForm.bankType.value == 'agileBank' ||
        state.transactionForm.chargesBeneficiary.correct) &&
        state.transactionForm.comments.correct &&
        state.transactionForm.date.correct
      }
    }
  },

  CLEAR_PAYMENT_TRANSACTION_FORM: (state, action) => {
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

export default function paymentsReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
