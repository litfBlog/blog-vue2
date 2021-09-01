<template>
  <div class="page-content">
    <div class="home markdown" v-if="status">
      <h1>{{title}}</h1>
      <AuthorInfo :date='date'></AuthorInfo>
      <hr>
      <div v-html="page"></div>
    </div>
    <errPage v-else :code="statusCode"></errPage>
    <EditButton></EditButton>
  </div>
</template>

<script>
import '@/assets/css/page.less'
// import status404 from '@/components/404/404.html'
import errPage from '@/components/404/404.vue'
import EditButton from '@/components/EditButton.vue'
import AuthorInfo from '@/components/AuthorInfo.vue'
export default {
  name: 'Home',
  components: { errPage, EditButton, AuthorInfo },
  data() {
    return {
      page: '',
      status: '',
      statusCode: '',
      date: 0,
      title: ''
    }
  },
  created() {
    // console.lo?)
    console.log(window.location.pathname)
    console.log(this)
    console.log(this.$route.params.pages)
    this.initPage()
  },
  methods: {
    async initPage() {
      console.log(this)
      this.$http
        .get('/docs/' + this.$route.params.pages)
        .then(res => {
          console.log(res)
          this.page = res.data.data.content
          this.date = res.data.data.date
          this.date = Number(this.date)
          this.title = res.data.data.title
          if (res.status !== 200) {
            this.status = false
            this.statusCode = res.data.status
          } else {
            this.status = true
            this.statusCode = 200
          }
        })
        .catch(err => {
          console.log(err)
          this.status = false
          this.statusCode = err.status
        })
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  // @import url('./../assets/css/page.less');
  max-width: 1000px;
  min-height: 80vh;
  overflow-wrap: break-word;
  padding: 0;
  margin: auto;
  margin-top: 70px;
  background-color: #fff;
  padding: 20px;
  box-sizing: content-box;
  // height: 100%;
  // overflow: auto;
  // padding-top: -66px;
  // box-sizing: border-box;
  // margin-top: -60px;
  // /deep/ #app {
  //   width: 100% !important;
  //   .page {
  //     width: 100% !important;
  //     min-height: 100vh;
  //   }
  //   background-color: #fff !important;
  // }
}
iframe {
  width: 100%;
  // height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
