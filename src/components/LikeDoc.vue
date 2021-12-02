<template>
  <div class="container">
    <div class="like" :liked="isLiked">
      <span v-if="isLiked">
        <good-two theme="filled" size="28" fill="#42b983" :strokeWidth="2" @click="unLike" />
        {{likesNum}}
      </span>
      <span v-else>
        <good-two theme="outline" size="28" fill="#333" :strokeWidth="2" @click="like" />
        {{likesNum}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    liked: {
      type: Boolean
    },
    likes: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      isLiked: this.liked,
      likesNum: this.likes
    }
  },
  watch: {
    liked(val) {
      // 监听props中的属性
      this.isLiked = val
    },
    likes(val) {
      this.likesNum = val
    }
  },
  methods: {
    async like() {
      await this.$http.post('/api/docs/likeDoc/like', { _id: this.$route.params.pages })
      this.isLiked = !this.isLiked
      this.getLikes()
    },
    async unLike() {
      await this.$http.post('/api/docs/likeDoc/unlike', { _id: this.$route.params.pages })
      this.isLiked = !this.isLiked
      this.getLikes()
    },
    async getLikes() {
      const { data: res } = await this.$http.post('/api/docs/likeDoc/get', { _id: this.$route.params.pages })
      this.isLiked = res.liked
      this.likesNum = res.likes
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  .like {
    display: flex;
    align-items: flex-end;
    font-size: 26px;
    span {
      margin: 0 10px 0 5px;
    }
  }
  [liked='true'] {
    color: #42b983;
  }
}
</style>
