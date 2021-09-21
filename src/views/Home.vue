<template>
  <div class="home-content">
    <div class="introduce">
      <h1>Hi! 欢迎来到XING博客</h1>
      <p>阿巴阿巴……</p>
    </div>
    <div class="cart-list">
      <h1>博客文章</h1>
      <router-link v-for='item in pages' :key="item._id" :to="`/p/${item._id}`">
        <ContentCard :title="item.title" :info="item.info" :date="item.date"></ContentCard>
      </router-link>
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/contentCard.vue'
export default {
  components: { ContentCard },
  metaInfo: {
    title: '李腾飞博客 首页',
    meta: [
      {
        name: 'keywords',
        content: '李腾飞,博客,李腾飞博客'
      },
      {
        name: 'description',
        content: '分享前端问题解决思路以及个人想法和生活点滴。'
      }
    ]
  },
  data() {
    return {
      pages: ['', '', '', '']
    }
  },
  created() {
    this.initPages()
  },
  methods: {
    async initPages() {
      const { data: res } = await this.$http.post('/api/docs/find', {
        num: 10
      })
      this.pages = res.data
    }
  }
}
</script>

<style lang="less" scoped>
.home-content {
  text-align: center;
  padding-top: 70px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .introduce {
    position: relative;
    margin: 0;
    margin-top: 100px;
    // width: 100%;
    width: 25em;
    top: 0px;
    // left: 50%;
    // transform: translateX(-50%);
  }
  .cart-list {
    position: unset;
    width: auto;
    // margin-bottom: 500px;
    * {
      color: unset;
      margin: 10px auto;
    }
  }
}
@media screen and (min-width: 888px) {
  .home-content {
    display: block;
    position: relative;
    .introduce {
      position: fixed;
      top: 50%;
      width: 40%;
      margin: 0 auto;
      transform: translateY(-70%);
      h1 {
        color: #111;
        margin-bottom: 20px;
      }
      p {
        font-size: 22px;
      }
    }
    .cart-list {
      // position: absolute;
      // left: 40%;
      margin-left: 40%;
      width: 50%;
      // margin: 0 auto;
      z-index: 0;
      * {
        margin: 10px auto;
      }
      h1 {
        margin-bottom: 10px;
      }
    }
  }
}

@media screen and (max-width: 530px) {
  .home-content {
    .introduce {
      // width: 10em;
      width: 100%;
      h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }
    .cart-list {
      /deep/ .card-content {
        height: 360px;
        width: 260px;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
