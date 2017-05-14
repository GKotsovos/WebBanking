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

export function setActiveCard(card){
  return {
    type: SET_ACTIVE_CARD,
    payload: card
  }
}

export function deactivateCard(){
  return {
    type: SET_ACTIVE_CARD,
  }
}

export const actions = {
  linkTo,
  getCards,
  getCardTransactionHistory,
  deleteLinkedProduct,
  setActiveCard,
  deactivateCard,
}

const ACTION_HANDLERS = {
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

  REQUEST_ERROR: (state, action) => {
    console.log(action.payload)
    return state;
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
      activeCard: {}
    }
  },
}

export default function homeReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
