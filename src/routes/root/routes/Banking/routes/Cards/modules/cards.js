import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router'
import dateformat from 'dateformat';
import _ from 'underscore'
import { getAccountById } from 'routes/root/routes/Banking/routes/Accounts/modules/accounts';

const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
const REQUESTING = 'REQUESTING';
const RECEIVE_CARDS = 'RECEIVE_CARDS';
const RECEIVE_DEBIT_CARD = 'RECEIVE_DEBIT_CARD';
const RECEIVE_CREDIT_CARD = 'RECEIVE_CREDIT_CARD';
const RECEIVE_PREPAID_CARD = 'RECEIVE_PREPAID_CARD';
const RECEIVE_CARD_TRANSACTION_HISTORY = 'RECEIVE_CARD_TRANSACTION_HISTORY';
const DELETE_LINKED_PRODUCT = 'DELETE_LINKED_PRODUCT';
const CREDIT_CARD_PAYMENT = 'CREDIT_CARD_PAYMENT';
const SET_DEBIT_ACCOUNT = 'SET_DEBIT_ACCOUNT';
const SET_TRANSACTION_AMOUNT = 'SET_TRANSACTION_AMOUNT';
const SET_TRANSACTION_DATE = 'SET_TRANSACTION_DATE';
const VALIDATE_CREDIT_CARD_PAYMENT_FORM = 'VALIDATE_CREDIT_CARD_PAYMENT_FORM';
const CLEAR_TRANSACTION_FORM = 'CLEAR_TRANSACTION_FORM';
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
      url: 'http://localhost:26353/api/TransactionHistory/GetProductTransactionHistory/' + productId,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_CARD_TRANSACTION_HISTORY,
        payload : response.data
      })
    })
    .catch((exception) => {
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
      url: 'http://localhost:26353/api/card/CreditCardPayment',
      data: querystring.stringify({
        cardId: transactionForm.cardId,
        debitAccount: transactionForm.debitAccount.value,
        amount: transactionForm.amount.value,
        currency: transactionForm.currency,
        expenses: transactionForm.expenses,
        date: transactionForm.date.value
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_TRANSACTION
      })
    })
    .then(() => getCards()(dispatch, getState))
    .then(() => {
      dispatch({
        type    : SET_ACTIVE_CARD,
        payload : _.filter(getState().cards.creditCards, (card) => card.id == getState().cards.activeCard.id)[0]
      })
    })
    // .then(() => linkTo('/banking/cards/creditcards/card/payment/result'))
    // .then(() => {
    //   dispatch({
    //     type    : CLEAR_TRANSACTION_FORM
    //   })
    // })
    .catch((exception) => {
      dispatch({
        type    : UNSUCCESSFUL_TRANSACTION,
        payload : exception
      })
    })
    .then(() => linkTo('/banking/cards/creditcards/card/payment/result'))
  }
}

export const setDebitAccount = (debitAccount) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_DEBIT_ACCOUNT,
      payload: debitAccount
    });
    dispatch({
      type: VALIDATE_CREDIT_CARD_PAYMENT_FORM
    });
  }
}

export const setTransactionAmount = (amount) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSACTION_AMOUNT,
      payload: amount
    });
    dispatch({
      type: VALIDATE_CREDIT_CARD_PAYMENT_FORM
    });
  }
}

export const setTransactionDate = (date, formattedDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSACTION_DATE,
      payload: {
        date,
        formattedDate
      }
    });
    dispatch({
      type: VALIDATE_CREDIT_CARD_PAYMENT_FORM
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

export function clearTransactionForm(){
  return {
    type: CLEAR_TRANSACTION_FORM,
  }
}

export const actions = {
  linkTo,
  getCards,
  getDebitCardById,
  getCreditCardById,
  getPrepaidCardById,
  getCardTransactionHistory,
  deleteLinkedProduct,
  creditCardPayment,
  setDebitAccount,
  setTransactionAmount,
  setTransactionDate,
  clearTransactionForm,
  setActiveCard,
  deactivateCard,
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
    }
  },

  CREDIT_CARD_PAYMENT: (state, action) => {
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

  SET_DEBIT_ACCOUNT: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        debitAccount: {
          value: action.payload,
          correct: action.payload != ""
        }
      }
    }
  },

  SET_TRANSACTION_AMOUNT: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        amount: {
          value: action.payload,
          correct: action.payload > 0 &&
          (action.payload <= state.activeCard.nextInstallmentAmount ||
           action.payload <= state.activeCard.debt)
        }
      }
    }
  },

  SET_TRANSACTION_DATE: (state, action) => {
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


  VALIDATE_CREDIT_CARD_PAYMENT_FORM: (state, action) => {
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

  CLEAR_TRANSACTION_FORM: (state, action) => {
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

  SUCCESSFUL_TRANSACTION: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        result: true,
        linkToStart: '/banking/cards/creditcards/card'
      }
    }
  },

  UNSUCCESSFUL_TRANSACTION: (state, action) => {
    console.log(action.payload)
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        result: false,
        linkToStart: '/banking/cards/creditcards/card/payment'
      }
    }
  },

  SET_ACTIVE_CARD: (state, action) => {
    console.log(action.payload)
    return {
      ...state,
      activeCard: action.payload,
      transactionForm: {
        cardId: action.payload.id,
        debitAccount: '',
        amount: '',
        currency: action.payload.currency,
        expenses: 0,
        viewDate: '',
        date: '',
        shouldProcess: false
      }
    }
  },

  DEACTIVATE_CARD: (state, action) => {
    return {
      ...state,
      activeCard: {}
    }
  },
}

export default function cardsReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
