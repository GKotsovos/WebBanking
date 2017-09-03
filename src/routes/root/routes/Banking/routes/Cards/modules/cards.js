import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router'
import dateformat from 'dateformat';
import _ from 'underscore'
import { getAccountById } from 'routes/root/routes/Banking/routes/Accounts/modules/accounts';
import { getLoanById } from 'routes/root/routes/Banking/routes/Loans/modules/loans';

const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
const REQUESTING = 'REQUESTING';
const RECEIVE_CARDS = 'RECEIVE_CARDS';
const RECEIVE_DEBIT_CARD = 'RECEIVE_DEBIT_CARD';
const RECEIVE_CREDIT_CARD = 'RECEIVE_CREDIT_CARD';
const RECEIVE_PREPAID_CARD = 'RECEIVE_PREPAID_CARD';
const RECEIVE_CARD_TRANSACTION_HISTORY = 'RECEIVE_CARD_TRANSACTION_HISTORY';
const DELETE_LINKED_PRODUCT = 'DELETE_LINKED_PRODUCT';
const INIT_CARD_TRANSACTION_FORM = 'INIT_CARD_TRANSACTION_FORM';
const SET_CARD_DEBIT_ACCOUNT = 'SET_CARD_DEBIT_ACCOUNT';
const SET_CREDIT_CARD_PAYMENT_AMOUNT = 'SET_CREDIT_CARD_PAYMENT_AMOUNT';
const SET_PREPAID_CARD_LOAD_AMOUNT = 'SET_PREPAID_CARD_LOAD_AMOUNT';
const SET_ASAP_CARD_TRANSACTION_DATE = 'SET_ASAP_CARD_TRANSACTION_DATE';
const SET_CARD_TRANSACTION_DATE = 'SET_CARD_TRANSACTION_DATE';
const VALIDATE_CARDS_TRANSACTION_FORM = 'VALIDATE_CARDS_TRANSACTION_FORM';
const CLEAR_CARD_TRANSACTION_FORM = 'CLEAR_CARD_TRANSACTION_FORM';
const SUCCESSFUL_TRANSACTION = 'SUCCESSFUL_TRANSACTION';
const UNSUCCESSFUL_TRANSACTION = 'UNSUCCESSFUL_TRANSACTION';
const REQUEST_ERROR = 'REQUEST_ERROR';
const SET_ACTIVE_CARD = 'SET_ACTIVE_CARD';
const DEACTIVATE_CARD = 'DEACTIVATE_CARD';

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
    .catch(( exception )  => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : REQUEST_ERROR,
        payload : exception
      })
    })
  }
}

export const getDebitCardById = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: REQUESTING
    });

    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/card/GetDebitCardWithLinkedProductsById/' + getState().cards.activeCard.id,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_DEBIT_CARD,
        payload : response.data
      })
    })
    .catch(( exception )  => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : REQUEST_ERROR,
        payload : exception
      })
    })
  }
}

export const getCreditCardById = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: REQUESTING
    });

    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/card/GetCreditCardById/' + id,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_CREDIT_CARD,
        payload : response.data
      })
    })
    .catch(( exception )  => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : REQUEST_ERROR,
        payload : exception
      })
    })
  }
}

export const getPrepaidCardById = (id) => {
  return (dispatch, getState) => {
    dispatch({
      type: REQUESTING
    });

    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/card/GetPrepaidCardById/' + id,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_PREPAID_CARD,
        payload : response.data
      })
    })
    .catch(( exception )  => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : REQUEST_ERROR,
        payload : exception
      })
    })
  }
}

export const getCardTransactionHistory = (productId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/Transaction/GetProductTransactionHistory/' + productId,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_CARD_TRANSACTION_HISTORY,
        payload : response.data
      })
    })
    .catch((exception) => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : REQUEST_ERROR,
        payload : exception
      })
    })
  }
}

export const deleteLinkedProduct = (productId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/card/DeleteLinkedProduct',
      data: querystring.stringify({
        cardId: getState().cards.activeCard.id,
        productId
      }),
      withCredentials: true,
    })
    .then(() => getDebitCardById(productId)(dispatch, getState))
    .catch((exception) => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : REQUEST_ERROR,
        payload : exception
      })
    })
  }
}

