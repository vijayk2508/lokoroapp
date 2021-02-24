import {combineReducers} from 'redux';
import {loginReducer} from './auth/reducer';
import { multiStepReducer } from './multisteps/reducer';
import {signupReducer} from './signup/reducer';


const reducer = {
  loginReducer,
  signupReducer,
  multiStepReducer
};

const rootReducer = combineReducers(reducer);

export default rootReducer;
