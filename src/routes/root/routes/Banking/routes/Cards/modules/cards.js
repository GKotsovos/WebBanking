import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router'
import dateformat from 'dateformat';
import _ from 'underscore'
import { linkTo } from 'routes/root/routes/Banking/modules/banking';
import {
  getDebitAccount,
  getDebitAccountAvailableBalance,
  isValidInstallmentPaymentAmount,
  isValidDebitAmount,
  isValidDate,
  isValidInstallmentPaymentForm,
  getImmediateText,
} from 'routes/root/routes/Banking/routes/utils/commonUtils';
import {
  handleRequestException,
  handleTransactionException
} from 'routes/root/routes/Banking/routes/utils/commonActions';
import { getUpdatedCards, getUpdatedDebitCards } from '../utils/cardUtils';
import { getAccountById } from 'routes/root/routes/Banking/routes/Accounts/modules/accounts';
import { getLoanById } from 'routes/root/routes/Banking/routes/Loans/modules/loans';

const RECEIVED_CARDS = 'RECEIVED_CARDS';
const RECEIVED_DEBIT_CARD = 'RECEIVED_DEBIT_CARD';
const RECEIVED_CREDIT_CARD = 'RECEIVED_CREDIT_CARD';
const RECEIVED_PREPAID_CARD = 'RECEIVED_PREPAID_CARD';
const RECEIVED_CARD_TRANSACTION_HISTORY = 'RECEIVED_CARD_TRANSACTION_HISTORY';
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
const SET_CARD_TRANSACTION_HISTORY_START_DATE = 'SET_CARD_TRANSACTION_HISTORY_START_DATE';
const SET_CARD_TRANSACTION_HISTORY_END_DATE = 'SET_CARD_TRANSACTION_HISTORY_END_DATE';
const VALIDATE_CARD_TRANSACTION_HISTORY_TIME_PERIOD = 'VALIDATE_CARD_TRANSACTION_HISTORY_TIME_PERIOD';
const DEACTIVATE_CARD = 'DEACTIVATE_CARD';
const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';

export const getCards = () => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/card/GetAllCustomerCards',
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_CARDS,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getDebitCardById = (id) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/card/GetDebitCardWithLinkedProductsById/' + getState().cards.activeCard.id,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_DEBIT_CARD,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getCreditCardById = (id) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/card/GetCreditCardById/' + id,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_CREDIT_CARD,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getPrepaidCardById = (id) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/card/GetPrepaidCardById/' + id,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_PREPAID_CARD,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getCardTransactionHistory = (productId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/Transaction/GetCurrentMonthProductTransactionHistory/' + productId,
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVED_CARD_TRANSACTION_HISTORY,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const getTransactionHistoryByTimePeriod = (startDate, endDate) => {
  return (dispatch, getState) => {
    const productId = getState().cards.activeCard.id;
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
        type    : RECEIVED_CARD_TRANSACTION_HISTORY,
        payload : response.data
      })
    })
    .catch((exception) => handleRequestException(exception, dispatch))
  }
}

export const deleteLinkedProduct = (productId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/card/DeleteLinkedProduct',
      data: querystring.stringify({
        cardId: getState().cards.activeCard.id,
        productId,
        language: getState().root.language,
      }),
      withCredentials: true,
    })
    .then(() => getDebitCardById(productId)(dispatch, getState))
    .catch((exception) => handleRequestException(exception, dispatch))
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
        isAsap: transactionForm.date.asapTransaction,
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
    .then(() => getDebitAccount(transactionForm.debitAccount.type, transactionForm.debitAccount.value))
    .catch((exception) => handleTransactionException(exception, '/banking/cards/creditcards/card/payment', dispatch))
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
        isAsap: transactionForm.date.asapTransaction,
        expenses: transactionForm.expenses,
        comments: '',
        language: getState().root.language,
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
    .then(() => getDebitAccount(transactionForm.debitAccount.type, transactionForm.debitAccount.value))    .catch((exception) => handleTransactionException(exception, '/banking/cards/prepaidcards/card/load', dispatch))
    .then(() => linkTo('/banking/cards/prepaidcards/card/load/result'))
  }
}

export function initCardTransactionForm() {
  return {
    type: INIT_CARD_TRANSACTION_FORM
  }
}

export const setDebitAccount = (debitAccount, debitAccountType) => {
  return (dispatch, getState) => {
    const availableBalance = getDebitAccountAvailableBalance(debitAccountType, debitAccount, getState())
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
    const immediateText = getImmediateText(getState().root.language);
    dispatch({
      type: SET_ASAP_CARD_TRANSACTION_DATE,
      payload: {
        isAsap,
        immediateText
      }
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

export const setTransactionHistoryStartDate = (startDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_CARD_TRANSACTION_HISTORY_START_DATE,
      payload: startDate
    });
    dispatch({
      type: VALIDATE_CARD_TRANSACTION_HISTORY_TIME_PERIOD
    });
  }
}

export const setTransactionHistoryEndDate = (endDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_CARD_TRANSACTION_HISTORY_END_DATE,
      payload: endDate
    });
    dispatch({
      type: VALIDATE_CARD_TRANSACTION_HISTORY_TIME_PERIOD
    });
  }
}

