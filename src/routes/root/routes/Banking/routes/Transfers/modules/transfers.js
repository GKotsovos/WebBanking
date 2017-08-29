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

const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
const INIT_TRANSFER_TRANSACTION_FORM = 'INIT_TRANSFER_TRANSACTION_FORM';
const FETCHING_DOMESTIC_BANKS = 'FETCHING_DOMESTIC_BANKS';
const SET_DOMESTIC_BANKS = 'SET_DOMESTIC_BANKS';
const SET_TRANSFER_DEBIT_ACCOUNT = 'SET_TRANSFER_DEBIT_ACCOUNT';
const SET_TRANSFER_CREDIT_ACCOUNT = 'SET_TRANSFER_CREDIT_ACCOUNT';
const SET_TRANSFER_CREDIT_FULL_NAME = 'SET_TRANSFER_CREDIT_FULL_NAME';
const SET_TRANSFER_CREDIT_BANK_TYPE = 'SET_TRANSFER_CREDIT_BANK_TYPE';
const SET_TRANSFER_CREDIT_BANK = 'SET_TRANSFER_CREDIT_BANK';
const SET_TRANSFER_CREDIT_BANK_BIC = 'SET_TRANSFER_CREDIT_BANK_BIC';
const SET_TRANSFER_AMOUNT = 'SET_TRANSFER_AMOUNT';
const SET_TRANSFER_CHARGES_BENEFICIARY = 'SET_TRANSFER_CHARGES_BENEFICIARY';
const SET_TRANSFER_COMMENTS = 'SET_TRANSFER_COMMENTS';
const SET_ASAP_TRANSFER = 'SET_ASAP_TRANSFER';
const SET_TRANSFER_TRANSACTION_DATE = 'SET_TRANSFER_TRANSACTION_DATE';
const VALIDATE_TRANSFER_TRANSACTION_FORM = 'VALIDATE_TRANSFER_TRANSACTION_FORM';
const CLEAR_TRANSFER_TRANSACTION_FORM = 'CLEAR_TRANSFER_TRANSACTION_FORM';
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

export const getDomesticBanks = () => {
  return (dispatch, getState) => {
    if (_.isEmpty(getState().transfers.transactionForm.domesticBanks)) {
      dispatch({
        type    : FETCHING_DOMESTIC_BANKS
      });

      return axios({
        method: 'get',
        url: 'http://localhost:26353/api/Bank/GetAllDomesticBanks',
        withCredentials: true,
      })
      .then((response) => {
        dispatch({
          type    : SET_DOMESTIC_BANKS,
          payload : response
        })
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
            linkToStart: '/banking/transfers'
          }
        })
      })
    }
  }
}

export const transfer = () => {
  return (dispatch, getState) => {
    const transactionForm = getState().TRANSFER.transactionForm;
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/transfer/Transfer',
      data: querystring.stringify({
        transferId: transactionForm.transferId,
        debitAccount: transactionForm.debitAccount.value,
        debitAccountType: transactionForm.debitAccount.type,
        amount: transactionForm.amount.value,
        date: transactionForm.date.value
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_TRANSACTION,
        payload : '/banking/TRANSFER'
      })
    })
    .then(() => getTransferById(transactionForm.transferId)(dispatch, getState))
    .then(() => {
      dispatch({
        type    : SET_ACTIVE_TRANSFER,
        payload : _.filter(getState().TRANSFER.TRANSFER, (transfer) => transfer.id == getState().TRANSFER.activeTransfer.id)[0]
      })
    })
    .then(() => getTransferTransactionHistory(transactionForm.transferId)(dispatch, getState))
    .then(() => linkTo('/banking/transfers/result'))
    .then(() => {
      switch (transactionForm.debitAccount.type) {
        case "isAccount":
          getAccountById(transactionForm.debitAccount.value)(dispatch, getState)
          break;
        case "isLoan":
          getTransferById(transactionForm.debitAccount.value)(dispatch, getState)
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
          linkToStart: '/banking/transfers/'
        }
      })
    })
    .then(() => linkTo('/banking/transfers/result'))
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
      type: SET_TRANSFER_DEBIT_ACCOUNT,
      payload: {
        debitAccount,
        debitAccountType,
        availableBalance,
      }
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const setCreditAccount = (account, type) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_CREDIT_ACCOUNT,
      payload: {
        account,
        type
      }
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const setCreditFullName = (fullName) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_CREDIT_FULL_NAME,
      payload: fullName
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const setCreditBankType = (selection, bankType) => {
  console.log(selection)
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_CREDIT_BANK_TYPE,
      payload: {
        selection,
        bankType
      }
    });
    const bic = bankType == 'agileBank' ? 'AGILGRAA - AGILE BANK' : ''
    dispatch({
      type: SET_TRANSFER_CREDIT_BANK,
      payload: bic
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
    switch (bankType) {
      case 'agileBank':
        linkTo('/banking/transfers/toAgileBank')
        break;
      case 'domesticBank':
        linkTo('/banking/transfers/toDomesticBank')
        break;
      case 'foreignBank':
        linkTo('/banking/transfers/toForeignBank')
        break;
    }
  }
}

