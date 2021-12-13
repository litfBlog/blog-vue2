<template>
  <div class="edit-content">
    <div class="titleBox">
      <input type="text" placeholder="标题(建议12字以内)" class="title" name="title" v-model="title">
      <span class="text-num" :style="{color: title.length>20? 'red':'#666'}">{{title.length}}/20</span>
    </div>

    <div class="edit">
      <div class="edit-topbar"></div>
      <div class="edit-container"></div>
    </div>

    <div class="infoBox">
      <textarea type="text" placeholder="简介(建议30字以内)" class="info" v-model="info"></textarea>
      <span class="info-num" :style="{color: info.length>50? 'red':'#666'}">{{info.length}}/50</span>
    </div>

    <el-collapse v-model="configPermission" class="config">
      <el-collapse-item title="权限设置" name="1">
        <el-radio v-model="viewConfig" label="public">公开</el-radio>
        <el-radio v-model="viewConfig" label="encrypt">加密</el-radio>
        <el-radio v-model="viewConfig" label="privacy">私密</el-radio>
        <el-input v-if="viewConfig === 'encrypt'" placeholder="访问密码" v-model="viewPassword" show-password></el-input>

        <el-collapse v-model="configMore" class="configMore">
          <el-collapse-item title="高级设置" name="1" class="more">
            <el-checkbox v-model="noSearch" :disabled="viewConfig === 'privacy'">不允许被搜索</el-checkbox>
            <el-checkbox v-model="noIndexView" :disabled="viewConfig === 'privacy'">不在主页展示</el-checkbox>
          </el-collapse-item>
        </el-collapse>
      </el-collapse-item>
    </el-collapse>
    <button @click="saveDoc" class="save">发布</button>
  </div>
</template>

