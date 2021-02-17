import apiEndpoints from '../../apiEndpoints';
import sendApiRequest from '../../apiEndpoints/auth';
import {LOGIN_SUCCESSFUL} from './actionTypes';

export const login = (data) => {
  return async (dispatch) => {
    const response = await sendApiRequest({
      url: `${apiEndpoints.AUTH_ENDPOINTS.LOGIN}`,
      method: 'post',
      data: data,
    });

    if (response.status === 'success') {
      dispatch({
        type: LOGIN_SUCCESSFUL,
        payload: response.data,
      });

      return await response.status;
    }
    return await response.status;
  };
};
