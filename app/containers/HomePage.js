import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as userActions from '../actions/user';

function mapStateToProps(state) {
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...userActions
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
