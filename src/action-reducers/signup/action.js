import {AsyncStorage} from 'react-native';
import apiEndpoints from '../../apiEndpoints';
import sendApiRequest from '../../apiEndpoints/service';
import {
  LOGIN_SUCCESSFUL,
  UPDATE_CREATE_ACCOUNT_STEP_INDEX,
} from './actionTypes';

export const register = (data) => {
  return async (dispatch) => {
    const response = await sendApiRequest({
      url: `${apiEndpoints.AUTH_ENDPOINTS.SIGNUP}`,
      method: 'post',
      data: data,
    });

    debugger;
    if (response.status === 'success') {
      // dispatch({
      //   type: LOGIN_SUCCESSFUL,
      //   payload: response.data,
      // });
      // AsyncStorage.setItem('user_id', response.data);
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
