import {UPDATE_STEP_INDEX} from './actionTypes';

const initialState = {
  activeIndex: 1,
};

export const multiStepReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STEP_INDEX: {
      return {...state, activeIndex: action.payload};
    }
    default: {
      return state;
    }
  }
};
