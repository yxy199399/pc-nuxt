import axios from 'axios';
import {Loading} from 'element-ui';

axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

const config = {
  baseURL: '/api',
  timeout: 2500, // Timeout
};

const _axios = axios.create (config);

// loading
let loadingInstance;

_axios.interceptors.request.use (
  config => {
    loadingInstance = Loading.service ({
      text: '加载中...',
      background: 'rgba(255, 255, 255, 0.2)',
    });

    if (localStorage.getItem ('token')) {
      config.headers['Api-Access-Token'] = localStorage.getItem ('token');
    }
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject (error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use (
  res => {
    if (loadingInstance) loadingInstance.close ();
    // 301 重新登录
    // Do something with response data
    return res;
  },
  error => {
    return Promise.reject (error);
  }
);

export default _axios;
