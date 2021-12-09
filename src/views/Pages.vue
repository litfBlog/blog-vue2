<template>
  <div class="page-content">
    <div class="home markdown" v-if="status == true">
      <h1>{{title}}</h1>
      <AuthorInfo :date="date" :user="user"></AuthorInfo>
      <hr>
      <div class="page" v-html="page"></div>

      <div class="buttons">
        <LikeDoc :liked="user.liked" :likes="user.likes"></LikeDoc>
      </div>
    </div>
    <errPage class="errPage" v-else-if="status == false" :code="statusCode"></errPage>
    <div v-if="status == 'passWord'" class="password">
      <h1>该文章需要输入密码</h1>
      <div class="form">
        <el-input autocomplete="new-password" placeholder="请输入密码" v-model="passWord" show-password name="docPass"></el-input>
        <el-button autocomplete="off" @click="initPage(passWord)" type="primary">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/css/page.less'
// import status404 from '@/components/404/404.html'
import errPage from '@/components/404/404.vue'
import AuthorInfo from '@/components/AuthorInfo.vue'
import { marked } from 'marked'
import highlight from 'highlight.js'
import LikeDoc from '@/components/LikeDoc.vue'

marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value
  }
})
export default {
  metaInfo: {
    title: '文章',
    meta: [
      {
        name: 'keywords',
        content: '博客,李腾飞博客'
      },
      {
        name: 'description',
        content: '分享前端问题解决思路以及个人想法和生活点滴。'
      }
    ]
  },
  name: 'Home',
  components: { errPage, AuthorInfo, LikeDoc },

  data() {
    return {
      page: '',
      status: 'true',
      statusCode: '',
      date: 0,
      title: '',
      user: {},
      passWord: ''
    }
  },
  created() {
    // console.lo?)
    console.log(this)
    console.log(window.location.pathname)
    console.log(this)
    console.log(this.$route.params.pages)
    this.initPage()
  },
  methods: {
    async initPage(passWord) {
      console.log(this)
      const loading = this.$loading({
        text: 'Loading',
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)'
      })
      let data = {}
      if (passWord) {
        data = { passWord }
      }
      this.$http
        .post('/api/docs/findOne/' + this.$route.params.pages, data)
        .then(res => {
          if (res.data.code === 200) {
            if (res.data.type === 'usePassWord') {
              this.status = 'passWord'
              loading.close()
              return
            }
            // 传递页面数据
            // this.page = res.data.data.content

            // this.page = marked(res.data.data.content)
            this.page = res.data.data.content

            this.date = res.data.data.date
            this.date = Number(this.date)
            this.title = res.data.data.title
            this.user = res.data.data.author
            // 阅读量
            this.user.views = res.data.data.views[0]
            this.user.likes = res.data.data.likes[0]
            this.user.liked = res.data.liked
            this.status = true
          } else if (res.data.code === 403 && res.data.msg) {
            this.$message.error(res.data.msg)
          } else {
            // 状态异常 显示异常界面
            // 传递状态码
            this.status = false
            this.statusCode = res.data.code
          }
          // 结束加载动画
          loading.close()
        })
        .catch(err => {
          this.status = false
          this.statusCode = err.status
          loading.close()
        })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  max-width: 1000px;
  overflow-wrap: break-word;
  padding: 0;
  margin: auto;
  margin-top: 70px;
  background-color: #fff;
  padding: 20px;
  box-sizing: content-box;
  .page {
    min-height: 80vh;
  }
}
.errPage {
  min-height: 80vh;
}

.password {
  // margin-top: 100px;
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  * {
    display: inline;
  }
  .el-input {
    width: 300px;
    margin: 30px 10px;
  }
  .form {
    display: flex;
    align-items: center;
  }
}
</style>

<style lang="less">
.el-loading-mask {
  z-index: 3 !important;
}
</style>
