<template>
  <div class="bottomInfo-content">
    <div class="top">
      <dl class="iconfont">
        <!-- email &#xe5c8;
        bili &#xe75d;
        qq &#xe611;
        wx &#xe664; -->
        <dt>关于</dt>
        <dd>
          <a href="https://qm.qq.com/cgi-bin/qm/qr?k=KhU1Ifs9GAuPaHfsGMHM4nUst9pR58Uj&noverify=0" target="_blank">
            <i class="iconfont">&#xe611;</i>
            1586380249
          </a>
        </dd>
        <dd>
          <a href="javascript:">
            <i class="iconfont">&#xe664;</i>
            xing2233_
          </a>
        </dd>
        <dd>
          <a href="mailto:admin@litf.com.cn" target="_blank">
            <i class="iconfont">&#xe5c8;</i>
            admin@litf.com.cn
          </a>
        </dd>
      </dl>
      <dl>
        <dt>友情链接</dt>
        <dd>
          <a href="https://www.lieyan.space/" target="_blank">烈焰博客</a>
        </dd>
        <dd>
          <a href="http://alongw.cn" target="_blank">阿龙博客</a>
        </dd>
      </dl>
      <dl>
        <dt>没啥用</dt>
        <dd>
          <a href="javascript:">多放一个好看点</a>
        </dd>
      </dl>
    </div>
    <div class="text">
      <hr />
      <div class="copyRighr">&copy;2021 litfa all rights reserved</div>
      <div class="icp">
        <a href="https://beian.miit.gov.cn">
          豫ICP备2021024510号-2
        </a>
        <!-- <div style="width:300px;margin:0 auto; padding:20px 0;display: inline-block;"> -->
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=4101820200807" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img :src="beiAnTuPian" />
          <span style="height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">豫公网安备 4101820200807号</span>
        </a>
        <!-- </div> -->

      </div>
    </div>
  </div>
</template>

<script>
import beiAnTuPian from '@/assets/备案图标.png'
export default {
  data() {
    return {
      beiAnTuPian
    }
  }
}
</script>

<style lang="less" scoped>
.bottomInfo-content {
  // text-align: center;
  // margin-top: 20px;
  padding: 20px 0;
  // display: flex;
  // justify-content: space-between;
  // flex-direction: column;
  background-color: rgb(43, 42, 33);
  color: #fff;
  // width: 100%;
  .top {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    flex: 1;
    justify-content: space-around;
    margin-bottom: 20px;
    dl {
      width: 170px;
      // flex: 1;
      text-align: center;
      // width: 13em;
      margin-bottom: 30px;
      &:nth-child(1) {
        a {
          margin: 0 auto;
          width: 10.5em;
          display: block;
          text-align: left;
        }
      }
      // 隐藏第三个
      @media screen and (max-width: 540px) {
        &:nth-child(3) {
          display: none;
        }
      }
      dt {
        font-size: 22px;
        text-align: center;
        font-weight: 600;
        margin-bottom: 0.5em;
      }
      dd {
        font-size: 18px;
        // text-align: left;
        // margin: 0 auto;
        // width: 11em;
        padding: 0.5em 0.4em;
        a {
          color: #eee;
          &:hover {
            color: rgb(33, 146, 252);
          }
        }
      }
    }
  }
  .text {
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    hr {
      width: 100%;
      border: none;
      border-top: 0.5px solid #666;
    }
    .copyRighr {
      font-size: 12px;
      display: inline;
      margin: 0 10px;
    }
    .icp {
      display: flex;
      display: inline;
      margin: 0 10px;
      a {
        color: #939393;
        font-size: 12px;
      }
    }
  }
}
</style>
