import _ from 'underscore';

export const handleOrderTransactionException = (exception, redirectUrl, dispatch) => {
  !_.isEmpty(exception.response) && exception.response.status == 401 ?
    dispatch({
      type    : 'LOG_OUT',
    }) :
    dispatch({
      type    : 'UNSUCCESSFUL_ORDER_TRANSACTION',
      payload : {
        exception,
        linkToStart: redirectUrl
      }
    })
}
