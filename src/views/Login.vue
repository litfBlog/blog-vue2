<template>
  <div class="login-content">
    <form action="#" @submit.prevent="">
      <input type="text" v-model="userName" placeholder="账号/邮箱" />
      <input type="password" v-model="passWord" placeholder="密码" />
      <div class="authCode">
        <input type="text" v-model="authCode" placeholder="验证码">
        <div v-html="codeImg" @click="initAuthCode" class="img"></div>
      </div>
      <button @click="login">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      passWord: '',
      authCode: '',
      codeImg: ''
    }
  },
  created() {
    this.initAuthCode()
  },
  methods: {
    async initAuthCode() {
      const { data: res } = await this.$http.post('/api/authCode')
      this.codeImg = res
    },
    login() {
      this.$http({
        url: '/api/user/login',
        method: 'POST',
        data: {
          userName: this.userName,
          passWord: this.passWord,
          authCode: this.authCode
        },
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        // withCredentials: true
        withCrendentials: true
        // SameSite: true
      }).then(res => {
        console.log(res)
      })
      // if (res.code === 200) {
      //   alert('登录成功!')
      //   window.location.href = '/'
      // }
    }
  }
}
</script>

<style lang="less" scoped>
.login-content {
  margin-top: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  form {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    min-width: 300px;
    max-width: 400px;
    height: 300px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    // align-items: s;
    justify-content: space-between;
    input, button {
      height: 40px;
      font-size: 18px;
      &::placeholder {
        font-size: 16px;
      }
    }
    input {
      background-color: rgb(241,239,241);
      border: none;
      padding-left: 0.7em;
      width: 100%;
    }
    .authCode {
      display: flex;
      justify-content: space-between;
      width: 100%;
      input {
        width: 60%;
      }
      .img {
        width: 30%;
        background-color: rgb(238, 238, 238);
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          width: 100%;
          height: 100px;
        }
      }
    }
    button {
      background-color: #fff;
      border: none;
      width: 50%;
      background-color: rgb(51, 156, 255);
      border-radius: 50px;
      color: #fff;
    }
  }
}
</style>
