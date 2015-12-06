
import * as types from '../const/actionTypes'
import * as errors from '../const/errorMessages'
import * as apiUser from '../api/user'


export function userLoginSuccess(user) {
  return {
    type: types.USER_LOGIN_SUCCESS,
    user
  }
}

// 我发现 不能直接传入Error对象
// 否则redux-devtools无法 准确显示action属性
export function userLoginFail(reason) {
  return {
    type: types.USER_LOGIN_FAIL,
    reason // 字符串
  }
}

export function userLogin(user) {
  return (dispatch) => {
    dispatch({ type: types.USER_LOGIN })
    return apiUser.userLogin(user)
      .then((user) => {
        dispatch(userLoginSuccess(user))
        return user
      }, (reason) => {
        dispatch(userLoginFail(reason))
        return Promise.reject(reason)
      })
  }
}
