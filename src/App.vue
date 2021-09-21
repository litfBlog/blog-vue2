<template>
  <div id="app">
    <template comments>
      <div>
        <!-- comments -->
      </div>
    </template>
    <TopBar title="XING博客" :logo="logo" class="topbar">
      <template #list>
        <div class="list">
          <ul>
            <router-link to="/">
              <!-- <a href="/"> -->
              <li>首页</li>
              <!-- </a> -->
            </router-link>
            <router-link to="/add">
              <!-- <a href="/index"> -->
              <li>投稿</li>
              <!-- </a> -->
            </router-link>
          </ul>
        </div>
      </template>
    </TopBar>
    <!-- <Pages v-if="router == 'page'"></Pages>
    <Home v-if="router == 'home'" class="home"></Home>
    <Login v-if="router == 'login'"></Login>
    <AddDoc v-if="router == 'add'"></AddDoc> -->
    <router-view></router-view>
    <BottomInfo></BottomInfo>
  </div>
</template>

<script>
import TopBar from '@/components/topBar.vue'
import logo from '@/assets/logo.png'
import BottomInfo from '@/components/bottomInfo.vue'
// import Pages from '@/views/Pages.vue'
// import Home from '@/views/Home.vue'
// import Login from '@/views/Login.vue'
// import AddDoc from '@/views/AddDoc.vue'
export default {
  components: { TopBar, BottomInfo },
  computed: {
    router() {
      // const view = ''
      // view = window.location.pathname === '/' ? 'home' : 'page'
      switch (window.location.pathname) {
        case '/':
          return 'home'
        case '/login':
          return 'login'
        case '/add':
          return 'add'
        default:
          return 'page'
      }
      // view = window.location.pathname === '/page' ? 'page' : ''
      // return view
    }
  },
  data() {
    return {
      logo: logo
      // router: 'home'
    }
  }
}
</script>

<style lang="less">
.content {
  // height: 100%;
  padding-top: 66px;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  background-color: #eee;
  // height: 100vh;
  width: 100%;
  .topbar {
    position: fixed;
    z-index: 100;
    width: 100%;
  }
  .list {
    // position: absolute;
    // right: 0;
    margin-left: 40px;
    ul {
      width: 140px;
      display: flex;
      justify-content: space-between;
      flex-wrap: nowrap;
      li {
        padding: 0 10px;
        font-size: 16px;
        flex-wrap: nowrap;
        color: #111;
        &:hover {
          color: #42b983;
        }
      }
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
