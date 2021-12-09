<template>
  <div class="container">
    <el-autocomplete class="input" v-model="state" :fetch-suggestions="querySearchAsync" placeholder="请输入内容" @select="handleSelect" highlight-first-item>
      <template slot-scope="{ item }">
        <div class="name">{{ item.title }}</div>
        <span class="addr">{{ item.info }}</span>
      </template>
    </el-autocomplete>
    <!-- <i class="el-icon-search" @click="searchAlert"></i> -->
  </div>
</template>

<script>
import { searchApi } from '@/apis/search.js'
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
      const { data: res } = await searchApi(queryString)
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
    },
    searchAlert() {}
  },
  mounted() {
    this.restaurants = this.loadAll()
  }
}
</script>

<style lang="less" scoped>
.container {
  margin: 170px 0 300px 0;
  width: 100%;
  .input {
    width: 90%;
    margin: 0 auto;
    display: block;
    /deep/ input {
      height: 50px;
    }
  }
}
</style>
