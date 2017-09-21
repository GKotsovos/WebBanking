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
const SET_AVAILABLE_PAYMENT_CATEGORIES = 'SET_AVAILABLE_PAYMENT_CATEGORIES';
const SET_WAY_OF_SELECTION = 'SET_WAY_OF_SELECTION';
const CLEAR_PAYMENT_SELECTIONS = 'CLEAR_PAYMENT_SELECTIONS';
const SET_ACTIVE_PAYMENT_CATEGORY = 'SET_ACTIVE_PAYMENT_CATEGORY';
const SET_AVAILABLE_PAYMENT_SUBCATEGORIES = 'SET_AVAILABLE_PAYMENT_SUBCATEGORIES';
const SET_ACTIVE_PAYMENT_SUBCATEGORY = 'SET_ACTIVE_PAYMENT_SUBCATEGORY';
const SET_PAYMENT_TYPE = 'SET_PAYMENT_TYPE';
const SET_AVAILABLE_PAYMENT_METHODS = 'SET_AVAILABLE_PAYMENT_METHODS';
const SET_ACTIVE_PAYMENT_METHOD = 'SET_ACTIVE_PAYMENT_METHOD';
const SET_PAYMENT_CODE = 'SET_PAYMENT_CODE';
const SET_PAYMENT_AMOUNT = 'SET_PAYMENT_AMOUNT';
const SET_ASAP_PAYMENT = 'SET_ASAP_PAYMENT';
const SET_PAYMENT_TRANSACTION_DATE = 'SET_PAYMENT_TRANSACTION_DATE';
const VALIDATE_PAYMENT_TRANSACTION_FORM = 'VALIDATE_PAYMENT_TRANSACTION_FORM';
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
    if (_.isEmpty(getState().payments.transactionForm.paymentMethods)) {
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
      .then(() => {
        dispatch({
          type    : SET_AVAILABLE_PAYMENT_CATEGORIES,
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

export const setSearchPayment = (shouldSearch) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_WAY_OF_SELECTION,
      payload: shouldSearch
    });
    dispatch({
      type: CLEAR_PAYMENT_SELECTIONS,
    });
    dispatch({
      type: SET_AVAILABLE_PAYMENT_METHODS,
    });
    dispatch({
      type: VALIDATE_PAYMENT_TRANSACTION_FORM
    });
  }
}

export const setActivePaymentCategory = (category) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ACTIVE_PAYMENT_CATEGORY,
      payload: category
    });
    dispatch({
      type: SET_AVAILABLE_PAYMENT_SUBCATEGORIES,
    });
    if (getState().payments.transactionForm.availableSubCategories.length == 0) {
      dispatch({
        type: SET_AVAILABLE_PAYMENT_METHODS,
      });
      dispatch({
        type: SET_PAYMENT_TYPE,
        payload: 'thirdPartyPayment'
      });
    }
    dispatch({
      type: VALIDATE_PAYMENT_TRANSACTION_FORM
    });
  }
}

export const setActivePaymentSubCategory = (subCategory) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ACTIVE_PAYMENT_SUBCATEGORY,
      payload: subCategory
    });
    dispatch({
      type: SET_AVAILABLE_PAYMENT_METHODS,
    });
    dispatch({
      type: VALIDATE_PAYMENT_TRANSACTION_FORM
    });
  }
}

export const setActivePaymentMethod = (paymentMethod) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ACTIVE_PAYMENT_METHOD,
      payload: paymentMethod
    });
    let paymentType = '';
    switch (paymentMethod) {
      case 'ΚΑΡΤΑ AGILE BANK':
        paymentType = 'isCreditCardAgile';
        break;
      case 'ΚΑΡΤΑ ΑΛΛΗΣ ΤΡΑΠΕΖΗΣ':
        paymentType = 'isCreditCardThirdParty';
        break;
      case 'ΔΑΝΕΙΟ AGILE BANK':
        paymentType = 'isLoan';
        break;
      default:
        paymentType = 'thirdPartyPayment';
    }
    dispatch({
      type: SET_PAYMENT_TYPE,
      payload: paymentType
    });
    dispatch({
      type: SET_PAYMENT_CODE,
      payload: undefined
    });
    dispatch({
      type: VALIDATE_PAYMENT_TRANSACTION_FORM
    });
  }
}

