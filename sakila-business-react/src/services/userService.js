import axios from 'axios';
import { TWO_YEARS, THREE_YEARS } from '../constants';

export function getProfile() {
  const userData = JSON.parse(localStorage.getItem('user'));
  if (userData) {
    return Promise.resolve(userData);
  } else {
    return axios.get('/user/me')
                .then(res => {
                  localStorage.setItem('user', JSON.stringify(res.data));
                  return res.data
                })
  }
}
