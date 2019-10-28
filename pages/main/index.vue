<template>
  <div class="mian-index-container">
    <div class="mian-index-content">
      这是首页
      <p>{{username}}</p>
      <button @click="changeName">修改</button>
      <button @click="getNewName">切换</button>
      <icon-svg icon-class="icon_edit" />
      <svg class="svg-icon" aria-hidden="true">
        <use xlink:href="#icon_user_selected" />
      </svg>
    </div>
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
  created() {
    this.$axios.get('/user').then((res) => {
      console.log(res)
    })
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
