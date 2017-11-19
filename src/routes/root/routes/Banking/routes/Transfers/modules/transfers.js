import cookie from 'react-cookie';
import axios from 'axios';
import querystring from 'querystring';
import { browserHistory } from 'react-router';
import dateformat from 'dateformat';
import IBAN from 'iban';
import bic from 'bic';
import _ from 'underscore'
import { linkTo } from 'routes/root/routes/Banking/modules/banking';
import {
  getDebitAccount,
  getDebitAccountAvailableBalance,
  getDebitAccountCurrency,
  getCustomerName,
  getActualFullName,
  findTransferCharges,
  isValidFullName,
  isValidDebitAmount,
  isValidDate,
  isValidChargesBeneficiary,
} from 'routes/root/routes/Banking/routes/utils/commonUtils';
import {
  handleRequestException,
  handleTransactionException
} from 'routes/root/routes/Banking/routes/utils/commonActions';
import { linkToProperTransferForm } from '../utils/transferUtils';

const INIT_TRANSFER_TRANSACTION_FORM = 'INIT_TRANSFER_TRANSACTION_FORM';
const INIT_TRANSFER_TO_AGILE_TRANSACTION_FORM = 'INIT_TRANSFER_TO_AGILE_TRANSACTION_FORM';
const INIT_TRANSFER_TO_DOMESTIC_TRANSACTION_FORM = 'INIT_TRANSFER_TO_DOMESTIC_TRANSACTION_FORM';
const INIT_TRANSFER_TO_FOREIGN_TRANSACTION_FORM = 'INIT_TRANSFER_TO_FOREIGN_TRANSACTION_FORM';
const SET_DOMESTIC_BANKS = 'SET_DOMESTIC_BANKS';
const SET_TRANSFER_DEBIT_ACCOUNT = 'SET_TRANSFER_DEBIT_ACCOUNT';
const SET_TRANSFER_CURRENCY = 'SET_TRANSFER_CURRENCY';
const SET_TRANSFER_CREDIT_ACCOUNT = 'SET_TRANSFER_CREDIT_ACCOUNT';
const SET_TRANSFER_CREDIT_FULL_NAME = 'SET_TRANSFER_CREDIT_FULL_NAME';
const SET_TRANSFER_CREDIT_BANK_TYPE = 'SET_TRANSFER_CREDIT_BANK_TYPE';
const SET_TRANSFER_CREDIT_BANK = 'SET_TRANSFER_CREDIT_BANK';
const SET_TRANSFER_CREDIT_BANK_BIC = 'SET_TRANSFER_CREDIT_BANK_BIC';
const SET_TRANSFER_AMOUNT = 'SET_TRANSFER_AMOUNT';
const SET_TRANSFER_CHARGES_BENEFICIARY = 'SET_TRANSFER_CHARGES_BENEFICIARY';
const SET_TRANSFER_CHARGES = 'SET_TRANSFER_CHARGES';
const SET_TRANSFER_COMMENTS = 'SET_TRANSFER_COMMENTS';
const SET_ASAP_TRANSFER = 'SET_ASAP_TRANSFER';
const SET_TRANSFER_TRANSACTION_DATE = 'SET_TRANSFER_TRANSACTION_DATE';
const VALIDATE_TRANSFER_TRANSACTION_FORM = 'VALIDATE_TRANSFER_TRANSACTION_FORM';
const CLEAR_TRANSFER_TRANSACTION_FORM = 'CLEAR_TRANSFER_TRANSACTION_FORM';
const SUCCESSFUL_TRANSACTION = 'SUCCESSFUL_TRANSACTION';
const UNSUCCESSFUL_TRANSACTION = 'UNSUCCESSFUL_TRANSACTION';

export const getDomesticBanks = () => {
  return (dispatch, getState) => {
    if (_.isEmpty(getState().transfers.transactionForm.domesticBanks)) {
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
      .catch((exception) => handleRequestException(exception, dispatch))
    }
  }
}

