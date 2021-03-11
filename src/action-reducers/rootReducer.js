import {combineReducers} from 'redux';
import {loginReducer} from './auth/reducer';
import {industryReducer} from './industry/reducer';
import {multiStepReducer} from './multisteps/reducer';
import {neighbourhoodReducer} from './neighbourhood/reducer';
import {signupReducer} from './signup/reducer';

const reducer = {
  loginReducer,
  signupReducer,
  multiStepReducer,
  industryReducer,
  neighbourhoodReducer,
};

const rootReducer = combineReducers(reducer);

export default rootReducer;
