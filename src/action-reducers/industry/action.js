import apiEndpoints from '../../apiEndpoints';
import sendApiRequest from '../../apiEndpoints/service';
import {
  GETALL
} from './actionTypes';

export const getAllIndustry = () => {
  return async (dispatch) => {
    const response = await sendApiRequest({
      url: `${apiEndpoints.AUTH_ENDPOINTS.INDUSTRY.GETALL}`,
      method: 'get',
    });
   if (response.status === 'success') {
      dispatch({
        type: GETALL,
        payload: response.data.IndustryObj,
      });
      return await response;
    }
    return await response;
  };
};

export const UpdateSignUpStep = (index = 1) => {
  return async (dispatch) => {
    dispatch({
      type: UPDATE_CREATE_ACCOUNT_STEP_INDEX,
      payload: index,
    });
  };
};
