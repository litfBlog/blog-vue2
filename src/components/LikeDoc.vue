<template>
  <div class="container">
    <!-- <div @click="like" v-if="liked">👍</div> -->
    <div @click="like">👍👍</div>
  </div>
</template>

<script>
export default {
  props: {
    liked: {
      type: Boolean
    }
  },
  created() {},
  methods: {
    async like() {
      await this.$http.post('/api/docs/likeDoc/like', { _id: 93 })
    },
    unLike() {}
  }
}
</script>

<style lang="less" scoped>
</style>
