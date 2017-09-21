import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router';
import dateformat from 'dateformat';
import _ from 'underscore'
import IBAN from 'iban';
import bic from 'bic';
import { getAccountById } from 'routes/root/routes/Banking/routes/Accounts/modules/accounts';
import { getCreditCardById, getPrepaidCardById } from 'routes/root/routes/Banking/routes/Cards/modules/cards';
import { getLoanById } from 'routes/root/routes/Banking/routes/Loans/modules/loans';

const INITIAL_ORDER_STATE = 'INITIAL_ORDER_STATE';
const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
const CHANGE_ACTIVE_ORDER_TYPE = 'CHANGE_ACTIVE_ORDER_TYPE';
const INIT_NEW_TRANSFER_ORDER_FORM = 'INIT_NEW_TRANSFER_ORDER_FORM';
const INIT_NEW_PAYMENT_ORDER_FORM = 'INIT_NEW_PAYMENT_ORDER_FORM';
const RECEIVE_TRANSFER_ORDERS = 'RECEIVE_TRANSFER_ORDERS';
const RECEIVE_PAYMENT_ORDERS = 'RECEIVE_PAYMENT_ORDERS';
const FETCHING_DOMESTIC_BANKS = 'FETCHING_DOMESTIC_BANKS';
const RECEIVE_DOMESTIC_BANKS = 'RECEIVE_DOMESTIC_BANKS';
const SET_ORDER_DEBIT_ACCOUNT = 'SET_ORDER_DEBIT_ACCOUNT';
const SET_ORDER_CURRENCY = 'SET_ORDER_CURRENCY';
const SET_TRANSFER_ORDER_BENEFICIARY_BANK_TYPE = 'SET_TRANSFER_ORDER_BENEFICIARY_BANK_TYPE';
const SET_TRANSFER_ORDER_BENEFICIARY_BANK_NAME = 'SET_TRANSFER_ORDER_BENEFICIARY_BANK_NAME';
const SET_TRANSFER_ORDER_BENEFICIARY_NAME = 'SET_TRANSFER_ORDER_BENEFICIARY_NAME';
const SET_TRANSFER_ORDER_BENEFICIARY_ACCOUNT = 'SET_TRANSFER_ORDER_BENEFICIARY_ACCOUNT';
const SET_TRANSFER_ORDER_AMOUNT = 'SET_TRANSFER_ORDER_AMOUNT';
const SET_TRANSFER_ORDER_CHARGES_BENEFICIARY = 'SET_TRANSFER_ORDER_CHARGES_BENEFICIARY';
const SET_TRANSFER_ORDER_COMMENTS = 'SET_TRANSFER_ORDER_COMMENTS';
const SET_TRANSFER_ORDER_ASAP_START = 'SET_TRANSFER_ORDER_ASAP_START';
const SET_TRANSFER_ORDER_START_DATE = 'SET_TRANSFER_ORDER_START_DATE';
const SET_TRANSFER_ORDER_PERIODICITY = 'SET_TRANSFER_ORDER_PERIODICITY';
const SET_TRANSFER_ORDER_TIMES_OF_EXEC = 'SET_TRANSFER_ORDER_TIMES_OF_EXEC';
const SET_TRANSFER_ORDER_CUSTOM_TITLE = 'SET_TRANSFER_ORDER_CUSTOM_TITLE';
const SET_AVAILABLE_PAYMENT_METHODS = 'SET_AVAILABLE_PAYMENT_METHODS';
const SET_PAYMENT_ORDER_PAYMENT_METHOD = 'SET_PAYMENT_ORDER_PAYMENT_METHOD';
const SET_PAYMENT_ORDER_PAYENT_TYPE = 'SET_PAYMENT_ORDER_PAYENT_TYPE';
const SET_PAYMENT_ORDER_PAYMENT_CODE = 'SET_PAYMENT_ORDER_PAYMENT_CODE';
const SET_PAYMENT_ORDER_MAX_AMOUNT = 'SET_PAYMENT_ORDER_MAX_AMOUNT';
const SET_PAYMENT_ORDER_END_DATE = 'SET_PAYMENT_ORDER_END_DATE';
const CLEAR_NEW_ORDER_FORM = 'CLEAR_NEW_ORDER_FORM';
const VALIDATE_TRANSFER_ORDER_FORM = 'VALIDATE_TRANSFER_ORDER_FORM';
const CLEAR_TRANSFER_ORDER_FORM = 'CLEAR_TRANSFER_ORDER_FORM';
const SUCCESSFUL_REQUEST = 'SUCCESSFUL_REQUEST';
const UNSUCCESSFUL_REQUEST = 'UNSUCCESSFUL_REQUEST';

