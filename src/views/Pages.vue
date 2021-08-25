<template>
  <div class="home markdown" v-html="page"></div>
</template>

<script>
import '@/assets/css/page.less'
export default {
  name: 'Home',
  // components: { TopBat }
  data() {
    return {
      page: ''
    }
  },
  // computed: {
  //   src() {
  //     let id = this.$route.params.id
  //     if (!id) id = ''
  //     return `http://127.0.0.1:3000/docs/${id}.html`
  //   }
  // },
  created() {
    this.initPage()
  },
  methods: {
    async initPage() {
      // console.log(this.$data.$route.params.id)
      // console.log(this.$route.params.id)
      // this.$router
      console.log(this)
      this.$http
        .get('/docs/index')
        .then(res => {
          this.page = res.data
        })
        .catch(async err => {
          console.log(err)
          const { data: res } = await this.$http.get('/404.html')
          this.page = res
        })

      // if (res.status === 404) {
      //   res = await this.$http.get('/404.html')
      //   res = res.data
      // }
      // this.page = res
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  // @import url('./../assets/css/page.less');
  max-width: 1000px;
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
  /deep/ #app {
    width: 100% !important;
    .page {
      width: 100% !important;
      min-height: 100vh;
    }
    background-color: #fff !important;
  }
}
iframe {
  width: 100%;
  // height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
