<template>
  <div class="edit-content">
    <mavonEditor @save="saveDoc" ref="editor" v-model="doc"></mavonEditor>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  components: { mavonEditor },
  data() {
    return {
      doc: ''
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
        info: '测试测试',
        title: '测试测试'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.edit-content {
  margin-top: 70px;
  position: relative;
}
</style>
