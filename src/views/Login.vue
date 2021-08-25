<template>
  <div>
    <form action="#" @submit.prevent="">
      <input type="text" v-model="username" />
      <input type="password" v-model="password" />
      <button @click="login">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      code: ''
    }
  },
  methods: {
    async login() {
      const { data: res } = await this.$http.post('/login', {
        username: this.username,
        password: this.password,
        code: ''
      })
      if (res.status === 200) {
        alert('登录成功!')
        this.$router.push('/')
      }
    }
  }
}
</script>

<style></style>