// export const setCreditBankType = (selection, bankType) => {
//   return (dispatch, getState) => {
//     dispatch({
//       type: SET_TRANSFER_CREDIT_BANK_TYPE,
//       payload: {
//         selection,
//         bankType
//       }
//     });
//     const bic = bankType == 'agileBank' ? 'AGILGRAA' : ''
//     dispatch({
//       type: SET_TRANSFER_CREDIT_BANK,
//       payload: bic
//     });
//     dispatch({
//       type: VALIDATE_TRANSFER_TRANSACTION_FORM
//     });
//     switch (bankType) {
//       case 'agileBank':
//         linkTo('/banking/transfers/toAgileBank')
//         break;
//       case 'domesticBank':
//         linkTo('/banking/transfers/toDomesticBank')
//         break;
//       case 'foreignBank':
//         linkTo('/banking/transfers/toForeignBank')
//         break;
//     }
//   }
// }

export const setCreditBank = (bank) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_CREDIT_BANK,
      payload: bank
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const setCreditBankBIC = (bankBIC) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_CREDIT_BANK_BIC,
      payload: bankBIC
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const setTransferAmount = (amount) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_AMOUNT,
      payload: amount
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const setChargesBeneficiary = (selection, beneficiary) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_CHARGES_BENEFICIARY,
      payload: {
        selection,
        beneficiary
      }
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const setTransferComments = (comments) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_COMMENTS,
      payload: comments
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const setTransactionDate = (date, formattedDate) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_TRANSFER_TRANSACTION_DATE,
      payload: {
        date,
        formattedDate
      }
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const setAsapTransfer = (isAsap) => {
  return (dispatch, getState) => {
    dispatch({
      type: SET_ASAP_TRANSFER,
      payload: isAsap
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });
  }
}

export const initTransferTransactionForm = () => {
  return (dispatch, getState) => {
    dispatch({
      type: INIT_TRANSFER_TRANSACTION_FORM,
    })
    getDomesticBanks()(dispatch, getState)
  }
}

export const clearTransferTransactionForm = () => {
  return {
    type: CLEAR_TRANSFER_TRANSACTION_FORM,
  }
}

export const actions = {
  transfer,
  getDomesticBanks,
  setDebitAccount,
  setCreditAccount,
  setCreditFullName,
  setCreditBankType,
  setCreditBankBIC,
  setTransferAmount,
  setChargesBeneficiary,
  setTransferComments,
  setAsapTransfer,
  setTransactionDate,
  initTransferTransactionForm,
  clearTransferTransactionForm,
}

const ACTION_HANDLERS = {

  INITIAL_STATE: (state, action) => {
    return {};
  },

  INIT_TRANSFER_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        debitAccount: {},
        creditAccount: {},
        fullName: {},
        bankType: {},
        bank: {},
        amount: {},
        charges: 5,
        chargesBeneficiary: {},
        comments: {
          value: '',
          correct: true,
        },
        date: {},
        shouldProcess: false
      }
    }
  },

  SET_TRANSFER_DEBIT_ACCOUNT: (state, action) => {
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

  SET_TRANSFER_CREDIT_ACCOUNT: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        creditAccount: {
          value: action.payload.account,
          type: action.payload.type,
          correct: IBAN.isValid(action.payload.account),
        }
      }
    }
  },

  SET_TRANSFER_CREDIT_FULL_NAME: (state, action) => {
    const correctPattern = new RegExp("^[A-Za-zΑ-Ωα-ω ]+$");
    const fullName = action.payload.toUpperCase()
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        fullName: {
          value: correctPattern.test(fullName) || fullName == '' ? fullName : state.transactionForm.fullName.value,
          correct: fullName.split(' ').length == 2,
        }
      }
    }
  },

  SET_TRANSFER_CREDIT_BANK_TYPE: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        bankType: {
          value: action.payload.bankType,
          selection: action.payload.selection,
          correct: true
        }
      }
    }
  },

  SET_DOMESTIC_BANKS: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        domesticBanks: action.payload.data,
      }
    }
  },

  SET_TRANSFER_CREDIT_BANK: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        bank: {
          bic: action.payload.split(' - ')[0],
          name: action.payload.split(' - ')[1],
          selection: action.payload,
          correct: true,
        }
      }
    }
  },

  SET_TRANSFER_CREDIT_BANK_BIC: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        bank: {
          ...state.transactionForm.bank,
          bic: action.payload,
          correct: bic.isValid(action.payload) || action.payload == 'AGILGRAA',
        }
      }
    }
  },

  SET_TRANSFER_AMOUNT: (state, action) => {
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

  SET_TRANSFER_CHARGES_BENEFICIARY: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        chargesBeneficiary: {
          value: action.payload.beneficiary,
          selection: action.payload.selection,
          correct: action.payload.beneficiary == 'both' || action.payload.beneficiary == 'sender' || action.payload.beneficiary == 'beneficiary',
        }
      }
    }
  },

  SET_TRANSFER_COMMENTS: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        comments: {
          value: action.payload,
          correct: action.payload.length <= 100,
        }
      }
    }
  },

  SET_ASAP_TRANSFER: (state, action) => {
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

  SET_TRANSFER_TRANSACTION_DATE: (state, action) => {
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

  VALIDATE_TRANSFER_TRANSACTION_FORM: (state, action) => {
    console.log(state.transactionForm.bankType.correct)
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

  CLEAR_TRANSFER_TRANSACTION_FORM: (state, action) => {
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

export default function transfersReducer (state = {}, action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
