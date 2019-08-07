<template>
  <div>
    这是首页
    <p>{{username}}</p>
    <button @click="changeName">修改</button>
    <button @click="getNewName">切换</button>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      username: this.$store.state.userInfo.name
    }
  },
  methods: {
    ...mapMutations({
      setUserInfo: 'USER_INFO'
    }),
    changeName() {
      this.setUserInfo('姓名')
    },
    getNewName() {
      this.username = this.$store.state.userInfo.name
    }
  }
}
</script>
