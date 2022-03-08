<template>
  <div class="container">
    <header>
      <p>用户登录</p>
    </header>
    <el-form
      v-loading="loading"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="user">
        <el-input
          type="text"
          v-model="ruleForm.user"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginEvt('ruleForm')">登录</el-button>
        <el-button @click="$router.push('/register')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { loginApi } from "../../apis/login";
export default {
  data() {
    let vdtuser = (_, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
        return
      }
      callback()
    }
    let vdtpass = (_, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
        return
      }
      callback()
    }
    return {
      ruleForm: {
        user: "",
        password: "",
      },
      rules: {
        user: [{ validator: vdtuser, trigger: "blur" }],
        password: [{ validator: vdtpass, trigger: "blur" }]
      },
      loading: false
    };
  },
  methods: {
    loginEvt(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let userObj = {
            username: this.ruleForm.user,
            password: this.ruleForm.password,
          };
          let result = await loginApi(userObj);
          if (result.length === 0) {
            this.$message.error("该用户不存在");
          } else {
            this.loading = true
            setTimeout(() => {
              this.$message({
                message: `欢迎回来，${this.ruleForm.user}`,
                type: "success",
              })
              this.$router.push('/index')
            }, 1000)
          }
          return
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 500px;
  height: 300px;
  position: absolute;
  left: 0%;
  right: 0;
  top: 0%;
  bottom: 0%;
  margin: auto;
  > header {
    text-align: center;
  }
}
</style>