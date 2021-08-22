<template>
  <div class="card-content">
    <img src="" alt="" />
    <div class="text">
      <h2>我是标题</h2>
      <p>文章简介文章简介文章简介文章简介文章简介文章简介文章简介文章简介</p>
      <div class="info">
        <span>1970-1-1</span>
        <span>点赞</span>
        <span>评论</span>
        <span>收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
    height: 100%;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      line-height: 60px;
      font-size: 26px;
    }
    p {
      line-height: 30px;
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