export const initializeOrderState = () => {
  return (dispatch, getState) => {
    dispatch({
      type: INITIAL_ORDER_STATE,
    });
  }
}

export const changeActiveOrderType = (selection, orderType) => {
  return (dispatch, getState) => {
    const ordersState = getState().orders;
    const subType = ordersState.activeOrder ? ordersState.activeOrder.subType : 'existing';
    dispatch({
      type: CHANGE_ACTIVE_ORDER_TYPE,
      payload: {
        orderType,
        selection,
        subType
      }
    });
    linkTo(`/banking/orders/${orderType}/${subType}`);
  }
}

export const linkToNewOrder = (activeOrder) => {
  return (dispatch, getState) => {
    dispatch({
      type: CHANGE_ACTIVE_ORDER_TYPE,
      payload: {
        selection: activeOrder.selection,
        orderType: activeOrder.type,
        subType: 'new'
      }
    });
    switch (activeOrder.type) {
      case 'transfer':
        initNewTransferOrderForm();
        break;
      case 'payment':
        initNewPaymentOrderForm();
        break;
    }
    linkTo(`/banking/orders/${activeOrder.type}/new`);
  }
}

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

export const initNewTransferOrderForm = () => {
  return (dispatch, getState) => {
    dispatch({
      type: CLEAR_NEW_ORDER_FORM
    });
    dispatch({
      type: INIT_NEW_TRANSFER_ORDER_FORM
    });
  }
}

export const initNewPaymentOrderForm = () => {
  return (dispatch, getState) => {
    dispatch({
      type: CLEAR_NEW_ORDER_FORM
    });
    dispatch({
      type: INIT_NEW_PAYMENT_ORDER_FORM
    });
    getPaymentMethods()(dispatch, getState);
  }
}

export const getTransferOrders = () => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/order/GetAllCustomerTransferOrders',
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_TRANSFER_ORDERS,
        payload : response.data
      })
    })
    .catch((exception)  => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : UNSUCCESSFUL_REQUEST,
        payload : {
          exception,
          linkToStart: '/banking/orders'
        }
      })
    })
  }
}

export const getPaymentOrders = () => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/order/GetAllCustomerPaymentOrders',
      withCredentials: true
    })
    .then((response) => {
      dispatch({
        type    : RECEIVE_PAYMENT_ORDERS,
        payload : response.data
      })
    })
    .catch((exception)  => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : UNSUCCESSFUL_REQUEST,
        payload : {
          exception,
          linkToStart: '/banking/orders'
        }
      })
    })
  }
}

export const getDomesticBanks = () => {
  return (dispatch, getState) => {
    if (_.isEmpty(getState().transfers.newOrderForm.domesticBanks)) {
      return axios({
        method: 'get',
        url: 'http://localhost:26353/api/Bank/GetAllDomesticBanks',
        withCredentials: true,
      })
      .then((response) => {
        dispatch({
          type    : RECEIVE_DOMESTIC_BANKS,
          payload : response.data
        })
      })
      .catch((exception) => {
        !_.isEmpty(exception.response) && exception.response.status == 401 ?
        dispatch({
          type    : 'LOG_OUT',
        }) :
        dispatch({
          type    : UNSUCCESSFUL_REQUEST,
          payload : {
            exception,
            linkToStart: '/banking/orders'
          }
        })
      })
    }
  }
}

