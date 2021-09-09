<template>
  <div class="userAvatar-content">
    <div :style="{backgroundImage: `url(${src})`}"></div>
  </div>
</template>

<script>
export default {
  props: ['src']
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
