<template>
  <div class="home">
    <iframe :src="src" frameborder="0"></iframe>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <div v-html="page"></div>
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
  computed: {
    src() {
      const id = this.$route.params.id
      return `http://127.0.0.1:8080/${id}`
    }
  },
  created() {
    this.initPage()
  },
  methods: {
    async initPage() {
      // console.log(this.$data.$route.params.id)
      console.log(this.$route.params.id)
      // this.$router
      console.log(this)
      // const { data: res } = await this.$http.get(' http://localhost:3000/')
      // this.page = res
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  // overflow: hidden;
  // padding-top: -66px;
  // box-sizing: border-box;
  // margin-top: -60px;
}
iframe {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
