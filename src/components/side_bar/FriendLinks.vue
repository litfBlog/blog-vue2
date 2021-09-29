<template>
  <div class="container">
    <h1>友链</h1>
    <a href="http://alongw.cn" target="_blank">阿龙博客</a>
    <a href="https://www.lieyan.space/" target="_blank">烈焰博客</a>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.container {
  width: 240px;
  height: 260px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  // 用户文章信息栏
  .bottom {
    display: flex;
    justify-content: space-around;
    width: 80%;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 35px;
      span {
        &:first-child {
          font-size: 16px;
          font-weight: 600;
        }
        &:last-child {
          font-size: 14px;
          color: rgb(104, 104, 104);
        }
      }
    }
  }
}
</style>
