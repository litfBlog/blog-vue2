<template>
  <div class="bottomInfo-content">
    <div class="top">
      <dl class="iconfont">
        <!-- email &#xe5c8;
        bili &#xe75d;
        qq &#xe611;
        wx &#xe664; -->
        <dt>联系我</dt>
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
          <a href="http://alongw.cn" target="_blank">阿龙博客</a>
        </dd>
        <dd>
          <a href="https://www.lieyan.space/" target="_blank">烈焰博客</a>
        </dd>
      </dl>
      <dl>
        <dt>没啥用</dt>
        <dd>
          <a href="javascript:">多放一个好看点</a>
        </dd>
      </dl>
    </div>
    <div class="copyRighr">&copy;2021 litfa all rights reserved</div>
    <!-- <div class="icp">豫ICP备1234567号</div> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.bottomInfo-content {
  margin-top: 20px;
  padding: 50px 120px;
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
  .copyRighr {
    font-size: 12px;
  }
  .icp {
    font-size: 14px;
  }
}
</style>
