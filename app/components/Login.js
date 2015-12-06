import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import styles from './Login.module.css'
import * as apiWindow from '../api/window'

class LoginForm extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    submitting: PropTypes.bool.isRequired,
    submit: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
  }

  render() {
    const { fields, handleSubmit, submit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(submit)}>
        <fieldset>
          <div>
            <input id="iptUsername" type="text" required
              placeholder="用户名..." {...fields.username}/>
          </div>
          <div>
            <input id="iptPassword" type="password" required
              placeholder="密码..." {...fields.password}/>
          </div>
          <div>
            <label>
              <input type="checkbox"
                {...fields.rememberMe}
                checked={fields.rememberMe.value}/>
              <span>记住密码</span>
            </label>
            <label>
              <input type="checkbox"
                {...fields.autoLogin}
                checked={fields.autoLogin.value}/>
              <span>自动登录</span>
            </label>
          </div>
          <div>
            <button type="submit" disabled={submitting}>登录</button>
          </div>
        </fieldset>
      </form>
    )
  }
}


LoginForm = reduxForm({
  form: 'login',
  fields: ['username', 'password', 'rememberMe', 'autoLogin'],

  // todo: 表单验证 validate
  // http://erikras.github.io/redux-form/#/examples/submit-validation?_k=zzn5q9
  // asyncValidate
}, (state) => {
  return {
    initialValues: state.config.login
  }
})(LoginForm)


class Login extends Component {

  // http://erikras.github.io/redux-form/#/examples/submit-validation
  submit(values) {
    const { userLogin, setRememberMe, setAutoLogin } = this.props
    const { username, password, rememberMe, autoLogin } = values
    setRememberMe(rememberMe)
    setAutoLogin(autoLogin)
    return userLogin({ username, password }) // Promise
      .then((user) => {
        apiWindow.location.hash = '/home' // 转场
      }, (reason) => {
        apiWindow.alert(reason) // 提示
      })
  }

  render() {
    return (
      <div>
        <LoginForm submit={this.submit.bind(this)} />
      </div>
    )
  }
}

export default Login
