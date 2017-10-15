import axios from 'axios';

const API_URL = 'https://conduit.productionready.io/api';

const responseBody = res => res.data;

const api = axios.create({
  baseURL: API_URL
});

let token = null;
const authHeader = config => {
  if (token) {
    config.headers = {
      'Authorization': `${token}`
    };
  }
  return config;
};

api.interceptors.request.use(authHeader);

const requests = {
  get: (url, body) =>
    api.get(url, body).then(responseBody),

  post: (url, body) =>
    api.post(url, body).then(responseBody)
};

const Auth = {
  login: (email, password) => 
    requests.post('/users/login', { user: { email, password } })
};

const Articles = {
  all: page =>
    requests.get(`/articles`)
};


export default {
  Articles,
  Auth,
  setToken: _token => { token = _token; }
};