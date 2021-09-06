<template>
  <div class="login-content">
    <form action="#" @submit.prevent="">
      <input type="text" v-model.trim.lazy="userName" placeholder="账号/邮箱" @blur="authUserNameFun" />
      <span v-show="!authUserName">请输入正确的用户名</span>
      <input type="password" v-model.trim.lazy="passWord" placeholder="密码" @blur="authPasswordFun" />
      <span v-show="!authPassword">请输入正确的密码</span>

      <div class="authCode">
        <input type="text" v-model.trim.lazy="authCode" placeholder="验证码" @blur="authAuthCodeFun">
        <div v-html="codeImg" @click="initAuthCode" class="img"></div>
      </div>
      <span v-show="!authAuthCode">请输入正确的验证码</span>
      <button @click="login">登录</button>
      <div class="router-link">
        <router-link to="/register">没有账号，去注册</router-link>
        <router-link to="/resetpassword">忘记密码</router-link>
      </div>
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
      codeImg: '',
      // 默认值可以为 true  进入界面是不会显示输入错误提示
      // 提交表单时 调用一次验证函数即可
      authUserName: true,
      authPassword: true,
      authAuthCode: true
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
    // 用户第一次进入界面 不需要验证  输入后再验证
    // 不知道咋写方便 就这样 能用就行(doge)
    authUserNameFun() {
      this.authUserName = /^[a-z0-9_-]{3,16}$/.test(this.userName)
    },
    authPasswordFun() {
      this.authPassword = /^[a-z0-9_-]{6,18}$/.test(this.passWord)
    },
    authAuthCodeFun() {
      this.authAuthCode = /^[a-zA-Z0-9]{4,4}$/.test(this.authCode)
    },
    login() {
      this.authUserNameFun()
      this.authPasswordFun()
      this.authAuthCodeFun()
      if (this.authUserName && this.authPassword && this.authAuthCode) {
      } else {
        return this.$message({
          type: 'warning',
          message: '表单填写有误！请修改后重试'
        })
      }
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
        if (res.data.code === 200) {
          this.$alert('登录成功！', '好耶！', {
            confirmButtonText: '返回首页',
            callback: action => {
              this.$router.push('/')
            }
          })
          return
          // window.location.href = '/'
          // this.$router.push('/')
        }
        this.$alert(`登录失败！${res.data.msg}`, '坏耶', {
          confirmButtonText: '确定',
          callback: action => {
            window.location.href = '/login'
          }
        })
      })
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
    height: 350px;
    background-color: #fff;
    padding: 20px;
    box-sizing: border-box;
    // align-items: s;
    justify-content: space-between;
    span {
      font-size: 10px;
      width: 100%;
      text-align: left;
      margin-top: -1.3em;
      color: rgb(255, 81, 81);
    }
    input,
    button {
      height: 40px;
      font-size: 18px;
      &::placeholder {
        font-size: 16px;
      }
    }
    input {
      background-color: rgb(241, 239, 241);
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
    .router-link {
      display: flex;
      width: 100%;
      justify-content: space-around;
      a {
        color: rgb(126, 126, 126);
        &:hover {
          color: #aaa;
        }
      }
    }
  }
}
</style>
