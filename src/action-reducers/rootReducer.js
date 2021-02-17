import {combineReducers} from 'redux';
import {loginReducer} from './auth/reducer';

const reducer = {
  loginReducer,
};

const rootReducer = combineReducers(reducer);

export default rootReducer;
