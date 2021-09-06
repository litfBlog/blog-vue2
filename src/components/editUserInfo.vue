<template>
  <div class="editUserInfo-content" @click="exit">
    <div>
      <input type="file" accept="image/png,image/jpeg" @change="upload" @click.stop="">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    upload(e) {
      const file = e.target.files[0]
      const param = new FormData() // 创建form对象
      param.append('file', file) // 通过append向form对象添加数据
      console.log(param.get('file')) // FormData私有类对象，访问不到，可以通过get判断值是否传进去
      const config = {
        headers: { 'Content-Type': 'multipart/form-data' }
      } // 添加请求头
      this.$http.post('/api/user/setInfo/upavatar', param, config).then(res => {
        console.log(res.data)
        if (res.data.code === 200) {
          this.$alert('修改成功！', '好耶！', {
            confirmButtonText: '确定',
            callback: action => {
              // window.reload()
              this.$router.go(0)
            }
          })
        }
      })
      // // console.log(fileName)
      // const file = e.target.files[0]
      // this.$http.post('/api/user/setInfo/upavatar', {
      //   fileName: file
      // })
    },
    exit() {
      console.log(this)
      this.$emit('exit')
    }
  }
}
</script>

<style lang="less" scoped>
.editUserInfo-content {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(2, 2, 2, 0.377);
  left: 0;
  top: 0;
  // margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