<script>
import 'mavon-editor/dist/css/index.css'
import { docPushApi } from '@/apis/docPush.js'
let editor = {}
export default {
  data() {
    return {
      // 文章
      doc: '',
      title: '',
      info: '',
      // 设置折叠框
      configPermission: ['0'],
      configMore: ['0'],
      // 设置项
      noIndexView: false,
      noSearch: false,
      usePassword: false,
      viewPassword: '',
      viewConfig: 'public',
      public: true
    }
  },
  watch: {
    viewConfig(val1, val2) {
      console.log(val1, val2)
      if (val1 === 'public') {
        this.noIndexView = false
        this.noSearch = false
        this.usePassword = false
        this.public = true
      } else if (val1 === 'encrypt') {
        this.usePassword = true
        this.noIndexView = true
        this.noSearch = true
        this.public = true
      } else if (val1 === 'privacy') {
        this.noIndexView = true
        this.noSearch = true
        this.public = false
        this.usePassword = false
      }
    }
  },
  created() {
    console.log(this.$route)
  },
  mounted() {
    this.iniEditor()
  },
  methods: {
    async initPage() {
      console.log('page')
      const loading = this.$loading({
        text: 'Loading',
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      })
      const { data: res } = await this.$http.post('/api/docs/add/init')
      loading.close()
      if (res.code === 200) {
        return
      } else if (res.code === 403) {
        // alert(res.msg)
        this.$alert(`${res.msg}`, '坏耶！', {
          confirmButtonText: '确定',
          callback: action => {
            // this.$router.replace('')
            // window.location.href = '/'
            this.$router.push('/login')
          }
        })
        // this.$router.push('/login')
        return
      }
      // alert('err')
      this.$alert(`未知异常 ${res.msg}`, '坏耶！', {
        confirmButtonText: '确定',
        callback: action => {
          // this.$router.replace('')
          // window.location.href = '/'
          this.$router.push('/login')
        }
      })
    },
    async initEdit() {
      const loading = this.$loading({
        text: 'Loading',
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      })
      const { data: res } = await this.$http.post('/api/docs/edit/init', { _id: this.$route.params.pages })
      if (res.code === 200) {
        // this.doc = res.content
        editor.txt.html(res.content)
        this.title = res.title
        this.info = res.info
        this.noIndexView = res.docConfig.noIndexView
        this.noSearch = res.docConfig.noSearch
        this.public = res.docConfig.public
        // 私密文章
        if (!res.docConfig.public) this.viewConfig = 'privacy'
        // 使用密码
        if (res.docConfig.usePassWord) {
          this.viewConfig = 'encrypt'
          this.viewPassword = res.docConfig.passWord
        }
        // 默认为公开
      } else {
        this.$alert(`${res.msg}`, '坏耶！', {
          confirmButtonText: '确定',
          callback: action => {
            // this.$router.replace('')
            // window.location.href = '/'
            this.$router.back(1)
          }
        })
      }
      loading.close()
    },
    async iniEditor() {
      editor = new this.$E('.edit-topbar', '.edit-container')
      // 取消自动 focus
      editor.config.focus = false
      // 菜单栏提示改下标
      editor.config.menuTooltipPosition = 'down'
      // 字体颜色
      editor.config.colors = [
        //
        'rgb(137,212,255)',
        'rgb(11,132,237)',
        'rgb(1,118,186)',
        'rgb(0,78,128)',

        'rgb(115,253,234)',
        'rgb(24,231,207)',
        'rgb(6,143,134)',
        'rgb(1,124,118)',

        'rgb(137,250,78)',
        'rgb(96,216,55)',
        'rgb(29,177,0)',
        'rgb(1,112,1)',

        'rgb(255,243,89)',
        'rgb(251,226,49)',
        'rgb(248,186,0)',
        'rgb(255,146,1)',

        'rgb(255,150,141)',
        'rgb(255,101,78)',
        'rgb(238,35,13)',
        'rgb(180,23,0)',

        'rgb(255,160,208)',
        'rgb(234,0,119)',
        'rgb(203,41,122)',
        'rgb(153,25,94)',

        'rgb(214,213,213)',
        'rgb(146,146,146)',
        'rgb(95,95,95)',
        'rgb(#000)'
      ]
      // 弹框 调用element
      editor.config.customAlert = function (s, t) {
        switch (t) {
          case 'success':
            this.$message({
              type: 'success',
              message: s
            })
            break
          case 'info':
            this.$message({
              type: 'info',
              message: s
            })
            break
          case 'warning':
            this.$message({
              type: 'warning',
              message: s
            })
            break
          case 'error':
            this.$message({
              type: 'error',
              message: s
            })
            break
          default:
            this.$message({
              type: 'info',
              message: s
            })
            break
        }
      }

      editor.config.uploadImgShowBase64 = true

      editor.create()

      if (this.$route.name === 'edit') {
        this.initEdit()
      } else {
        this.initPage()
      }
    },
    async saveDoc() {
      if (
        // 标题
        this.title.length > 20 ||
        this.title.length < 2
      ) {
        this.$alert('标题过长/过短', '标题填写有误', {
          confirmButtonText: '确定',
          callback: action => {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }
        })
        return
      }
      if (
        // 简介
        this.info.length > 50 ||
        this.info.length < 10
      ) {
        this.$alert('简介过长/过短', '标题填写有误', {
          confirmButtonText: '确定',
          callback: action => {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }
        })
        return
      }
      // 密码
      if (this.usePassword) {
        if (
          //
          this.viewPassword.length > 20 ||
          this.viewPassword.length < 2
        ) {
          this.$alert('密码为 2~12 位', '密码不符合要求', {
            confirmButtonText: '确定'
          })
          return
        }
      }

      const content = editor.txt.html()

      let type = ''
      if (this.$route.name === 'edit') {
        type = 'edit'
      } else {
        type = 'add'
      }

      // (type, title, info, content, docConfig[, _id])
      const { data: res } = await docPushApi(
        type,
        this.title,
        this.info,
        content,
        {
          noIndexView: this.noIndexView,
          noSearch: this.noSearch,
          usePassWord: this.usePassword,
          passWord: this.viewPassword,
          public: this.public
        },
        this.$route.params.pages
      )
      console.log(res)
      if (res.code === 200) {
        this.$alert('发布成功', '好耶!', {
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push('/')
          }
        })
      } else {
        this.$alert(`${res.msg}`, '发布失败', {
          confirmButtonText: '确定'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@media screen and (max-width: 500px) {
  .edit-content {
    padding: 0 !important;
  }
}
.edit-content {
  max-width: 800px;
  margin: 0 auto;
  z-index: 0;
  margin-top: 70px;
  position: relative;
  padding: 0 20px;
  .title,
  .info {
    width: 100%;
    margin: 5px 0;
    border: none;
    padding: 5px;
    box-sizing: border-box;
  }
  .titleBox {
    position: relative;
    .title {
      font-size: 26px;
      color: #333;
      &::placeholder {
        color: #aaa;
        font-size: 24px;
      }
    }
    .text-num {
      position: absolute;
      right: 10px;
      bottom: 1em;
    }
  }
  .edit {
    position: relative;
    .edit-topbar {
      position: sticky;
      top: 66px;
      z-index: 100000;
    }
    /deep/ .w-e-text {
      min-height: 60vh;
    }
    /deep/ .eleImg {
      max-width: 100px;
    }
    /deep/ .w-e-item {
      i {
        &::before {
          content: '■';
          font-size: 25px;
        }
      }
    }
    /deep/.w-e-block {
      text-align: center;
    }
  }
  .infoBox {
    position: relative;
    .info {
      height: 3em;
      font-size: 18px;
      resize: none;
    }
    .info-num {
      position: absolute;
      right: 10px;
      bottom: 1em;
    }
  }
  .config {
    /deep/ .el-checkbox {
      margin-right: 3px;
      margin-left: 10px;
    }
    .configMore {
      margin-left: 25px;
    }
  }
  .save {
    width: 100px;
    height: 40px;
    background-color: rgb(65, 65, 255);
    border: 0;
    color: #fff;
    font-size: 18px;
    border-radius: 5px;
    margin: 0 auto;
    display: block;
  }
}
</style>
