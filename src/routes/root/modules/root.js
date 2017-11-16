const SET_LANGUAGE = 'SET_LANGUAGE';

export const setLanguage = (language) => {
  return (dispatch, getState) => {
    dispatch({
      type    : SET_LANGUAGE,
      payload : language
    });
  }
}

const initState = () => {
  return {
    language: localStorage.language ? localStorage.language : 'greek'
  }
}

export const actions = {
  setLanguage,
}

const ACTION_HANDLERS = {
  SET_LANGUAGE: (state, action) => {
    localStorage.setItem('language', action.payload);
    return {
      ...state,
      language: action.payload
    }
  },
}

export default function rootReducer (state = initState(), action) {
   const handler = ACTION_HANDLERS[action.type]
   return handler ? handler(state, action) : state
}
