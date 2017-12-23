import axios from 'axios';

export function setToken(token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  sessionStorage.setItem('token', token);
}

export function isLoggedIn() {
  return !!sessionStorage.getItem('token')
}

export function login(user, password) {
  return axios.post('/login', {
    username: user,
    password: password
  }).then(res => {
    setToken(res.data);
  });
}

export function logout() {
  axios.defaults.headers.common['Authorization'] = null;
  sessionStorage.clear();
}

export function handle403Errors(on403) {
  axios.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 403) {
        on403();
      }
    });
}
