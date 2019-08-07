// import Vue from 'vue';
// import Vuex from 'vuex';

// import mutations from './mutations'
import actions from './actions';
import getters from './getters';

// Vue.use(Vuex)

const state = () => ({
  userInfo: {
    name: '名字',
  },
});

export default {
  state,
  getters,
  actions,
  // mutations
};
