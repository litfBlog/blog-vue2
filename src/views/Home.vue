<template>
  <div class="home-content">
    <h1 class="title">我的主页</h1>
    <div class="content">
      <div class="left-bar">
        <User></User>
      </div>
      <div class="cart-list">
        <!-- <h1>博客文章</h1> -->
        <router-link v-for='item in pages' :key="item._id" :to="`/p/${item._id}`">
          <ContentCard class="card" :title="item.title" :info="item.info" :date="item.date" :views="item.views" :likes="item.likes"></ContentCard>
        </router-link>
        <el-pagination background layout="prev, pager, next" :total="total" :page-size="pageSize" @current-change="pageChange">
        </el-pagination>
      </div>
      <div class="right-bar">
        <!-- <User></User> -->
        <!-- <FriendLinks></FriendLinks> -->
        <UpdateLog></UpdateLog>
        <!-- right -->
      </div>
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/contentCard.vue'
import User from '@/components/side_bar/User.vue'
// import FriendLinks from '@/components/side_bar/FriendLinks.vue'
import UpdateLog from '@/components/side_bar/UpdateLog.vue'
import { findDocApi } from '@/apis/findDoc.js'
export default {
  components: {
    ContentCard,
    User,
    UpdateLog
    // FriendLinks
  },
  metaInfo: {
    title: '我的主页 ',
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
      pages: ['', '', '', ''],
      // 每页显示数量
      pageSize: 10,
      total: 1
    }
  },
  created() {
    this.initPages()
  },
  methods: {
    async initPages(page) {
      const { data: res } = await findDocApi(this.pageSize, page)
      this.pages = res.data
      this.total = res.allNum
    },
    pageChange(page) {
      console.log(page)
      this.initPages(page)
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="less" scoped>
.home-content {
  // background: url(./../assets/alongw.cn_setu.jpg) center no-repeat;
  // background: url(https://s1.hdslb.com/bfs/static/blive/blfe-dynamic-web/static/img/background.bc725153.png) center no-repeat;
  // background: url(./../assets/af28f8b1e00781c40a0c13a005d92156.jpg);
  // background: url(./../assets/background.png) center;
  background-size: cover;
  background-attachment: fixed;
  // filter: blur(20px);
  // background-color: rgb(226, 226, 226);
  text-align: center;
  padding-top: 90px;
  .title {
    color: rgb(66, 66, 66);
    font-size: 35px;
    margin-top: 20px;
  }
  .content {
    display: flex;
    .left-bar {
      position: sticky;
      top: 75px;
      // margin-top: 40px;
      margin-left: 15px;
      height: 300px;
    }
    .cart-list {
      // position: unset;
      // width: auto;
      flex: 1;
      width: 100%;
      margin: 0 10px;
      // margin-bottom: 500px;
      .card {
        transition: all 0.3s;
      }
      .card:hover {
        // margin: 0 5px;
        box-shadow: 0 2px 34px rgb(141, 141, 141);
        // width: 101%;
      }
      * {
        color: unset;
        margin: 0px auto 10px auto;
      }
    }
    .right-bar {
      margin-right: 15px;
      height: 332px;
      // margin-top: 40px;
      position: sticky;
      top: 75px;
      // &:last-child {
      //   height: 300px;
      // }
    }
  }
}
@media screen and (max-width: 1000px) {
  .right-bar {
    display: none;
  }
}
@media screen and (max-width: 800px) {
  .left-bar {
    display: none;
  }
}
// @media screen and (min-width: 888px) {
//   .home-content {
//     display: block;
//     position: relative;
//     .introduce {
//       position: fixed;
//       top: 50%;
//       width: 40%;
//       margin: 0 auto;
//       transform: translateY(-70%);
//       h1 {
//         color: #111;
//         margin-bottom: 20px;
//       }
//       p {
//         font-size: 22px;
//       }
//     }
//     .cart-list {
//       // position: absolute;
//       // left: 40%;
//       margin-left: 40%;
//       width: 50%;
//       // margin: 0 auto;
//       z-index: 0;
//       * {
//         margin: 10px auto;
//       }
//       h1 {
//         margin-bottom: 10px;
//       }
//     }
//   }
// }

// @media screen and (max-width: 530px) {
//   .home-content {
//     .introduce {
//       // width: 10em;
//       width: 100%;
//       h1 {
//         font-size: 24px;
//         font-weight: 700;
//         margin-bottom: 10px;
//       }
//     }
//     .cart-list {
//       /deep/ .card-content {
//         height: 360px;
//         width: 260px;
//         display: flex;
//         flex-direction: column;
//       }
//     }
//   }
// }
</style>
