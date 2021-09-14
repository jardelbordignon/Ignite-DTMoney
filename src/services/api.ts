import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dtmoney-jb.vercel.app/api',
});

export default api;
