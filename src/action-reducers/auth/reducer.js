import {LOGIN_SUCCESSFUL} from './actionTypes';

const initialState = {
  userDetail: {},
  isLoggedIn: false,
  isUserByIdLoad: false,
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL: {
      return {...state, values: action.payload};
    }
  default: {
      return state;
    }
  }
};
