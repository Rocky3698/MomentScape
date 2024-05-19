import axios from 'axios';

const axios_base = axios.create({
    baseURL: 'https://momentscapeapi.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

axios_base.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers['Authorization'] = `token ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axios_base;
