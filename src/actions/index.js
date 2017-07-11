import { FETCH_USERS } from './types';
import axios from 'axios';

export const fetchUsers = () => async dispatch => {
  axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
    dispatch({
      type: FETCH_USERS,
      payload: response.data,
    });
  });
};
