import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import styles from './Login.module.css';

class Login extends Component {
  static propTypes = {
    userLogin: PropTypes.func.isRequired,
    setRememberMe: PropTypes.func.isRequired,
    setAutoLogin: PropTypes.func.isRequired,
    config: PropTypes.object.isRequired
  };

  render() {
    const { userLogin, setRememberMe, setAutoLogin, config } = this.props;
    return (
      <div>
        <form>
          <fieldset>
            <div>
              <input id="iptUsername" type="text"
                placeholder="用户名..."
                defaultValue={config.login.username}/>
            </div>
            <div>
              <input id="iptPassword" type="password"
                placeholder="密码..."
                defaultValue=""/>
            </div>
            <div>
              <label>
                <input type="checkbox"
                  onChange={(e) => setRememberMe(e.target.checked)}
                  checked={config.login.rememberMe}/>
                <span>记住密码</span>
              </label>
              <label>
                <input type="checkbox"
                  onChange={(e) => setAutoLogin(e.target.checked)}
                  checked={config.login.autoLogin}/>
                <span>自动登录</span>
              </label>
            </div>
            <div>
              <button type="submit">登录</button>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Login;
