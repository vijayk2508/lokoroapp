import {SIGNUP_SUCCESSFUL, UPDATE_CREATE_ACCOUNT_STEP_INDEX} from './actionTypes';

const initialState = {
  activeIndex: 1,
};
export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CREATE_ACCOUNT_STEP_INDEX: {
      return {...state, activeIndex: action.payload};
    }
    default: {
      return state;
    }
  }
};
