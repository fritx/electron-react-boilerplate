import * as types from '../const/actionTypes'

export default function userConfig(state = {}, action) {
  switch (action.type) {

  case types.LOAD_CONFIG_SUCCESS:
    return {
      ...state,
      ...action.config
    }

  case types.SET_REMEMBER_ME:
    return {
      ...state,
      login: {
        ...state.login,
        rememberMe: action.value
      }
    }

  case types.SET_AUTO_LOGIN:
    return {
      ...state,
      login: {
        ...state.login,
        autoLogin: action.value
      }
    }

  default:
    return state;
  }
}
