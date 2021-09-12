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
          豫ICP备2021024510号
        </a>

        <!-- <div style="width:300px;margin:0 auto; padding:20px 0;">
          <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41018202000798" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
            <img :src="beiAnTuPian" style="float:left;" />
            <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">豫公网安备 41018202000798号</p>
          </a>
        </div> -->
        <!-- <div style="width:300px;margin:0 auto; padding:20px 0;display: inline-block;"> -->
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=41018202000798" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
          <img :src="beiAnTuPian" />
          <span style="height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">豫公网安备 41018202000798号</span>
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
  text-align: center;
  margin-top: 20px;
  padding: 20px 120px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: rgb(43, 42, 33);
  color: #fff;
  .top {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 20px;
    dl {
      // width: 13em;
      margin-bottom: 30px;
      dt {
        font-size: 22px;
        text-align: left;
        font-weight: 600;
        margin-bottom: 0.5em;
      }
      dd {
        font-size: 18px;
        text-align: left;
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
