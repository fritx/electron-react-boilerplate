import { combineReducers } from 'redux';
import config from './config';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  config
});

export default rootReducer;
