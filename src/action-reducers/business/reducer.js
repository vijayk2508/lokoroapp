import { ADDED_FAILED, ADDED_SUCCESSFULL } from './actionTypes';

const initialState = {
  status: false,
};
export const businessReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED_SUCCESSFULL: {
      return { ...state, status: true };
    }
    default: {
      return state;
    }
  }
};
