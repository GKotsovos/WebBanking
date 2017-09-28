import _ from 'underscore';

export const handleRequestException = (exception, dispatch) => {
  !_.isEmpty(exception.response) && exception.response.status == 401 ?
    dispatch({
      type    : 'LOG_OUT',
    }) :
    dispatch({
      type    : 'REQUEST_ERROR',
      payload : exception
    })
}

export const handleTransactionException = (exception, redirectUrl, dispatch) => {
  !_.isEmpty(exception.response) && exception.response.status == 401 ?
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
