import apiEndpoints from '../../apiEndpoints';
import sendApiRequest from '../../apiEndpoints/service';
import {
  ADDED_SUCCESSFUL, ADDED_FAILED
} from './actionTypes';

export const businessRegister = (data) => {
  return async () => {
    const response = await sendApiRequest({
      url: `${apiEndpoints.AUTH_ENDPOINTS.BUSINESS.CREATE}`,
      method: 'post',
      data
    });

    if (response.status === 'success') {
      dispatch({
        type: ADDED_SUCCESSFUL,
      });
    }
    else {
      dispatch({
        type: ADDED_FAILED,
      });
    }
    return await response;
  };
};
