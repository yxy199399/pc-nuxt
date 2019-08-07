import * as ALL from './mutation-types';
const mutations = {
  [ALL.USER_INFO] (state, userInfo) {
    state.userInfo.name = userInfo;
  },
};
export default mutations;
