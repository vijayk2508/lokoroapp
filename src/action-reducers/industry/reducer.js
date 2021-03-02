import {GETALL} from './actionTypes';

const initialState = {
  industryList: [],
  isLoaded : false
};
export const industryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETALL: {
      return {...state, industryList: action.payload , isLoaded : true};
    }
    default: {
      return state;
    }
  }
};


