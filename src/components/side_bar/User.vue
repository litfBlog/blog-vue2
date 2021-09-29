<template>
  <div class="container">
    <!-- <userAvatar class="avatar" src="https://alongw.cn/icon/logo.jpg"></userAvatar> -->
    <template v-if="isLogin">
      <userAvatar class="avatar" :src="avatar"></userAvatar>
      <h2>{{userName}}</h2>
      <div class="bottom">
        <div>
          <span>{{pagesNum}}</span>
          <span>文章数</span>
        </div>
        <div>
          <span>{{fansNum}}</span>
          <span>粉丝数</span>
        </div>
        <div>
          <span>{{loveNum}}</span>
          <span>获赞数</span>
        </div>
      </div>
    </template>
    <div v-else class="unLogin">
      <!-- <img src="./../../assets/alongw.cn_setu.jpg" alt=""> -->
      <router-link to="/login" class="link">
        <button class="login">登录</button>
      </router-link>
      <router-link to="/register" class="link">
        <button class="register">注册</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
export default {
  data() {
    return {
      isLogin: false,
      userName: '',
      avatar: '',
      loveNum: '',
      fansNum: '',
      pagesNum: ''
    }
  },
  created() {
    this.initUser()
  },
  methods: {
    async initUser() {
      const { data: res } = await this.$http.post('/api/user/loginStatus')
      console.log(res.data.isLogin)
      this.isLogin = res.data.isLogin
      this.userName = res.data.userName
      this.avatar = res.data.avatar
      this.loveNum = res.data.loveNum
      this.fansNum = res.data.fansNum
      this.pagesNum = res.data.pagesNum
      bus.$emit('userinfo', res)
    }
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 220px;
  height: 260px;
  // padding: 50px 0;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 6px;
  .unLogin {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    position: relative;
    img {
      width: 100%;
      // position: absolute;
      // top: 0;
      // left: 0;
    }
    button {
      height: 30px;
      margin: 8px 0;
      border: none;
      font-size: 17px;
      width: 100%;
    }
    .login {
      background-color: rgb(76, 78, 228);
      color: #fff;
    }
    .register {
      background-color: #fff;
      border: 1px rgb(117, 117, 117) solid;
    }
  }
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
