<template>
  <div class="edit-content">
    <input type="text" placeholder="标题" class="title" v-model="title">
    <mavonEditor @save="saveDoc" ref="editor" v-model="doc" toolbarsFlag :toolbars="{
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
    <textarea type="text" placeholder="简介" class="info" v-model="info"></textarea>
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
  methods: {
    // updateDoc(data) {
    //   console.log(data)
    // },
    saveDoc(data) {
      console.log(data)
      this.$http.post('/api/docs/add', {
        content: this.doc,
        info: this.info,
        title: this.title
      })
    },
    mysave() {
      console.log(this.$refs.editor)
      this.$refs.editor.save()
    }
  }
}
</script>

<style lang="less" scoped>
.edit-content {
  z-index: 0;
  margin-top: 70px;
  position: relative;
  .title,.info {
    width: 100%;
    margin: 5px 0;
    border: none;
    padding: 5px;
    box-sizing: border-box;
  }
  .title {
    font-size: 26px;
    color:#333;
    &::placeholder {
      color: #aaa;
      font-size: 24px;
    }
  }
  .info {
    height: 3em;
    font-size: 18px;
    resize: none;
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
