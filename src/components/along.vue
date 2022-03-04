<template>
  <div class="container">
    <div class="activity">
      <!-- <img :src="require('@/assets/2.png')" alt=""> -->
      <div class="jiaoZi">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      document.title = `
        &#117;&#114;&#108;&#58;&#47;&#112;&#47;&#49;&#54;&#59;&#112;&#97;&#115;&#115;&#58;&#97;&#108;&#111;&#110;&#103;&#119;&#50;&#50;&#51;&#51;
        `
    }, 5000)
  }
}
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100vh;
  z-index: 1000000;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
}
.activity {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  animation: activity 10s forwards;
}

.activity img {
  z-index: 1000;
  position: fixed;
  bottom: 0;
  display: block;
  width: 100%;
  transform: translateY(50%);
}

.activity .jiaoZi {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60vh;
}

.activity .jiaoZi span {
  position: absolute;
  width: 100px;
  height: 100px;
  background: url("./../assets/along-avatar.jpg") no-repeat;
  border-radius: 50%;
  background-size: 100%;
  left: 0;
  top: -200px;
}

.activity .jiaoZi span:nth-child(1) {
  animation: jiaozi1 9s linear;
}

.activity .jiaoZi span:nth-child(2) {
  animation: jiaozi2 6s linear;
}

.activity .jiaoZi span:nth-child(3) {
  animation: jiaozi3 9s;
}

.activity .jiaoZi span:nth-child(4) {
  animation: jiaozi4 12s;
}

.activity .jiaoZi span:nth-child(5) {
  animation: jiaozi5 6s;
}

.activity .jiaoZi span:nth-child(6) {
  animation: jiaozi6 10s;
}

@media screen and (max-width: 650px) {
  .activity img {
    width: 150%;
    margin: 0 auto;
    transform: translateY(0);
  }
}

@keyframes activity {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    display: none;
  }
}

@keyframes jiaozi1 {
  0% {
    left: 0;
  }

  30% {
    left: 50px;
  }

  60% {
    left: 10px;
  }

  100% {
    left: 20px;
    top: 50vh;
  }
}

@keyframes jiaozi2 {
  0% {
    left: 180px;
  }

  30% {
    left: 180px;
  }

  60% {
    left: 160px;
  }

  100% {
    left: 190px;
    top: 50vh;
  }
}

@keyframes jiaozi3 {
  0% {
    left: 280px;
  }

  30% {
    left: 300px;
  }

  60% {
    left: 330px;
  }

  100% {
    left: 300px;
    top: 50vh;
  }
}

@keyframes jiaozi4 {
  0% {
    left: 680px;
  }

  30% {
    left: 640px;
  }

  60% {
    left: 600px;
  }

  100% {
    left: 690px;
    top: 50vh;
  }
}

@keyframes jiaozi5 {
  0% {
    right: 180px;
  }

  30% {
    right: 180px;
  }

  60% {
    right: 160px;
  }

  100% {
    right: 190px;
    top: 50vh;
  }
}

@keyframes jiaozi6 {
  0% {
    right: 80px;
  }

  30% {
    right: 30px;
  }

  60% {
    right: 60px;
  }

  100% {
    right: 10px;
    top: 50vh;
  }
}
</style>
