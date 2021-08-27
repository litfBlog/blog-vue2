<template>
  <div class="page-content">
    <div class="home markdown" v-html="page" v-if="status"></div>
    <errPage v-else :code="statusCode"></errPage>
  </div>
</template>

<script>
import '@/assets/css/page.less'
// import status404 from '@/components/404/404.html'
import errPage from '@/components/404/404.vue'
export default {
  name: 'Home',
  components: { errPage },
  comments: { errPage },
  data() {
    return {
      page: '',
      status: '',
      statusCode: ''
    }
  },
  created() {
    // console.lo?)
    console.log(window.location.pathname)
    this.initPage()
  },
  methods: {
    async initPage() {
      console.log(this)
      this.$http
        .get('/docs' + window.location.pathname)
        .then(res => {
          console.log(res)
          this.page = res.data
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
