<template>
  <div class="user-content">
    <div class="user">
      <editUserInfo v-if="showEditUserInfo" @exit="showEditUserInfo = !showEditUserInfo"></editUserInfo>
      <!-- <img class="avatar" :src="avatar" @click="editData" /> -->
      <div @click="editData">
        <userAvatar class="avatar" :src="avatar"></userAvatar>
      </div>
      <div class="info iconfont">
        <h1>{{userName}}</h1>
        <div class="info-text-tr">
          <!-- <p>注册时间</p> -->
          <span>&#xe5c8; {{ email }}</span>
        </div>
        <div class="info-text-tr">
          <span>
            <preview-open theme="outline" size="18" fill="#333" />
            {{ views }}
          </span>
          <span>
            <editor theme="outline" size="18" fill="#333" />
            {{ pages }}
          </span>

          <span>
            <good-two theme="outline" size="18" fill="#333" />
            {{ likes }}
          </span>
          <span></span>
        </div>
      </div>
    </div>

    <div class="button">
      <h1>操作</h1>
      <button @click="alert">修改资料</button>
      <button @click="editPassWord">修改密码</button>
      <button @click="unLogin" class="exit">退出登录</button>
    </div>

    <div class="myDoc">
      <h1>我的文章</h1>
      <!-- <br>
      <p>开发中……</p> -->
      <div class="card" v-for="i in myDoc" :key="i._id">
        <router-link :to="`/p/${i._id}`" @click.stop="">
          <contentCard :title="i.title" :info="i.info" :date="i.date" :views="i.views" :likes="i.likes"></contentCard>
        </router-link>
        <div class="edit-box">
          <button class="edit" @click="editDoc(i._id)">编辑</button>
          <button class="remove" @click="rmDoc(i._id)">删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editUserInfo from '@/components/editUserInfo.vue'
// import userAvatar from '@/components/userAvatar.vue'
import contentCard from '@/components/contentCard.vue'
import { getUserStatusApi } from '@/apis/getUserStatus.js'
import { findMyDocApi } from '@/apis/findMyDoc.js'

export default {
  components: {
    editUserInfo,
    contentCard
    // userAvatar
  },
  data() {
    return {
      avatar: '',
      userName: '',
      date: '',
      email: '',
      views: '',
      pages: '',
      likes: '',
      showEditUserInfo: false,
      myDoc: {}
    }
  },
  created() {
    // 传递登录状态
    this.initUserStatus()
    this.initMyDoc()
  },
  methods: {
    async initUserStatus() {
      const { data: res } = await getUserStatusApi()
      this.isLogin = res.data.isLogin
      this.avatar = res.data.avatar
      this.userName = res.data.userName
      this.email = res.data.email
      this.views = res.data.viewsNum
      this.pages = res.data.pagesNum
      this.likes = res.data.likesNum
      // 未登录跳转登录界面
      if (!this.isLogin) {
        this.$alert('请登陆后重试', '未登录', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.replace('/login')
          }
        })
      }
    },
    async initMyDoc() {
      const { data: res } = await findMyDocApi()
      this.myDoc = res.data
    },
    alert() {
      this.$alert('开发中……\n暂不支持修改', '坏耶', {
        confirmButtonText: '确定',
        callback: action => {
          // this.$message({
          //   type: 'info',
          //   message: `action: ${action}`
          // })
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
    },
    editPassWord() {
      this.$alert('暂不支持修改，请前往登录页通过邮箱重置密码。', '坏耶', {
        confirmButtonText: '确定',
        callback: action => {
          // this.$router.push('/login')
          this.unLogin()
        }
      })
    },
    editDoc(_id) {
      console.log(_id)
      this.$router.push(`/edit/${_id}`)
    },
    rmDoc(_id) {
      console.log(_id)
      this.$confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        const { data: res } = await this.$http.post('/api/docs/rmMyDoc', { _id })
        console.log(res)
        if (res.code === 200) {
          this.$message({
            type: 'success',
            message: '删除成功'
          })
          location.reload()
        } else {
          this.$message({
            type: 'error',
            message: `删除失败 ${res.msg}`
          })
        }
      })
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
    // width: 100%;
    div .avatar {
      width: 100px;
      height: 100px;
      // background-color: pink;
      border-radius: 50px;
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
        justify-content: space-between;
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
    .card {
      width: 100%;
      display: block;
      margin: 15px 0;
      padding-bottom: 10px;
      border-top: 1px rgba(116, 116, 116, 0.178) solid;
      position: relative;
      /deep/ .card-content {
        width: 100%;
      }
      .edit-box {
        position: absolute;
        right: 0;
        bottom: 0;
        button {
          background-color: #fff;
          border: 0.5px #aaa solid;
          width: 6em;
          margin: 0 2px;
        }
        .remove {
          border-color: rgb(173, 0, 0);
          color: rgb(173, 0, 0);
        }
      }
    }
    a {
      color: #000;
    }
  }
}
</style>
