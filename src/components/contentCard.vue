<template>
  <div class="card-content">
    <!-- <img src="" alt="" /> -->
    <div class="text">
      <h2>{{title}}</h2>
      <p>{{info}}</p>
      <div class="info">
        <span>{{ dateFormat }}</span>
        <!-- <span>点赞</span>
        <span>评论</span>
        <span>收藏</span> -->
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: ['title', 'info', 'date'],
  computed: {
    dateFormat() {
      return dayjs(Number(this.date)).format('YYYY-MM-DD HH:mm')
    }
  }
}
</script>

<style lang="less" scoped>
.card-content {
  width: 500px;
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
      line-height: 50px;
      font-size: 26px;
      text-align: left;
      width: 100%;
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
      span {
        flex: 1;
      }
      span:first-child {
        flex: 4;
        font-size: 16px;
      }
    }
  }
}
</style>
