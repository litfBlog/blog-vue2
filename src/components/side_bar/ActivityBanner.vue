<template>
  <div class="container">
    <router-link to="/p/11">
      <img :src="require('@/assets/21-12-7.jpg')" alt="">
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
  margin-bottom: 10px;
  img {
    width: 225px;
    border-radius: 3px;
  }
}
</style>