export const setOrderDebitAccount = (debitAccount, debitAccountType) => {
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
      type: SET_ORDER_DEBIT_ACCOUNT,
      payload: {
        debitAccount,
        debitAccountType,
        availableBalance,
      }
    });
    dispatch({
      type: SET_ORDER_CURRENCY,
      payload: currency,
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderBeneficiaryBankType = (selection, bankType) => {
  return (dispatch, getState) => {
    const customerName = (getState().banking.customerName.firstName + ' ' + getState().banking.customerName.lastName)
    .replace('ά', 'α')
    .replace('έ', 'ε')
    .replace('ί', 'ι')
    .replace('ή', 'η')
    .replace('ό', 'ο')
    .replace('ύ', 'υ')
    .replace('ώ', 'ω');

    dispatch({
      type: SET_TRANSFER_ORDER_BENEFICIARY_BANK_TYPE,
      payload: {
        selection,
        bankType
      }
    });
    const bic = bankType == 'agileBank' ? 'AGILGRAA - AGILE BANK' : ''
    dispatch({
      type: SET_TRANSFER_ORDER_BENEFICIARY_BANK_NAME,
      payload: bic
    });
    const fullName = bankType == 'agileBank' ? customerName : ''
    dispatch({
      type: SET_TRANSFER_ORDER_BENEFICIARY_NAME,
      payload: fullName
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderBeneficiaryBankName = (bankName) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_BENEFICIARY_BANK_NAME,
      payload: bankName
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderBeneficiaryBankBic = (bankBIC) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_BENEFICIARY_BANK_BIC,
      payload: bankBIC
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderBeneficiaryName = (fullName) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_BENEFICIARY_NAME,
      payload: fullName
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderBeneficiaryAccount = (account, type) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_BENEFICIARY_ACCOUNT,
      payload: {
        account,
        type
      }
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderAmount = (amount) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_AMOUNT,
      payload: amount
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderChargesBeneficiary = (selection, beneficiary) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_CHARGES_BENEFICIARY,
      payload: {
        selection,
        beneficiary
      }
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderComments = (comments) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_COMMENTS,
      payload: comments
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderAsapStart = (isAsap) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_ASAP_START,
      payload: isAsap
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderStartDate = (date, formattedDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_START_DATE,
      payload: {
        date,
        formattedDate
      }
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setPeriodicity = (selection, periodicity) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_PERIODICITY,
      payload:  {
        periodicity,
        selection
      }
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTimesOfExecution = (timesOfExecution) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_TIMES_OF_EXEC,
      payload: timesOfExecution
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setTransferOrderCustomTitle = (title) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_ORDER_CUSTOM_TITLE,
      payload: title
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const getPaymentMethods = () => {
  return (dispatch, getState) => {
    return axios({
      method: 'get',
      url: 'http://localhost:26353/api/Payment/GetPaymentMethods',
      withCredentials: true,
    })
    .then((response) => {
      dispatch({
        type    : SET_AVAILABLE_PAYMENT_METHODS,
        payload : response.data
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

export const setPaymentOrderPaymentMethod = (paymentMethod) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PAYMENT_ORDER_PAYMENT_METHOD,
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
      type: SET_PAYMENT_ORDER_PAYENT_TYPE,
      payload: paymentType
    });
    dispatch({
      type: SET_PAYMENT_ORDER_PAYMENT_CODE,
      payload: undefined
    });
    dispatch({
      type: VALIDATE_PAYMENT_TRANSACTION_FORM
    });
  }
}

export const setPaymentOrderPaymentCode = (paymentCode) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PAYMENT_ORDER_PAYMENT_CODE,
      payload: paymentCode
    });
    dispatch({
      type: VALIDATE_PAYMENT_TRANSACTION_FORM
    });
  }
}

export const setPaymentOrderMaxAmount = (amount) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PAYMENT_ORDER_MAX_AMOUNT,
      payload: amount
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const setPaymentOrderEndDate = (date, formattedDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_PAYMENT_ORDER_END_DATE,
      payload: {
        date,
        formattedDate
      }
    });
    dispatch({
      type: VALIDATE_TRANSFER_ORDER_FORM
    });
  }
}

export const cancelTransferOrder = (orderId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/order/CancelTransferOrder',
      data: querystring.stringify({
        transferOrderId: Number(orderId),
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_REQUEST,
        payload : '/banking/orders/existing/transfer'
      })
    })
    .then(() => getTransferOrders()(dispatch, getState))
    .catch((exception) => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : UNSUCCESSFUL_REQUEST,
        payload : {
          exception,
          linkToStart: '/banking/orders/existing/transfer'
        }
      })
    })
  }
}

