<template>
  <div>
    <header-nav></header-nav>
    <div class="container">
      <el-table
        ref="multipleTable"
        :data="tableData"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column label="商品图片" width="120">
          <template slot-scope="scope">
            <el-image :src="scope.row.imgUrl" lazy></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="商品名称" width="320">
        </el-table-column>
        <el-table-column prop="price" label="单价(元)" show-overflow-tooltip>
        </el-table-column>
        <el-table-column prop="number" label="数量" show-overflow-tooltip>
          <template slot-scope="scope">
            <button type="button" @click="min(scope.row.id)">-</button>
            <input type="text" class="num" :value="scope.row.number" />
            <button type="button" @click="plus(scope.row.id)">+</button>
          </template>
        </el-table-column>
        <el-table-column prop="total" label="金额(元)" show-overflow-tooltip>
        </el-table-column>
        <el-table-column label="操作" show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button
              type="danger"
              icon="el-icon-delete"
              circle
              @click="delOpt(scope.row.id)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="top">
        <span>合计(不含运费)：</span>
        <span>￥{{ totalPrice }}</span>
        <p>结算</p>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderNav from "../../components/headerNav.vue";
export default {
  components: { HeaderNav },
  data() {
    return {
      tableData: [
        {
          id: 1,
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i4/2770740285/O1CN01323rpQ1DyZYq4wrB2_!!2770740285.jpg_80x80.jpg",
          title: "网易云耳机",
          price: "178",
          number: 1,
          total: "178",
          state: false,
        },
        {
          id: 2,
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i4/2770740285/O1CN01323rpQ1DyZYq4wrB2_!!2770740285.jpg_80x80.jpg",
          title: "网易云耳机",
          price: "178",
          number: 1,
          total: "178",
          state: false,
        },
        {
          id: 3,
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i4/2770740285/O1CN01323rpQ1DyZYq4wrB2_!!2770740285.jpg_80x80.jpg",
          title: "网易云耳机",
          price: "178",
          number: 1,
          total: "178",
          state: false,
        },
        {
          id: 4,
          imgUrl:
            "https://img.alicdn.com/bao/uploaded/i4/2770740285/O1CN01323rpQ1DyZYq4wrB2_!!2770740285.jpg_80x80.jpg",
          title: "网易云耳机",
          price: "178",
          number: 1,
          total: "178",
          state: false,
        },
      ],
      totalPrice: 0,
      multipleSelection: [],
    };
  },

  watch: {
    multipleSelection(newVal) {
      this.totalPrice = 0
      newVal.forEach((item) => {
        if (item.state === true) this.totalPrice += Number(item.total);
      });
    },
  },

  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.multipleSelection.map((item) => {
        if (item.state === false) item.state = true;
      });
    },

    // 数量操作
    min(id) {
      this.tableData.map((item) => {
        if (id === item.id) {
          item.number--;
          item.total = item.number * item.price;
          if (item.number === 0) {
            item.number = 1;
            item.total = item.number * item.price;
          }
        }
      });
    },
    plus(id) {
      this.tableData.map((item) => {
        if (id === item.id) {
          item.number++;
          item.total = item.number * item.price;
        }
      });
    },

    // 删除商品
    delOpt(id) {
      let idx;
      this.tableData.map((item, index) => {
        if (id === item.id) {
          idx = index;
        }
      });
      this.tableData.splice(idx, 1);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("../../style/common.less");
.top {
  width: 1200px;
  height: 50px;
  border: 1px solid #e4eaee;
  position: fixed;
  bottom: 0;
  left: 50%;
  margin-left: -600px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  > span:nth-child(1) {
    font-size: 14px;
    color: #3c3c3c;
  }
  > span:nth-child(2) {
    font-size: 22px;
    color: #f40;
  }
  > p {
    width: 100px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #fee44e;
    margin-left: 30px;
  }
}
input {
  width: 30px;
  text-align: center;
  border-radius: 0;
  outline: none;
  border: 0 solid #000;
  background: #fff;
}

button {
  outline: none;
  cursor: pointer;
  border: 0px solid #43200c;
  background: #fee44e;
  border-radius: 3px;
}
/deep/.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: #fee44e;
  border-color: #fee44e;
}
/deep/.el-table--enable-row-hover .el-table__body tr:hover > td.el-table__cell {
  background: #fee44e1c;
}
/deep/.el-checkbox__inner:hover {
  border-color: #fee44e;
}
</style>