export const transfer = (transactionForm) => {
  return (dispatch, getState) => {
    return axios({
      method: 'post',
      url: 'http://localhost:26353/api/transfer/Transfer',
      data: querystring.stringify({
        debitProductId: transactionForm.debitAccount.value,
        debitProductType: transactionForm.debitAccount.type,
        creditProductId: transactionForm.creditAccount.value,
        creditProductType: 'isAccount',
        beneficiary: transactionForm.fullName.value,
        bank: transactionForm.bank.bic,
        isTransfer: true,
        amount: Number(transactionForm.amount.value).toLocaleString(undefined, {minimumFractionDigits: 2}).replace('.', ''),
        currency: transactionForm.currency.value,
        date: transactionForm.date.value,
        expenses: transactionForm.expenses,
        comments: transactionForm.comments.value,
        language: getState().root.language,
      }),
      withCredentials: true,
    })
    .then(() => {
      dispatch({
        type    : SUCCESSFUL_TRANSACTION,
        payload : '/banking/transfers'
      })
    })
    .then(() => linkTo('/banking/transfers/result'))
  }
}

export const setDebitAccount = (debitAccount, debitAccountType) => {
  return (dispatch, getState) => {
    const availableBalance = getDebitAccountAvailableBalance(debitAccountType, debitAccount, getState())
    const currency = getDebitAccountCurrency(debitAccountType, debitAccount, getState())
    dispatch({
      type: SET_TRANSFER_DEBIT_ACCOUNT,
      payload: {
        debitAccount,
        debitAccountType,
        availableBalance,
      }
    });
    dispatch({
      type: SET_TRANSFER_CURRENCY,
      payload: currency,
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

    const customerName = getCustomerName(getState().banking.customerName)
    const fullName = bankType == 'agileBank' ? customerName : ''
    dispatch({
      type: SET_TRANSFER_CREDIT_FULL_NAME,
      payload: fullName
    });
    dispatch({
      type: VALIDATE_TRANSFER_TRANSACTION_FORM
    });

    linkToProperTransferForm(bankType);
  }
}

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
      type: SET_TRANSFER_CHARGES
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

export const initTransferToAgileTransactionForm = () => {
  return (dispatch, getState) => {
    dispatch({
      type: INIT_TRANSFER_TO_AGILE_TRANSACTION_FORM,
    })
    getDomesticBanks()(dispatch, getState)
  }
}

export const initTransferToDomesticTransactionForm = () => {
  return (dispatch, getState) => {
    dispatch({
      type: INIT_TRANSFER_TO_DOMESTIC_TRANSACTION_FORM,
    })
    getDomesticBanks()(dispatch, getState)
  }
}

export const initTransferToForeignTransactionForm = () => {
  return (dispatch, getState) => {
    dispatch({
      type: INIT_TRANSFER_TO_FOREIGN_TRANSACTION_FORM,
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
  initTransferToAgileTransactionForm,
  initTransferToDomesticTransactionForm,
  initTransferToForeignTransactionForm,
  clearTransferTransactionForm,
}

const ACTION_HANDLERS = {
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
        charges: {},
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

  INIT_TRANSFER_TO_AGILE_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        creditAccount: {},
        amount: {},
        charges: {
          value: 0,
          correct: true,
        },
        chargesBeneficiary: {},
        comments: {
          value: '',
          correct: true,
        },
        date: {},
      }
    }
  },

  INIT_TRANSFER_TO_DOMESTIC_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        creditAccount: {},
        fullName: {},
        bank: {},
        amount: {},
        charges: {},
        chargesBeneficiary: {},
        comments: {
          value: '',
          correct: true,
        },
        date: {},
      }
    }
  },

  INIT_TRANSFER_TO_FOREIGN_TRANSACTION_FORM: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        creditAccount: {},
        fullName: {},
        bank: {},
        amount: {},
        charges: {},
        chargesBeneficiary: {},
        comments: {
          value: '',
          correct: true,
        },
        date: {},
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

  SET_TRANSFER_CURRENCY: (state, action) => {
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
    const creditFullName = getActualFullName(action.payload);
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        fullName: {
          value: creditFullName,
          correct: isValidFullName(creditFullName)
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
          correct: isValidDebitAmount(action.payload, state.transactionForm.debitAccount.availableBalance)
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
          correct: isValidChargesBeneficiary(action.payload.beneficiary)
        }
      }
    }
  },

  SET_TRANSFER_CHARGES: (state, action) => {
    return {
      ...state,
      transactionForm: {
        ...state.transactionForm,
        charges: {
          value: findTransferCharges(state.transactionForm.chargesBeneficiary.value),
          correct: true
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
          asapTransaction: action.payload,
          correct: action.payload,
          value: undefined,
          asapText: 'ΑΜΕΣΑ'
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
          asapTransaction: false,
          asapText: undefined,
          view: action.payload.formattedDate,
          correct: isValidDate(action.payload.date)
        }
      }
    }
  },

  VALIDATE_TRANSFER_TRANSACTION_FORM: (state, action) => {
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
