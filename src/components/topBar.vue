<template>
  <div class="topBar-content">
    <img :src="logo" alt="logo" class="logo" v-if="logo" />
    <span class="title">{{ title }}</span>
    <slot name="list" class="list"></slot>
    <div class="user">
      <a href="/user">
        <TopBarUser></TopBarUser>
      </a>
    </div>
  </div>
</template>

<script>
import TopBarUser from '@/components/TopBarUser.vue'
export default {
  components: { TopBarUser },
  props: ['title', 'logo']
  // methods: {
  //   log() {
  //     console.log(this)
  //   }
  // }
}
</script>

<style lang="less" scoped>
.topBar-content {
  z-index: 1000;
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
    height: 30px;
  }
  .title {
    font-size: 26px;
  }
  .user {
    position: absolute;
    margin: auto 0;
    // width: 200px;
    height: 100%;
    right: 30px;
    top: 0;
    bottom: 0;
  }
}
@media screen and (max-width: 400px) {
  .title {
    display: none;
  }
}
</style>
