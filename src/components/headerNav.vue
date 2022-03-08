<template>
  <header>
    <div class="left">
      <div class="logo">
        <img src="../images/logo.png" alt="" />
      </div>
      <div class="title">
        <div class="top">
          <span>熊猫优选</span>
        </div>
        <div class="bottom">
          <span>XIONG MAO YOU XUAN</span>
        </div>
      </div>
    </div>
    <div class="center">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input"
        class="text"
      >
      </el-input>
      <el-button round class="searchBtn">搜索</el-button>
    </div>
    <div class="right">
      <ul>
        <li>
          <img src="../images/baoyou.png" alt="" />
          <p>全程包邮</p>
        </li>
        <li>
          <img src="../images/tuihuan.png" alt="" />
          <p>7天退还</p>
        </li>
        <li>
          <img src="../images/pinzhi.png" alt="" />
          <p>品质保证</p>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style lang="less" scoped>
@import url('../style/normailize.css');
header {
  width: 1200px;
  min-width: 1200px;
  height: 160px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > .left {
    display: flex;
    > .logo {
      > img {
        width: 75px;
        height: 75px;
      }
    }
    > .title {
      margin: 8px 0 0 15px;
      text-align: center;
      color: #43200c;
      > .top > span {
        font-size: 28px;
        font-weight: 600;
      }
      > .bottom {
        display: inline-block;
        font-size: 12px;
        transform: scale(0.8);
      }
    }
  }
  > .center {
    width: 530px;
    height: 48px;
    line-height: 48px;
    border: 2px solid #43240c;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    > .text::v-deep input {
        border: 1px solid transparent;
    }
    > .searchBtn {
        width: 120px;
        color: #43200c;
        background-color: #fee44e;
        border: 1px solid transparent;
        border-radius: 30px;
    }
    > .searchBtn:hover {
        color: #43200c;
    }
  }
  > .right {
    img {
      width: 40px;
      height: 40px;
    }
    ul > li {
      float: left;
      text-align: center;
      margin-right: 25px;
      list-style: none;
      color: #877A73;
      > p {
          font-size: 12px;
      }
    }
  }
}
</style>