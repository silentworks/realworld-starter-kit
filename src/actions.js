import service from './services.js';

const TOKEN_KEY = 'jwt';

export function login(email, password) {
  return service.Auth.login(email, password)
    .then(response => {
      setToken(response.user.token);
      return response;
    });
};

const setToken = token => {
  window.localStorage.setItem(TOKEN_KEY, token);
};

export function getToken() {
  return window.localStorage.getItem(TOKEN_KEY);
};