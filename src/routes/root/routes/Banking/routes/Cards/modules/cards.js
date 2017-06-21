import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router'
import _ from 'underscore'

const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
const REQUESTING = 'REQUESTING';
const RECEIVE_CARDS = 'RECEIVE_CARDS';
const RECEIVE_CARD_TRANSACTION_HISTORY = 'RECEIVE_CARD_TRANSACTION_HISTORY';
const DELETE_LINKED_PRODUCT = 'DELETE_LINKED_PRODUCT';
const CREDIT_CARD_PAYMENT = 'CREDIT_CARD_PAYMENT';
const SET_DEBIT_ACCOUNT = 'SET_DEBIT_ACCOUNT';
const SET_TRANSACTION_AMOUNT = 'SET_TRANSACTION_AMOUNT';
const SET_TRANSACTION_DATE = 'SET_TRANSACTION_DATE';
const CLEAR_TRANSACTION_FORM = 'CLEAR_TRANSACTION_FORM';
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
    .then((response) => {
      dispatch({
        type    : DELETE_LINKED_PRODUCT,
        payload : productId
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

export const creditCardPayment = () => {
  return (dispatch, getState) => {
    const transactionForm = getState().cards.transactionForm;
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/card/CreditCardPayment',
      data: querystring.stringify({
        cardId: transactionForm.cardId,
        debitAccount: transactionForm.debitAccount,
        amount: transactionForm.amount,
        currency: transactionForm.currency,
        expenses: transactionForm.expenses,
        date: transactionForm.date
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_TRANSACTION
      })
    })
    .then(() => browserHistory.push('banking/cards/creditcards/card/payment/result'))
    .then(() => {
      dispatch({
        type    : CLEAR_TRANSACTION_FORM
      })
    })
    .catch((exception) => {
      dispatch({
        type    : UNSUCCESSFUL_TRANSACTION
      })
    })
  }
}

export function setDebitAccount(debitAccount){
  return {
    type: SET_DEBIT_ACCOUNT,
    payload: debitAccount
  }
}

export function setTransactionAmount(amount){
  return {
    type: SET_TRANSACTION_AMOUNT,
    payload: amount
  }
}

export function setTransactionDate(date, formattedDate){
  return {
    type: SET_TRANSACTION_DATE,
    payload: {
      date,
      formattedDate
    }
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
  getCardTransactionHistory,
  deleteLinkedProduct,
  creditCardPayment,
  setDebitAccount,
  setTransactionAmount,
  setTransactionDate,
  clearTransactionForm,
  setActiveCard,
  deactivateCard
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

  RECEIVE_CARD_TRANSACTION_HISTORY: (state, action) => {
    return {
      ...state,
      activeCard: {
        ...state.activeCard,
        transactionHistory: action.payload
      }
    }
  },

  DELETE_LINKED_PRODUCT: (state, action) => {
    getCards();
    let debitCards = state.debitCards
    for (let i = 0; i < debitCards.length; i++) {
      if (state.activeCard.id == debitCards[i].debitCard.id) {
        for (let j = 0; j < debitCards[i].accounts.length; j++) {
          if (debitCards[i].accounts[j].iban == action.payload) {
            debitCards[i].accounts.splice(j, 1)
          }
        }
      }
    }
    console.log(state.debitCards)
    return {
      ...state,
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
        debitAccount: action.payload,
      }
    }
  },

  SET_TRANSACTION_AMOUNT: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        amount: action.payload,
      }
    }
  },

  SET_TRANSACTION_DATE: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        viewDate: action.payload.date,
        date: action.payload.formattedDate,

      }
    }
  },

  CLEAR_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        cardId: state.activeCard.id,
        debitAccount: '',
        amount: '',
        currency: state.activeCard.currency,
        expenses: 0,
        date: '',
      }
    }
  },

  SET_ACTIVE_CARD: (state, action) => {
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
