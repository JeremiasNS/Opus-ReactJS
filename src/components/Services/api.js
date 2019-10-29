import axios from 'axios';

const api = axios.create({
    baseURL: 'http://jeremias_pc:8080/cadidatovaga'
});

export default api;