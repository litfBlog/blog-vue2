<template>
  <div class="add-content">
    <textarea name="" id="" cols="30" :rows="h" v-model="text"></textarea>
    <div class="btn">
      <button>提交</button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    h() {
      if (this.text.split(/\r\n|\r|\n/).length < 10) return 10
      return this.text.split(/\r\n|\r|\n/).length + 10
    }
  },
  data() {
    return {
      height: 50,
      text: ''
    }
  },
  created() {
    console.log(this)
  },
  methods: {
    setheight() {
      this.height = this.text.split(/\r\n|\r|\n/).length + 10
    }
  }
}
</script>

<style>
.add-content {
  padding-top: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
textarea {
  /* display: block; */
  width: 100%;
  max-width: 800px;
  border: none;
  margin-top: 80px;
  padding: 40px;
  box-sizing: content-box;
  font-size: 18px;
  /* overflow: auto; */
  /* margin: 0 auto; */
}
</style>
