import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as configActions from '../actions/config';
import * as userActions from '../actions/user';

function mapStateToProps(state) {
  return {
    config: state.config
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...configActions,
    ...userActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
