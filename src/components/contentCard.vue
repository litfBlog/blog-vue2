<template>
  <div class="card-content">
    <!-- <img src="" alt="" /> -->
    <div class="text">
      <h2 :title="title">{{title}}</h2>
      <p :title="info">{{info}}</p>
      <div class="info">
        <span>{{ dateFormat }}</span>
        <!-- <span>点赞</span>
        <span>评论</span>
        <span>收藏</span> -->
        <span>阅读:{{ views[0] }}</span>
        <span>点赞:{{likes[0]}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  // props: ['title', 'info', 'date', 'views'],
  props: {
    title: {
      type: String
    },
    info: {
      type: String
    },
    date: {
      type: String
    },
    views: {
      type: Array,
      default: function () {
        return []
      }
    },
    likes: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {
    dateFormat() {
      return dayjs(Number(this.date)).format('YYYY-MM-DD HH:mm')
    }
  }
}
</script>

<style lang="less" scoped>
.card-content {
  // width: 500px;
  height: 200px;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 16px;
  box-sizing: border-box;
  img {
    width: 200px;
    height: 160px;
  }
  div.text {
    text-align: left;
    height: 100%;
    width: 200px;
    // margin: auto;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      line-height: 30px;
      width: 100%;
      font-size: 26px;
      text-align: left;
      max-height: 60px;
      word-wrap: break-word;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    p {
      line-height: 20px;
      width: 100%;
      word-wrap: break-word;
      overflow: hidden;
      max-height: 4em;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
    .info {
      width: 100%;
      display: flex;
      font-size: 12px;
      justify-content: space-between;
      span {
        font-size: 16px;
      }
    }
  }
}
</style>
