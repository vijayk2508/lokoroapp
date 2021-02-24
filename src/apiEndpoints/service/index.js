/* eslint-disable no-unused-vars */
import axios from 'axios';
import { FLASK_PORT } from '../../constants/portConstant';

axios.defaults.baseURL = FLASK_PORT;
// axios.defaults.headers.common.Authorization = cookies.get('api_token');

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
// axios.defaults.headers = {
//   mode: "no-cors",
// };

export const config = {
  // headers: {
  //   Authorization: cookies.get('api_token'),
  //   'Content-Type': 'application/json',
  // },
};

export const fileConfig = {
  // headers: {
  //   Authorization: cookies.get('api_token'),
  //   'Content-Type': 'multipart/form-data',
  // },
};

function generateAPIErrorMessage(exception) {
  return exception.message;
}

export default async function sendApiRequest(apiParams) {
  try {
    debugger
    const response = await axios(apiParams);
    if (response.status === 200) {
      debugger
      return {
        status: 'success',
        message: response.data.message,
        data: response.data,
        response: response,
      };
    } else {
      debugger
      return {
        status: 'error',
        message: generateAPIErrorMessage(response),
        exceptionObject: response,
        response: response,
      };
    }
  } catch (exception) {
    debugger
    return {
      status: 'error',
      message: generateAPIErrorMessage(exception),
      exceptionObject: exception,
    };
  }
}
