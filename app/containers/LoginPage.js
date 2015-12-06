import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { userLogin } from '../actions/user';
import { setRememberMe, setAutoLogin } from '../actions/config';

function mapStateToProps(state) {
  return {
    // loginForm: state.form.login
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    userLogin,
    setRememberMe,
    setAutoLogin
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
