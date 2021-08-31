<template>
  <div class="login-content">
    <form action="#" @submit.prevent="">
      <input type="text" v-model="userName" />
      <input type="password" v-model="passWord" />
      <button @click="login">登录</button>
      1234
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      passWord: '',
      code: ''
    }
  },
  methods: {
    login() {
      this.$http({
        url: '/api/user/login',
        method: 'POST',
        data: {
          userName: this.userName,
          passWord: this.passWord,
          code: ''
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
}
</style>