export const cancelPaymentOrder = (orderId) => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/order/CancelPaymentOrder',
      data: querystring.stringify({
        paymentOrderId: Number(orderId),
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_REQUEST,
        payload : '/banking/orders/existing/payment'
      })
    })
    .then(() => getPaymentOrders()(dispatch, getState))
    .catch((exception) => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : UNSUCCESSFUL_REQUEST,
        payload : {
          exception,
          linkToStart: '/banking/orders/existing/payment'
        }
      })
    })
  }
}

export const createTransferOrder = (newOrderForm) => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/order/CreateTransferOrder',
      data: querystring.stringify({
        customTitle: newOrderForm.customTitle.value,
        debitProductId: newOrderForm.debitAccount.value,
        creditProductId: newOrderForm.beneficiaryAccount.value,
        amount: newOrderForm.amount.value,
        currency: newOrderForm.currency.value,
        chargesBeneficiary: newOrderForm.chargesBeneficiary.value,
        nextExecutionDate: newOrderForm.startDate.value,
        executionsLeft: newOrderForm.timesOfExecution.value,
        executionFrequency: newOrderForm.periodicity.value,
        state: true,
        comments: newOrderForm.comments,
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_REQUEST,
        payload : '/banking/orders/transfer/existing'
      })
    })
    .then(() => getTransferOrders()(dispatch, getState))
    .then(() => linkTo('/banking/orders/transfer/new/result'))
    .catch((exception) => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : UNSUCCESSFUL_REQUEST,
        payload : {
          exception,
          linkToStart: '/banking/orders/transfer/new'
        }
      })
    })
  }
}

export const createPaymentOrder = (newOrderForm) => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/order/CreatePaymentOrder',
      data: querystring.stringify({
         debitProductId: newOrderForm.debitAccount.value,
         paymentMethod: newOrderForm.paymentSelections.paymentMethod,
         paymentCode: newOrderForm.paymentCode.value,
         expirationDate: newOrderForm.endDate.value,
         maxPaymentAmount: newOrderForm.maxAmount.value,
         state: true,
         currency: newOrderForm.currency.value,
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_REQUEST,
        payload : '/banking/orders/payment/existing'
      })
    })
    .then(() => getPaymentOrders()(dispatch, getState))
    .then(() => linkTo('/banking/orders/payment/new/result'))
    .catch((exception) => {
      !_.isEmpty(exception.response) && exception.response.status == 401 ?
      dispatch({
        type    : 'LOG_OUT',
      }) :
      dispatch({
        type    : UNSUCCESSFUL_REQUEST,
        payload : {
          exception,
          linkToStart: '/banking/orders/payment/new/'
        }
      })
    })
  }
}

export const clearNewOrderForm = () => {
  return {
    type: CLEAR_NEW_ORDER_FORM,
  }
}

export const actions = {
  initializeOrderState,
  linkToNewOrder,
  changeActiveOrderType,
  initNewTransferOrderForm,
  initNewPaymentOrderForm,
  getTransferOrders,
  getPaymentOrders,
  getDomesticBanks,
  setOrderDebitAccount,
  setTransferOrderBeneficiaryName,
  setTransferOrderBeneficiaryAccount,
  setTransferOrderBeneficiaryBankType,
  setTransferOrderBeneficiaryBankName,
  setTransferOrderBeneficiaryBankBic,
  setTransferOrderAmount,
  setTransferOrderChargesBeneficiary,
  setTransferOrderComments,
  setTransferOrderAsapStart,
  setTransferOrderStartDate,
  setPaymentOrderEndDate,
  setPeriodicity,
  setTimesOfExecution,
  setTransferOrderCustomTitle,
  setPaymentOrderPaymentMethod,
  setPaymentOrderPaymentCode,
  setPaymentOrderMaxAmount,
  cancelTransferOrder,
  cancelPaymentOrder,
  createTransferOrder,
  createPaymentOrder,
  clearNewOrderForm,
}