export const payment = (transactionForm) => {
  let bank = '';
  const paymentMethod = transactionForm.paymentSelections.paymentMethod;
  let beneficiary = paymentMethod;
  if (paymentMethod.toUpperCase().includes('AGILE')) {
    bank = 'AGILE BANK';
    beneficiary = 'AGILE BANK';
  }

  let creditProductType = '';
  if (paymentMethod.includes('ΚΑΡΤΑ')) {
    creditProductType = 'isCreditCard';
  } else if (paymentMethod.includes('ΔΑΝΕΙΟ')) {
    creditProductType = 'isLoan';
  }
  let url = 'http://localhost:26353/api/Payment/ThirdPartyPayment';
  if (bank == 'AGILE BANK' && creditProductType == 'isCreditCard') {
    url = 'http://localhost:26353/api/Payment/CreditCardPayment';
  } else if (bank == 'AGILE BANK' && creditProductType == 'isLoan') {
    url = 'http://localhost:26353/api/Payment/LoanPayment';
  }
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url,
      data: querystring.stringify({
        debitProductId: transactionForm.debitAccount.value,
        debitProductType: transactionForm.debitAccount.type,
        creditProductId: transactionForm.paymentCode.value,
        creditProductType,
        beneficiary,
        bank,
        isPayment: true,
        amount: Number(transactionForm.amount.value).toLocaleString(undefined, {minimumFractionDigits: 2}).replace('.', ''),
        currency: transactionForm.currency.value,
        date: transactionForm.date.value,
        expenses: 0,
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

export const setPaymentCode = (paymentCode) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PAYMENT_CODE,
      payload: paymentCode
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

export const setAsapTransaction = (isAsap) => {
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

export const actions = {
  payment,
  getPaymentMethods,
  setDebitAccount,
  setSearchPayment,
  setActivePaymentCategory,
  setActivePaymentSubCategory,
  setActivePaymentMethod,
  setPaymentCode,
  setPaymentAmount,
  setAsapTransaction,
  setTransactionDate,
  initPaymentTransactionForm,
}

const ACTION_HANDLERS = {

  INITIAL_STATE: (state, action) => {
    return {};
  },

  INIT_PAYMENT_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        debitAccount: {},
        currency: {},
        shouldSearch: false,
        availableSubCategories: [],
        availablePaymentMethods: [],
        paymentSelections: {},
        amount: {},
        paymentCode: {},
        charges: 0,
        date: {},
        shouldProcess: false
      }
    }
  },

  SET_PAYMENT_METHODS: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        paymentMethods: _.groupBy(action.payload.data, 'category')
      }
    }
  },

  SET_AVAILABLE_PAYMENT_CATEGORIES: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        availableCategories: _.keys(state.transactionForm.paymentMethods),
      }
    }
  },

  SET_WAY_OF_SELECTION: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        shouldSearch: action.payload,
      }
    }
  },

  CLEAR_PAYMENT_SELECTIONS: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        paymentSelections: {},
      }
    }
  },

  SET_ACTIVE_PAYMENT_CATEGORY: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        paymentSelections: {
          ...state.transactionForm.paymentSelections,
          category: action.payload,
          subCategory: undefined,
          paymentMethod: undefined,
          paymentType: undefined,
        },
        availableSubCategories: [],
        availablePaymentMethods: [],
      }
    }
  },

  SET_AVAILABLE_PAYMENT_SUBCATEGORIES: (state, action) => {
    const subCategories =
      _.chain(state.transactionForm.paymentMethods[state.transactionForm.paymentSelections.category])
       .filter((payment) => payment.subCategory != " ")
       .map((payment) => payment.subCategory)
       .uniq()
       .value();
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        availableSubCategories: subCategories
      }
    }
  },

  SET_ACTIVE_PAYMENT_SUBCATEGORY: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        paymentSelections: {
          ...state.transactionForm.paymentSelections,
          subCategory: action.payload,
          paymentMethod: undefined,
        }
      }
    }
  },

  SET_PAYMENT_TYPE: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        paymentSelections: {
          ...state.transactionForm.paymentSelections,
          paymentType: action.payload,
        }
      }
    }
  },

  SET_AVAILABLE_PAYMENT_METHODS: (state, action) => {
    let payments = [];
    if (state.transactionForm.shouldSearch) {
      payments = _.chain(state.transactionForm.paymentMethods)
        .map((paymentMethod) => _.map(paymentMethod, (method) => method.name))
        .flatten()
        .value();
    } else if (state.transactionForm.availableSubCategories.length > 0) {
      payments =
        _.chain(state.transactionForm.paymentMethods[state.transactionForm.paymentSelections.category])
         .filter((payment) => payment.subCategory == state.transactionForm.paymentSelections.subCategory)
         .map((payment) => payment.name)
         .value();
    } else {
      payments =
        _.chain(state.transactionForm.paymentMethods[state.transactionForm.paymentSelections.category])
         .filter((payment) => payment.category == state.transactionForm.paymentSelections.category)
         .map((payment) => payment.name)
         .value();
    }
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        availablePaymentMethods: payments
      }
    }
  },

  SET_ACTIVE_PAYMENT_METHOD: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        paymentSelections: {
          ...state.transactionForm.paymentSelections,
          paymentMethod: action.payload
        }
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

  SET_PAYMENT_CODE: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        paymentCode: {
          value: action.payload,
          correct: !!action.payload == undefined ? undefined : true,
          //TODO
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
        state.transactionForm.paymentSelections.paymentType != '' &&
        state.transactionForm.amount.correct &&
        state.transactionForm.paymentCode.correct &&
        state.transactionForm.date.correct &&
        state.transactionForm.currency.correct
      }
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
