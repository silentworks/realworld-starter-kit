import axios from 'axios';

const API_URL = 'https://conduit.productionready.io/api'

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

const Auth = {
    login: (email, password) => 
        api.post('/users/login', { user: { email, password } })
}


export default {
    Auth,
    setToken: _token => { token = _token; }
};