const ACTION_HANDLERS = {
  INITIAL_ORDER_STATE: (state, action) => {
    return {};
  },

  CHANGE_ACTIVE_ORDER_TYPE: (state, action) => {
    return {
      ...state,
      activeOrder: {
        type: action.payload.orderType,
        selection: action.payload.selection,
        subType: action.payload.subType,
      }
    };
  },

  INIT_NEW_TRANSFER_ORDER_FORM: (state, action) => {
    return {
      ...state,
      newOrderForm : {
        ...state.newOrderForm,
        debitAccount: {},
        currency: {},
        beneficiaryBankType: {},
        beneficiarybank: {},
        beneficiaryAccount: {},
        beneficiaryFullName: {},
        amount: {},
        chargesBeneficiary: {},
        comments: {
          value: '',
          correct: true
        },
        startDate: {},
        periodicity: {},
        timesOfExecution: {},
        customTitle: {},
        shouldProcess: false,
        linkToApprovalForm: '',
      }
    }
  },

  INIT_NEW_PAYMENT_ORDER_FORM: (state, action) => {
    return {
      ...state,
      newOrderForm : {
        ...state.newOrderForm,
        debitAccount: {},
        currency: {},
        availablePaymentMethods: [],
        paymentSelections: {},
        paymentCode: {},
        maxAmount: {},
        charges: { value: 0, correct: true },
        endDate: {},
        shouldProcess: false,
        linkToApprovalForm: '',
      }
    }
  },

  RECEIVE_TRANSFER_ORDERS: (state, action) => {
    return {
      ...state,
      transferOrders: action.payload
    }
  },

  RECEIVE_PAYMENT_ORDERS: (state, action) => {
    return {
      ...state,
      paymentOrders: action.payload
    }
  },

  RECEIVE_DOMESTIC_BANKS: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        domesticBanks: action.payload,
      }
    }
  },

  SET_ORDER_DEBIT_ACCOUNT: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        debitAccount: {
          value: action.payload.debitAccount,
          availableBalance: action.payload.availableBalance,
          correct: action.payload != "",
          type: action.payload.debitAccountType
        }
      }
    }
  },

  SET_ORDER_CURRENCY: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        currency: {
          value: action.payload,
          correct: action.payload != "",
        }
      }
    }
  },

  SET_TRANSFER_ORDER_BENEFICIARY_BANK_TYPE: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        beneficiaryBankType: {
          value: action.payload.bankType,
          selection: action.payload.selection,
          correct: true
        }
      }
    }
  },

  SET_TRANSFER_ORDER_BENEFICIARY_BANK_NAME: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        beneficiarybank: {
          bic: action.payload.split(' - ')[0],
          name: action.payload.split(' - ')[1],
          selection: action.payload,
          correct: true,
        }
      }
    }
  },

  SET_TRANSFER_ORDER_BENEFICIARY_BANK_BIC: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        beneficiarybank: {
          ...state.newOrderForm.bank,
          bic: action.payload,
          correct: bic.isValid(action.payload) || action.payload == 'AGILGRAA',
        }
      }
    }
  },

  SET_TRANSFER_ORDER_BENEFICIARY_NAME: (state, action) => {
    const correctPattern = new RegExp("^[A-Za-zΑ-Ωα-ω ]+$");
    const beneficiaryFullName = action.payload.toUpperCase()
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        beneficiaryFullName: {
          value: correctPattern.test(beneficiaryFullName) || beneficiaryFullName == '' ? beneficiaryFullName : state.newOrderForm.beneficiaryFullName.value,
          correct: beneficiaryFullName.split(' ').length == 2,
        }
      }
    }
  },

  SET_TRANSFER_ORDER_BENEFICIARY_ACCOUNT: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        beneficiaryAccount: {
          value: action.payload.account,
          type: action.payload.type,
          correct: IBAN.isValid(action.payload.account),
        }
      }
    }
  },

  SET_TRANSFER_ORDER_AMOUNT: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        amount: {
          value: action.payload,
          correct: action.payload > 0 &&
           (parseFloat(action.payload)) <= state.newOrderForm.debitAccount.availableBalance
        }
      }
    }
  },

  SET_TRANSFER_ORDER_CHARGES_BENEFICIARY: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        chargesBeneficiary: {
          value: action.payload.beneficiary,
          selection: action.payload.selection,
          correct: action.payload.beneficiary == 'both' || action.payload.beneficiary == 'sender' || action.payload.beneficiary == 'beneficiary',
        }
      }
    }
  },

  SET_TRANSFER_ORDER_COMMENTS: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        comments: {
          value: action.payload,
          correct: action.payload.length <= 100,
        }
      }
    }
  },

  SET_TRANSFER_ORDER_ASAP_START: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        startDate: {
          ...state.newOrderForm.date,
          asapTransaction: action.payload,
          correct: action.payload,
          value: undefined,
          asapText: 'ΑΜΕΣΑ'
        }
      }
    }
  },

  SET_TRANSFER_ORDER_START_DATE: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        startDate: {
          ...state.newOrderForm.date,
          value: action.payload.date,
          asapOrder: false,
          asapText: undefined,
          view: action.payload.formattedDate,
          correct: new Date(action.payload.date).setHours(0,0,0,0) >= new Date(dateformat()).setHours(0,0,0,0)
        }
      }
    }
  },

  SET_TRANSFER_ORDER_PERIODICITY: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        periodicity: {
          value: action.payload.periodicity,
          selection: action.payload.selection,
          correct: true,
        }
      }
    }
  },

  SET_TRANSFER_ORDER_TIMES_OF_EXEC: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        timesOfExecution: {
          value: action.payload,
          correct: true,
        }
      }
    }
  },

  SET_TRANSFER_ORDER_CUSTOM_TITLE: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        customTitle: {
          value: action.payload,
          correct: true,
        }
      }
    }
  },

  SET_AVAILABLE_PAYMENT_METHODS: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        availablePaymentMethods: _.map(action.payload, (paymentMethod) => paymentMethod.name)
      }
    }
  },

  SET_PAYMENT_ORDER_PAYMENT_METHOD: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        paymentSelections: {
          ...state.newOrderForm.paymentSelections,
          paymentMethod: action.payload
        }
      }
    }
  },

  SET_PAYMENT_ORDER_PAYENT_TYPE: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        paymentSelections: {
          ...state.newOrderForm.paymentSelections,
          paymentType: action.payload,
        }
      }
    }
  },

  SET_PAYMENT_ORDER_PAYMENT_CODE: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        paymentCode: {
          value: action.payload,
          correct: !!action.payload == undefined ? undefined : true,
        }
      }
    }
  },

  SET_PAYMENT_ORDER_MAX_AMOUNT: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        maxAmount: {
          value: action.payload,
          correct: action.payload > 0
        }
      }
    }
  },

  SET_PAYMENT_ORDER_END_DATE: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        endDate: {
          ...state.newOrderForm.date,
          value: action.payload.date,
          view: action.payload.formattedDate,
          correct: new Date(action.payload.date).setHours(0,0,0,0) >= new Date(dateformat()).setHours(0,0,0,0)
        }
      }
    }
  },

  VALIDATE_TRANSFER_ORDER_FORM: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        shouldProcess: true
        // TODO
      }
    }
  },

  CLEAR_NEW_ORDER_FORM: (state, action) => {
    return {
      ...state,
      newOrderForm: undefined
    }
  },

  SUCCESSFUL_REQUEST: (state, action) => {
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
        result: true,
        linkToStart: action.payload
      }
    }
  },

  UNSUCCESSFUL_REQUEST: (state, action) => {
    console.log(action.payload.exception)
    return {
      ...state,
      newOrderForm: {
        ...state.newOrderForm,
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
