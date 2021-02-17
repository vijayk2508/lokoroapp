import { AsyncStorage } from 'react-native';
import apiEndpoints from '../../apiEndpoints';
import sendApiRequest from '../../apiEndpoints/service';
import {LOGIN_SUCCESSFUL} from './actionTypes';

export const login = (data) => {
    debugger
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
      AsyncStorage.setItem('user_id', response.data);
      return await response;
    }
    return await response;
  };
};
