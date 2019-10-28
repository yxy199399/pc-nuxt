<template>
  <div class="main-contianer">
    <div class="nav-container">
      <img class="logo" src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="">
      <ul class="nav-list">
        <li v-for="(nav, i) in navList" :key="i" class="nav-item" >
          <nuxt-link :to="nav.name">{{ nav.title }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="login"></div>
    <nuxt-child />
  </div>
</template>
<script>
export default {
  data() {
    return {
      navList: [
        {
          name: '/main/index',
          title: '首页'
        },
        {
          name: '/main/books',
          title: '小册'
        },
        {
          name: '/main/talk',
          title: '话题'
        },
        {
          name: '/main/activity',
          title: '活动'
        }
      ]
    }
  }
}
</script>
