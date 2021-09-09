<template>
  <div class="user-content">
    <div class="login" v-if="isLogin">
      <userAvatar class="avatar" :src="avatar"></userAvatar>
      <div>
        <div class="userName">{{userName}}</div>

      </div>
    </div>
    <div class="unlogin" v-else>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
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
      avatar: ''
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
      bus.$emit('userinfo', res)
    }
  }
}
</script>

<style lang="less" scoped>
.user-content {
  // width: 100%;
  height: 100%;
  .login {
    display: flex;
    align-items: center;
    height: 100%;
    .avatar {
      width: 30px;
      height: 30px;
      // background-color: pink;
      border-radius: 50%;
      // background: center no-repeat;
      // background-size: 40px;
    }
    .userName {
      font-size: 18px;
      color: #000;
      margin-left: 0.5em;
    }
  }
  @media screen and (max-width: 560px) {
    .userName {
      display: none;
    }
  }
  .unlogin {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 5em;
    a {
      color: #333;
    }
  }
}
</style>
