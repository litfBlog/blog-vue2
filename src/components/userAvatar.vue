<template>
  <div class="userAvatar-content">
    <div :style="{backgroundImage: `url(${url})`}"></div>
  </div>
</template>

<script>
import defaultAvatar from '@/assets/defaultAvatar.jpg'
export default {
  props: ['src'],
  data() {
    return {
      url: ''
    }
  },
  created() {
    console.log(this.src)
    // this.src !== undefined ? (this.url = this.src) : (this.url = '/assets/defaultAvatar.jpg')
    if (!this.src) {
      this.url = defaultAvatar
    }
  }
}
</script>

<style lang="less" scoped>
.userAvatar-content {
  overflow: hidden;
  div {
    width: 100%;
    height: 100%;
    background-size: cover;
  }
}
</style>
