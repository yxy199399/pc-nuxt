import Vue from 'vue';
import Utils from '../helper/Utils';
import Session from '../helper/Session';
import Filters from '../helper/Filters';
import ax from './axios/api';
const comsys = {
  install (Vue) {
    Vue.prototype.$axios = ax;
    Vue.prototype.Utils = Utils;
    Vue.prototype.Session = Session;
  },
};
// 过滤器
Object.keys (Filters).forEach (key => {
  Vue.filter (key, Filters[key]);
});

Vue.use (comsys);
