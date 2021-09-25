<template>
  <div class="container container-search">
    <!-- <el-input class="input" placeholder="搜索内容"></el-input> -->
    <el-autocomplete class="input" v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect" highlight-first-item>
      <template slot-scope="{ item }">
        <div class="name">{{ item.title }}</div>
        <span class="addr">{{ item.info }}</span>
      </template>
    </el-autocomplete>
    <i class="el-icon-search"></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      state: '',
      timeout: null
    }
  },
  methods: {
    loadAll() {
      return [
        {
          info: '',
          title: '请输入内容'
        }
      ]
    },
    async querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants
      // 查询
      // var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
      if (this.state.length === 0) return cb(this.loadAll())
      var results = queryString ? await this.createStateFilter(queryString) : restaurants
      // 输入限制
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        cb(results)
      }, 0)
    },
    // 发起请求
    async createStateFilter(queryString) {
      const { data: res } = await this.$http.post('/api/docs/search', { key: queryString })
      if (res.length === 0) {
        return [
          {
            title: '未查询到结果',
            info: ''
          }
        ]
      }
      return res
    },
    // 选择内容
    handleSelect(item) {
      if (!item._id) return
      this.$router.push(`/p/${item._id}`)
    }
  },
  mounted() {
    this.restaurants = this.loadAll()
  }
}
</script>

<style lang="less" scoped>
li {
  line-height: normal;
  padding: 7px;
}
.name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.addr {
  font-size: 12px;
  color: #b4b4b4;
}

.container {
  display: flex;
  align-items: center;

  .highlighted .addr {
    color: #ddd;
  }
  /deep/ .el-input__inner:focus {
    border-color: #3eaf7c;
    outline: 0;
  }
  .input {
    display: none;
  }
  i {
    font-size: 20px;
  }
  @media screen and (min-width: 670px) {
    .input {
      display: inline;
    }
    i {
      display: none;
    }
  }
}
</style>
