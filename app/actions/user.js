
import * as types from '../const/actionTypes'
import * as apiUser from '../api/user'


export function userLoginSuccess(user) {
  return {
    type: types.USER_LOGIN_SUCCESS,
    user
  }
}

export function userLoginFail(error) {
  return {
    type: types.USER_LOGIN_FAIL,
    error
  }
}

export function userLogin(user) {
  return (dispatch) => {
    dispatch({ type: types.USER_LOGIN })
    return apiUser.login(user)
      .catch((err) => {
        dispatch(userLoginFail(err))
      })
      .then((user) => {
        dispatch(userLoginSuccess(user))
      })
  }
}
