import {combineReducers} from 'redux';
import {loginReducer} from './auth/reducer';
import {signupReducer} from './signup/reducer';

const reducer = {
  loginReducer,
  signupReducer,
};

const rootReducer = combineReducers(reducer);

export default rootReducer;
