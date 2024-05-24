import axios from 'axios';
import Cookies from 'js-cookie';
import { ApiUrl } from './BaseUrl';

const api = axios.create({
  baseURL: ApiUrl,
});


export default api;