export function deactivateCard() {
  return {
    type: DEACTIVATE_CARD
  }
}

export function clearCardTransactionForm() {
  return {
    type: CLEAR_CARD_TRANSACTION_FORM,
  }
}

export function clearErrorMessage() {
  return {
    type: CLEAR_ERROR_MESSAGE,
  }
}

export const actions = {
  linkTo,
  getCards,
  getDebitCardById,
  getCreditCardById,
  getPrepaidCardById,
  setActiveCard,
  setTransactionHistoryStartDate,
  setTransactionHistoryEndDate,
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
  clearErrorMessage
}

const ACTION_HANDLERS = {
  RECEIVED_CARDS: (state, action) => {
    return {
      ...state,
      debitCards: action.payload.debitCards,
      creditCards: action.payload.creditCards,
      prepaidCards: action.payload.prepaidCards
    }
  },

  RECEIVED_DEBIT_CARD: (state, action) => {
    return {
      ...state,
      debitCards: getUpdatedDebitCards(state.debitCards, action.payload.debitCard)
    }
  },

  RECEIVED_CREDIT_CARD: (state, action) => {
    return {
      ...state,
      creditCards: getUpdatedCards(state.creditCards, action.payload)
    }
  },

  RECEIVED_PREPAID_CARD: (state, action) => {
    return {
      ...state,
      prepaidCards: getUpdatedCards(state.prepaidCards, action.payload)
    }
  },

  SET_ACTIVE_CARD: (state, action) => {
    return {
      ...state,
      activeCard: action.payload
    }
  },

  SET_CARD_TRANSACTION_HISTORY_START_DATE: (state, action) => {
    return {
      ...state,
      activeCard: {
        ...state.activeCard,
        transactionHistoryTimePeriod: {
          ...state.activeCard.transactionHistoryTimePeriod,
          startDate: {
            value: action.payload,
            valid: action.payload > '0'
          }
        }
      }
    }
  },

  SET_CARD_TRANSACTION_HISTORY_END_DATE: (state, action) => {
    return {
      ...state,
      activeCard: {
        ...state.activeCard,
        transactionHistoryTimePeriod: {
          ...state.activeCard.transactionHistoryTimePeriod,
          endDate: {
            value: action.payload,
            valid: state.activeCard.transactionHistoryTimePeriod.startDate.value <= action.payload
          }
        }
      }
    }
  },

  VALIDATE_CARD_TRANSACTION_HISTORY_TIME_PERIOD: (state, action) => {
    return {
      ...state,
      activeCard: {
        ...state.activeCard,
        transactionHistoryTimePeriod: {
          ...state.activeCard.transactionHistoryTimePeriod,
          valid: state.activeCard.transactionHistoryTimePeriod.startDate &&
            state.activeCard.transactionHistoryTimePeriod.startDate.valid &&
            state.activeCard.transactionHistoryTimePeriod.endDate &&
            state.activeCard.transactionHistoryTimePeriod.endDate.valid
        }
      }
    }
  },

  DEACTIVATE_CARD: (state, action) => {
    return {
      ...state,
      activeCard: undefined
    }
  },

  RECEIVED_CARD_TRANSACTION_HISTORY: (state, action) => {
    return {
      ...state,
      activeCard: {
        ...state.activeCard,
        transactionHistory: action.payload
      }
    }
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
          correct: isValidInstallmentPaymentAmount(state.activeCard, action.payload, state.transactionForm.debitAccount.availableBalance)
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
          correct: isValidDebitAmount(action.payload, state.transactionForm.debitAccount.availableBalance)
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
          asapTransaction: action.payload.isAsap,
          correct: action.payload.isAsap,
          value: undefined,
          asapText: action.payload.immediateText
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
          asapTransaction: false,
          asapText: undefined,
          view: action.payload.formattedDate,
          correct: isValidDate(action.payload.date)
        }
      }
    }
  },

  VALIDATE_CARDS_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        shouldProcess: isValidInstallmentPaymentForm(state.transactionForm)
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
    let errorMessage = '';
    if (action.payload.response) {
      errorMessage = action.payload.response.data;
    }
    return {
      ...state,
      errorMessage
    }
  },

  CLEAR_ERROR_MESSAGE: (state, action) => {
    return {
      ...state,
      errorMessage: undefined
    }
  },

}

export default function cardsReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
