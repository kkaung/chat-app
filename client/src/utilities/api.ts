import axios from 'axios';

const baseURL = process.env.API_URL || 'http://localhost:3001/api';

const api = axios.create({ baseURL });

export default api;
