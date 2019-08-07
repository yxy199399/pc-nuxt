import _axios from './request';

const APIMAP = {
  data: '/data',
};

// 配置axios
const initApiConfig = key => {
  // 返回请求路径
  const url = APIMAP[key];
  return url;
  // eslint-disable-next-line semi
};

/***
 ** 暴露请求方法
 ***/
export default {
  get: (key, params) => {
    const url = initApiConfig (key);
    return _axios.get (url, {params});
  },

  post: (key, data) => {
    const url = initApiConfig (key, data);
    return _axios.post (url, data);
  },

  put: (key, data) => {
    const url = initApiConfig (key, data);
    return _axios.put (url, data);
  },

  delete: (key, params) => {
    const url = initApiConfig (key, params);
    return _axios.delete (url, {params});
  },

  download: (key, params) => {
    const url = initApiConfig (key, params);
    return _axios ({
      url,
      params,
      method: 'GET',
      responseType: 'blob', // important
    });
  },
};
