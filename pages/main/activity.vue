<template>
  <div>
    activity1111111
  </div>
</template>
<script>
export default {
  asyncData (context) {
    // called every time before loading the component
    return { name: 'World' }
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  },
  head () {
    return {
      title: '活动',
      meta: [
        { hid: '活动', name: '活动', content: '活动' }
      ]
    }
    // Set Meta Tags for this Page
  },
}
</script>