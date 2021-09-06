<template>
  <div class="user-content">
    <div class="user">
      <editUserInfo v-if="showEditUserInfo" @exit="showEditUserInfo = !showEditUserInfo"></editUserInfo>
      <img class="avatar" :src="avatar" @click="editData" />
      <div class="info iconfont">
        <h1>{{userName}}</h1>
        <div class="info-text-tr">
          <!-- <p>注册时间</p> -->
          <span>&#xe5c8; {{ email }}</span>
        </div>
      </div>
    </div>

    <div class="button">
      <h1>操作</h1>
      <button @click="alert">修改资料</button>
      <button @click="unLogin" class="exit">退出登录</button>
    </div>

    <div class="myDoc">
      <h1>我的文章</h1>
      <br>
      <p>开发中……</p>
    </div>
  </div>
</template>

<script>
import bus from '@/components/eventBus.js'
import editUserInfo from '@/components/editUserInfo.vue'
export default {
  components: {
    editUserInfo
  },
  data() {
    return {
      avatar: '',
      userName: '',
      date: '',
      email: '',
      showEditUserInfo: false
    }
  },
  created() {
    bus.$on('userinfo', val => {
      this.isLogin = val.data.isLogin
      this.avatar = val.data.avatar
      this.userName = val.data.userName
      this.email = val.data.email
      if (!this.isLogin) {
        this.$alert('请登陆后重试', '未登录', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.replace('/login')
          }
        })
      }
    })
    // this.$on('exit', () => {
    //   console.log(111)
    // })
  },
  methods: {
    alert() {
      this.$alert('这是一段内容', '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${action}`
          })
        }
      })
    },
    editData() {
      // alert('暂未开放')
      this.showEditUserInfo = true
    },
    async unLogin() {
      this.$confirm('确定要退出登录吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          const { data: res } = await this.$http.post('/api/user/login/unlogin')

          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: '退出成功!'
            })
            window.location.href = '/'
          } else {
            this.$message({
              type: 'error',
              message: '退出失败'
            })
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    },
    exitEditUserInfo() {
      console.log(1)
    }
  }
}
</script>

<style lang="less" scoped>
.user-content {
  margin-top: 90px;
  .user {
    background-color: #fff;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    display: flex;
    img {
      width: 100px;
      height: 100px;
      background-color: pink;
      border-radius: 50%;
    }
    .info {
      h1 {
        font-size: 50px;
      }
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;
      .info-text-tr {
        display: flex;
        justify-content: space-around;
      }
    }
  }
  .button {
    background-color: #fff;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
    button {
      margin: 5px;
      border: none;
      background-color: #fff;
      border: solid 1px #666;
      border-radius: 5px;
      width: 100px;
      height: 35px;
      &.exit {
        border: solid 1px rgb(173, 0, 0);
        color: rgb(173, 0, 0);
      }
    }
  }
  .myDoc {
    background-color: #fff;
    padding: 15px;
    margin: 10px;
    border-radius: 5px;
  }
}
</style>
