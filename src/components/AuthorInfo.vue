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
        <div class="data">
          <div>
            <preview-open theme="outline" size="18" fill="#333" />{{ user.views == 0 ? 1 : user.views }}
          </div>
          <!-- <div>
            <good-two theme="outline" size="18" fill="#333" />{{user.likes }}
          </div> -->
          <!-- <div>文章：</div> -->
          <!-- <LikeDoc></LikeDoc> -->
        </div>
      </div>
    </div>

    <div class="buttons">
      <LikeDoc :liked="user.liked" :likes="user.likes"></LikeDoc>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import LikeDoc from '@/components/LikeDoc.vue'

export default {
  props: {
    date: {
      type: [Number, String]
    },
    user: {
      type: Object
    }
  },
  components: { LikeDoc },
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
  height: 140px;
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
      justify-content: space-between;
      height: 70%;
      margin: 8px 1em;
      .userName {
        font-size: 22px;
        font-weight: 500;
        color: #000;
      }
      .data {
        display: flex;
        div {
          margin: 0 5px 0 0;
          display: flex;
          align-items: flex-end;
        }
      }
    }
  }
}
</style>
