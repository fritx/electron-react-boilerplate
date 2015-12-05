
import * as types from '../const/actionTypes'
import * as apiConfig from '../api/config'


export function loadConfigFail(error) {
  return {
    type: types.LOAD_CONFIG_FAIL,
    error
  }
}

export function loadConfigSuccess(config) {
  return {
    type: types.LOAD_CONFIG_SUCCESS,
    config
  }
}

// login等较为重要 区分状态 尝试/成功/失败
export function loadConfig() {
  return (dispatch) => {
    dispatch({ type: types.LOAD_CONFIG })
    return apiConfig.loadConfig()
      .catch((err) => {
        dispatch(loadConfigFail(err))
      })
      .then((config) => {
        dispatch(loadConfigSuccess(config))
      })
  }
}

// setConfig等 较为次要 暂时省略错误判断
export function setRememberMe(value) {
  return (dispatch) => {
    apiConfig.setConfig('login:rememberMe', value)
    return apiConfig.saveConfig()
        .then(() => {
          dispatch({
            type: types.SET_REMEMBER_ME,
            value
          })
        })
  }
}

export function setAutoLogin(value) {
  return (dispatch) => {
    apiConfig.setConfig('login:autoLogin', value)
    return apiConfig.saveConfig()
        .then(() => {
          dispatch({
            type: types.SET_AUTO_LOGIN,
            value
          })
        })
  }
}
