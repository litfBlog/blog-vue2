<template>
  <div class="topBar-content" @click="$router.go('/')">
    <img :src="logo" alt="logo" class="logo" v-if="logo" />
    <span class="title">{{ title }}</span>
    <slot name="list" class="list"></slot>
  </div>
</template>

<script>
export default {
  props: ['title', 'logo'],
  methods: {
    log() {
      console.log(this)
    }
  }
}
</script>

<style lang="less" scoped>
.topBar-content {
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  height: 66px;
  background-color: #fff;
  align-items: center;
  position: relative;
  padding: 0 10px;

  box-shadow: 0 0 50px rgba(59, 187, 138, 0.068);

  .logo {
    height: 50px;
  }
  .title {
    font-size: 26px;
  }
}
@media screen and (max-width: 400px) {
  .title {
    display: none;
  }
}
</style>
