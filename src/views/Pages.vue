<template>
  <div class="page-content">
    <div class="home markdown" v-if="status">
      <h1>{{title}}</h1>
      <AuthorInfo :date="date" :user="user"></AuthorInfo>
      <hr>
      <div class="page" v-html="page"></div>

      <div class="buttons">
        <LikeDoc :liked="user.liked" :likes="user.likes"></LikeDoc>
      </div>
    </div>
    <errPage class="errPage" v-else :code="statusCode"></errPage>
    <EditButton></EditButton>
  </div>
</template>

<script>
import '@/assets/css/page.less'
// import status404 from '@/components/404/404.html'
import errPage from '@/components/404/404.vue'
import EditButton from '@/components/EditButton.vue'
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
  components: { errPage, EditButton, AuthorInfo, LikeDoc },

  data() {
    return {
      page: '',
      status: 'true',
      statusCode: '',
      date: 0,
      title: '',
      user: {}
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
    async initPage() {
      console.log(this)
      const loading = this.$loading({
        text: 'Loading',
        lock: true,
        background: 'rgba(0, 0, 0, 0.7)'
      })
      this.$http
        .get('/api/docs/findOne/' + this.$route.params.pages)
        .then(res => {
          if (res.data.code === 200) {
            // 传递页面数据
            // this.page = res.data.data.content

            this.page = marked(res.data.data.content)

            this.date = res.data.data.date
            this.date = Number(this.date)
            this.title = res.data.data.title
            this.user = res.data.data.author
            // 阅读量
            this.user.views = res.data.data.views[0]
            this.user.likes = res.data.data.likes[0]
            this.user.liked = res.data.liked
            this.status = true
          } else {
            // 状态异常 显示异常界面
            this.status = false
            // 传递状态码
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
</style>

<style lang="less">
.el-loading-mask {
  z-index: 3 !important;
}
</style>