export const creditCardPayment = () => {
  return (dispatch, getState) => {
    const transactionForm = getState().cards.transactionForm;
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/Payment/CreditCardPayment',
      data: querystring.stringify({
        debitProductId: transactionForm.debitAccount.value,
        debitProductType: transactionForm.debitAccount.type,
        creditProductId: transactionForm.cardId,
        creditProductType: 'isCreditCard',
        beneficiary: 'AGILE BANK',
        bank: 'AGILE BANK',
        isTransfer: false,
        amount: Number(transactionForm.amount.value).toLocaleString(undefined, {minimumFractionDigits: 2}).replace('.', ''),
        currency: transactionForm.currency,
        date: transactionForm.date.value,
        expenses: transactionForm.expenses,
        comments: '',
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_TRANSACTION,
        payload : '/banking/cards/creditcards/card'
      })
    })
    .then(() => getCreditCardById(transactionForm.cardId)(dispatch, getState))
    .then(() => {
      dispatch({
        type    : SET_ACTIVE_CARD,
        payload : _.filter(getState().cards.creditCards, (card) => card.id == getState().cards.activeCard.id)[0]
      })
    })
    .then(() => getCardTransactionHistory(transactionForm.cardId)(dispatch, getState))
    .then(() => linkTo('/banking/cards/creditcards/card/payment/result'))
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
          linkToStart: '/banking/cards/creditcards/card/payment'
        }
      })
    })
    .then(() => linkTo('/banking/cards/creditcards/card/payment/result'))
  }
}

export const prepaidCardLoad = () => {
  return (dispatch, getState) => {
    const transactionForm = getState().cards.transactionForm;
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/Load/PrepaidCardLoad',
      data: querystring.stringify({
        debitProductId: transactionForm.debitAccount.value,
        debitProductType: transactionForm.debitAccount.type,
        creditProductId: transactionForm.cardId,
        creditProductType: 'isPrepaidCard',
        beneficiary: 'AGILE BANK',
        bank: 'AGILE BANK',
        isTransfer: false,
        amount: Number(transactionForm.amount.value).toLocaleString(undefined, {minimumFractionDigits: 2}).replace('.', ''),
        currency: transactionForm.currency,
        date: transactionForm.date.value,
        expenses: transactionForm.expenses,
        comments: '',
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_TRANSACTION,
        payload : '/banking/cards/prepaidcards/card'
      })
    })
    .then(() => getPrepaidCardById(transactionForm.cardId)(dispatch, getState))
    .then(() => {
      dispatch({
        type    : SET_ACTIVE_CARD,
        payload : _.filter(getState().cards.prepaidCards, (card) => card.id == getState().cards.activeCard.id)[0]
      })
    })
    .then(() => getCardTransactionHistory(transactionForm.cardId)(dispatch, getState))
    .then(() => linkTo('/banking/cards/prepaidcards/card/load/result'))
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
        payload :  {
          exception,
          linkToStart: '/banking/cards/prepaidcards/card/load'
        }
      })
    })
    .then(() => linkTo('/banking/cards/prepaidcards/card/load/result'))
  }
}

export function initCardTransactionForm(){
  return {
    type: INIT_CARD_TRANSACTION_FORM
  }
}

export const setDebitAccount = (debitAccount, debitAccountType) => {
  return (dispatch, getState) => {

    let availableBalance = 0;

    switch (debitAccountType) {
      case "isAccount":
        availableBalance = _.chain(getState().accounts.accounts)
          .filter((account) => account.id == debitAccount)
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
          .value().availableBalance;
        break;
      case "isPrepaidCard":
        availableBalance = _.chain(getState().cards.prepaidCards)
          .filter((prepaidCard) => prepaidCard.id == debitAccount)
          .first()
          .value().availableBalance;
        break;
    }

    dispatch({
      type: SET_CARD_DEBIT_ACCOUNT,
      payload: {
        debitAccount,
        debitAccountType,
        availableBalance,
      }
    });
    dispatch({
      type: VALIDATE_CARDS_TRANSACTION_FORM
    });
  }
}

export const setCreditCardPaymentAmount = (amount) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_CREDIT_CARD_PAYMENT_AMOUNT,
      payload: amount
    });
    dispatch({
      type: VALIDATE_CARDS_TRANSACTION_FORM
    });
  }
}

export const setPrepaidCardLoadAmount = (amount) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PREPAID_CARD_LOAD_AMOUNT,
      payload: amount
    });
    dispatch({
      type: VALIDATE_CARDS_TRANSACTION_FORM
    });
  }
}

export const setAsapCardTransaction = (isAsap) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ASAP_CARD_TRANSACTION_DATE,
      payload: isAsap
    });
    dispatch({
      type: VALIDATE_CARDS_TRANSACTION_FORM
    });
  }
}

