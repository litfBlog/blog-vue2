<template>
  <div class="userAvatar-content">
    <div v-if="src" :style="{backgroundImage: `url(${src})`}"></div>
    <div v-else :style="{backgroundImage: `url(${url})`}"></div>
  </div>
</template>

<script>
import defaultAvatar from '@/assets/defaultAvatar.jpg'
export default {
  props: ['src'],
  data() {
    return {
      url: defaultAvatar
    }
  },
  created() {
    console.log(this.src)
    // this.src !== undefined ? (this.url = this.src) : (this.url = defaultAvatar)

    // if (!this.src) {
    //   this.url = defaultAvatar
    // } else {
    //   this.url = this.src
    // }
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
