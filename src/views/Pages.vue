<template>
  <div class="home" v-html="page">
    <!-- <iframe :src="src" frameborder="0" name="myframe" onload="this.style.height = myframe.document.body.scrollHeight"></iframe> -->
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <div ></div> -->
  </div>
</template>

<script>
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
      console.log(this.$route.params.id)
      // this.$router
      console.log(this)
      this.$http
        .get(`/${this.$route.params.id}.html`)
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
  padding: 0;
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
