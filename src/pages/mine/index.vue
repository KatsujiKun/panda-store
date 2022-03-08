<template>
  <div>
    <header-nav></header-nav>
    <div class="container">
      <div class="left">
        <ul>
          <li @click="$router.push('/index')">返回首页</li>
          <li @click="$router.push('/cart')">我的购物车</li>
          <li @click="$router.push('/index')">退出登录</li>
        </ul>
      </div>
      <div class="center">
        <div class="top">
          <div class="user">
            <div class="headImg">
              <img src="https://img1.baidu.com/it/u=1385504774,776387690&fm=26&fmt=auto&gp=0.jpg" />
            </div>
            <div class="nick">
              <span>zhousir</span>
            </div>
            <div class="address">
              <span>我的收货地址</span>
            </div>
          </div>
          <div class="state">
            <p>待付款 (0)</p>
            <p>待发货 (0)</p>
            <p>待收货 (0)</p>
            <p>待评价 (0)</p>
            <p>退款</p>
          </div>
        </div>
        <div class="bottom">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="我的购物车" name="1" class="itemTitle">
              <div class="item" v-for="item in cartList" :key="item.id">
                <div class="productImg">
                  <img :src="item.imgUrl" />
                </div>
                <div class="productTitle">
                  <p>{{ item.title }}</p>
                </div>
                <div class="productPrice">
                  ￥<span>{{ item.price }}</span>
                </div>
                <div class="productNum">
                  <button @click="min(item.id)">-</button>
                  <input :value="item.num" />
                  <button @click="plus(item.id)">+</button>
                </div>
                <div class="productTotal">
                  ￥<span>{{ item.total }}</span>
                </div>
                <div class="productOpt">
                  <p @click="delOpt(item.id)">删除</p>
                </div>
              </div>
              <div class="more">
                <el-button type="primary" round @click="$router.push('/cart')">查看更多</el-button>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <div class="right">
        <p>我的日历</p>
        <div class="date">
          <h1>{{ nowDate.day }}</h1>
          <p>{{ nowDate.week }}</p>
          <p>{{ nowDate.year }}.{{ nowDate.month }}</p>
        </div>
      </div>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderNav from "../../components/headerNav.vue"
import FooterNav from "../../components/footerNav.vue"
export default {
  components: { HeaderNav, FooterNav },
  data() {
    return {
      activeNames: ["1"],
      cartList: [
        {
          id: 0,
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i4/2770740285/O1CN01323rpQ1DyZYq4wrB2_!!2770740285.jpg_80x80.jpg",
          title: "1",
          price: "179",
          total: "179",
          num: "1",
        },
        {
          id: 1,
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i4/2770740285/O1CN01323rpQ1DyZYq4wrB2_!!2770740285.jpg_80x80.jpg",
          title: "2",
          price: "179",
          total: "179",
          num: "1",
        },
        {
          id: 2,
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i4/2770740285/O1CN01323rpQ1DyZYq4wrB2_!!2770740285.jpg_80x80.jpg",
          title: "3",
          price: "179",
          total: "179",
          num: "1",
        },
      ],
      nowDate: {
        day: "",
        week: "",
        month: "",
        year: "",
      }
    }
  },
  created() {
    this.dateFormate()
  },

  computed: {
    dateFormate: function () {
      let day = new Date().getDate()
      if (day < 10) {
        this.nowDate.day = ('0' + day)
      } 
      this.nowDate.week = ('星期 ' + new Date().getDay())
      let month = new Date().getMonth() + 1
      if (month < 10) {
        this.nowDate.month = ('0' + month)
      }
      this.nowDate.year = new Date().getFullYear()
    }
  },

  methods: {
    handleChange(val) {},

    // 购物车数量操作
    min(id) {
      this.cartList.map((item) => {
        if (id === item.id) {
          item.num--
          item.total = item.num * item.price;
          if (item.num === 0) {
            item.num = 1
            item.total = item.price
          }
        }
      })
    },

    plus(id) {
      this.cartList.map((item) => {
        if (id === item.id) {
          item.num++
          item.total = item.num * item.price
        }
      })
    },

    // 删除商品
    delOpt(id) {
      let idx
      this.cartList.map((item, index) => {
        if (id === item.id) {
          idx = index
        }
      })
      this.cartList.splice(idx, 1)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../style/normailize.css");
@import url("./index.less");
</style>