<template>
  <div>
    <footer>
      <div class="container">
        <div class="top">
          <div class="left">
            <img
              src="http://img1.lukou.com/static/img/activity/icon.png"
              alt=""
            />
            <div class="title">
              <div class="top">
                <span>熊猫优选</span>
              </div>
              <div class="bottom">
                <span>年轻人网购首选</span>
                <span>购物领券更省钱</span>
              </div>
            </div>
          </div>
          <div class="right">
            <span>|<a href="#">下载APP</a></span>
          </div>
        </div>
        <div class="bottom"></div>
      </div>
    </footer>
  </div>
</template>

<style lang="less" scoped>
footer {
  width: 100%;
  height: 240px;
  background-color: #000;
  opacity: 0.75;
  padding: 0 70px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  > .container {
    width: 1200px;
    min-width: 1200px;
    margin: 0 auto;
    > .top {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      > .left {
        display: flex;
        margin-right: 440px;
        > img {
          width: 110px;
          height: 110px;
        }
        > .title {
          color: #fff;
          margin-left: 20px;
          text-align: center;
          > .top {
            font-size: 36px;
            font-weight: 600;
          }
          > .bottom {
            display: flex;
            flex-direction: column;
            font-size: 18px;
            font-weight: 500;
          }
        }
      }
      > .right {
        flex: 1;
        > span {
          color: #fff;
          a {
            color: #fff;
            margin-left: 20px;
          }
        }
      }
    }
  }
}
</style>