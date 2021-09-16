<template>
  <div class="edit-content">
    <div class="titleBox">
      <input type="text" placeholder="标题(建议12字以内)" class="title" v-model="title">
      <span class="text-num" :style="{color: title.length>20? 'red':'#666'}">{{title.length}}/20</span>
    </div>
    <mavonEditor @save="saveDoc" @imgAdd="$imgAdd" @imgDel="$imgDel" ref="editor" v-model="doc" toolbarsFlag :toolbars="{
      bold: true, // 粗体
      italic: true, // 斜体
      header: true, // 标题
      underline: false, // 下划线
      strikethrough: false, // 中划线
      mark: false, // 标记
      superscript: false, // 上角标
      subscript: false, // 下角标
      quote: true, // 引用
      ol: true, // 有序列表
      ul: true, // 无序列表
      link: true, // 链接
      imagelink: true, // 图片链接
      code: true, // code
      table: true, // 表格
      fullscreen: true, // 全屏编辑
      readmodel: true, // 沉浸式阅读
      htmlcode: false, // 展示html源码
      help: true, // 帮助
      /* 1.3.5 */
      undo: true, // 上一步
      redo: true, // 下一步
      trash: true, // 清空
      save: false, // 保存（触发events中的save事件）
      /* 1.4.2 */
      navigation: true, // 导航目录
      /* 2.1.8 */
      alignleft: false, // 左对齐
      aligncenter: false, // 居中
      alignright: false, // 右对齐
      /* 2.2.1 */
      subfield: true, // 单双栏模式
      preview: true, // 预览
    }">
      测试ceshi1
    </mavonEditor>
    <div class="infoBox">
      <textarea type="text" placeholder="简介(建议30字以内)" class="info" v-model="info"></textarea>
      <span class="info-num" :style="{color: info.length>50? 'red':'#666'}">{{info.length}}/50</span>
    </div>
    <button @click="mysave" class="save">发布</button>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: { mavonEditor },
  data() {
    return {
      doc: '',
      title: '',
      info: ''
    }
  },
  created() {
    this.initPage()
  },
  methods: {
    async initPage() {
      const loading = this.$loading({
        text: 'Loading',
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      })
      const { data: res } = await this.$http.post('/api/docs/add/init')
      loading.close()
      if (res.code === 200) {
        if (res.type === 'editing') {
          this.doc = res.content
          this.title = res.title
          this.info = res.info
        }
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
    // updateDoc(data) {
    //   console.log(data)
    // },
    saveDoc(data) {
      // 判断是不是自己的发布按钮 禁用ctrl s
      if (data !== 'mysave') return
      console.log(this.$refs.editor)
      console.log(data)
      if (
        //
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
        //
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
      this.$http
        .post('/api/docs/add', {
          content: this.doc,
          info: this.info,
          title: this.title
        })
        .then(res => {
          if (res.data.code === 200) {
            this.$alert(`${res.data.msg}`, '好耶!', {
              confirmButtonText: '确定',
              callback: action => {
                this.$router.push('/')
              }
            })
            return
          }
          this.$alert(`${res.data.msg}`, '发布失败', {
            confirmButtonText: '确定'
          })
        })
    },
    mysave() {
      console.log(this.$refs.editor)
      // 传递标识 禁用ctrl s
      this.$refs.editor.save('mysave')
    },
    $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      var formdata = new FormData()
      console.log(formdata)
      formdata.append('image', $file)
      this.$http({
        url: '/api/docs/add/upImg',
        method: 'post',
        data: formdata,
        headers: { 'Content-Type': 'multipart/form-data' }
      }).then(url => {
        // 第二步.将返回的url替换到文本原位置![...](./0) -> ![...](url)
        /**
         * $vm 指为mavonEditor实例，可以通过如下两种方式获取
         * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
         * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
         */

        console.log(url)
        this.$refs.editor.$img2Url(pos, url.data.path)
      })
    },
    $imgDel(fileName) {
      console.log(fileName)
      this.$http.post('/api/docs/add/delImg', {
        fileName: fileName[0]
      })
    }
  }
}
</script>

<style lang="less" scoped>
.edit-content {
  z-index: 0;
  margin-top: 70px;
  position: relative;
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
      right: 0;
      bottom: 1em;
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
      right: 0;
      bottom: 1em;
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
