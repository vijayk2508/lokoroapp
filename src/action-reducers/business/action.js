import apiEndpoints from '../../apiEndpoints';
import sendApiRequest from '../../apiEndpoints/service';
import {ADDED_SUCCESSFUL, ADDED_FAILED} from './actionTypes';

export const businessRegister = (data) => {
  debugger;
  return async (dispatch) => {
    const response = await sendApiRequest({
      url: `${apiEndpoints.AUTH_ENDPOINTS.BUSINESS.CREATE}`,
      method: 'post',
      data,
    });
    // debugger;
    // if (response.status === 'success') {
    //   dispatch({
    //     type: ADDED_SUCCESSFUL,
    //   });
    // } else {
    //   debugger;
    //   dispatch({
    //     type: ADDED_FAILED,
    //   });
    // }
    return await response;
  };
};
