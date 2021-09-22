<template>
  <div class="AuthorInfo-content">
    <div class="docsInfo">
      <div class="date">{{ dateFormat }}</div>
    </div>

    <div class="userInfo" v-if="user">
      <userAvatar class="avatar" :src="user.avatar"></userAvatar>
      <div class="user">
        <div class="userName">
          {{user.userName}}
        </div>
        <!-- <div class="data">
          <div>被点赞：</div>
          <div>文章：</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: {
    // info: {
    //   type: String
    // },
    date: {
      type: [Number, String]
    },
    user: {
      type: Object
    }
  },
  computed: {
    dateFormat() {
      // this.date = 0
      return dayjs(this.date).format('YYYY-MM-DD HH:mm:ss')
      // return 1
    }
  }
  // components: {

  // }
}
</script>

<style lang="less" scoped>
.AuthorInfo-content {
  width: 100%;
  height: 88px;
  display: flex;
  flex-direction: column;
  .docsInfo {
    margin: 0 0 12px 0;
    .date {
      font-size: 14px;
      color: #888;
    }
  }
  .userInfo {
    display: flex;
    align-items: center;
    height: 70px;
    .avatar {
      width: 55px;
      height: 55px;
      // background-color: pink;
      border-radius: 66px;
      text-align: center;
      line-height: 55px;
    }
    .user {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 8px 1em;
      .userName {
        font-size: 18px;
        color: #000;
      }
      .data {
        display: flex;
        div {
          margin: 0 5px 0 0;
        }
      }
    }
  }
}
</style>
