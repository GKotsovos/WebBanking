import { isEmpty } from 'underscore';

export const handleRequestException = (exception, dispatch) => {
  !isEmpty(exception.response) && exception.response.status == 401 ?
    dispatch({
      type    : 'LOG_OUT',
    }) :
    dispatch({
      type    : 'REQUEST_ERROR',
      payload : exception
    })
}

export const handleTransactionException = (exception, redirectUrl, dispatch) => {
  !isEmpty(exception.response) && exception.response.status == 401 ?
    dispatch({
      type    : 'LOG_OUT',
    }) :
    dispatch({
      type    : 'UNSUCCESSFUL_TRANSACTION',
      payload : {
        exception,
        linkToStart: redirectUrl
      }
    })
}
