import {UPDATE_STEP_INDEX} from './actionTypes';

export const updateStepIndex = (index = 1) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_STEP_INDEX,
      payload: index,
    });
  };
};