export const setTransactionDate = (date, formattedDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_CARD_TRANSACTION_DATE,
      payload: {
        date,
        formattedDate
      }
    });
    dispatch({
      type: VALIDATE_CARDS_TRANSACTION_FORM
    });
  }
}

export function setActiveCard(card){
  return {
    type: SET_ACTIVE_CARD,
    payload: card
  }
}

export function deactivateCard(){
  return {
    type: DEACTIVATE_CARD
  }
}

export function clearCardTransactionForm(){
  return {
    type: CLEAR_CARD_TRANSACTION_FORM,
  }
}

export const actions = {
  linkTo,
  getCards,
  getDebitCardById,
  getCreditCardById,
  getPrepaidCardById,
  setActiveCard,
  deactivateCard,
  getCardTransactionHistory,
  deleteLinkedProduct,
  initCardTransactionForm,
  setDebitAccount,
  setCreditCardPaymentAmount,
  setPrepaidCardLoadAmount,
  setAsapCardTransaction,
  setTransactionDate,
  creditCardPayment,
  prepaidCardLoad,
  clearCardTransactionForm,
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

  RECEIVE_CARDS: (state, action) => {
    return {
      ...state,
      debitCards: action.payload.debitCards,
      creditCards: action.payload.creditCards,
      prepaidCards: action.payload.prepaidCards
    }
  },

  RECEIVE_DEBIT_CARD: (state, action) => {
    return {
      ...state,
      debitCards: _.map(state.debitCards, (debitCard) => debitCard.debitCard.id == action.payload.debitCard.id ? action.payload : debitCard)
    }
  },

  RECEIVE_CREDIT_CARD: (state, action) => {
    return {
      ...state,
      creditCards: _.map(state.creditCards, (creditCard) => creditCard.id == action.payload.id ? action.payload : creditCard)
    }
  },

  RECEIVE_PREPAID_CARD: (state, action) => {
    return {
      ...state,
      prepaidCards: _.map(state.prepaidCards, (prepaidCard) => prepaidCard.id == action.payload.id ? action.payload : prepaidCard)
    }
  },

  RECEIVE_CARD_TRANSACTION_HISTORY: (state, action) => {
    return {
      ...state,
      activeCard: {
        ...state.activeCard,
        transactionHistory: action.payload
      }
    }
  },

  REQUEST_ERROR: (state, action) => {
    console.log(action.payload)
    return state;
  },

  INIT_CARD_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        cardId: state.activeCard.id,
        debitAccount: {},
        amount: {},
        currency: state.activeCard.currency,
        expenses: 0,
        date: {},
        shouldProcess: false
      }
    }
  },

  SET_CARD_DEBIT_ACCOUNT: (state, action) => {
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

  SET_CREDIT_CARD_PAYMENT_AMOUNT: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        amount: {
          value: action.payload,
          correct: action.payload > 0 &&
          (parseFloat(action.payload) <= state.activeCard.nextInstallmentAmount ||
           parseFloat(action.payload) <= state.activeCard.debt) &&
          parseFloat(action.payload) <= state.transactionForm.debitAccount.availableBalance
        }
      }
    }
  },

  SET_PREPAID_CARD_LOAD_AMOUNT: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        amount: {
          value: action.payload,
          correct: action.payload > 0 &&
          action.payload <= state.transactionForm.debitAccount.availableBalance
        }
      }
    }
  },

  SET_ASAP_CARD_TRANSACTION_DATE: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        date: {
          ...state.transactionForm.date,
          asapTransfer: action.payload,
          correct: action.payload,
          value: undefined
        }
      }
    }
  },

  SET_CARD_TRANSACTION_DATE: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        date: {
          ...state.transactionForm.date,
          value: action.payload.date,
          view: action.payload.formattedDate,
          correct: new Date(action.payload.date).setHours(0,0,0,0) >= new Date(dateformat()).setHours(0,0,0,0)
        }
      }
    }
  },

  VALIDATE_CARDS_TRANSACTION_FORM: (state, action) => {
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

  CLEAR_CARD_TRANSACTION_FORM: (state, action) => {
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

  SET_ACTIVE_CARD: (state, action) => {
    return {
      ...state,
      activeCard: action.payload
    }
  },

  DEACTIVATE_CARD: (state, action) => {
    return {
      ...state,
      activeCard: undefined
    }
  },
}

export default function cardsReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
