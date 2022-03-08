<template>
  <div class="container">
    <header>
      <h1>用户注册</h1>
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
      <el-form-item label="用户名" prop="username">
        <el-input
        type="text"
          v-model="ruleForm.username"
          placeholder="用于用户登录"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname">
        <el-input
        type="text"
          v-model="ruleForm.nickname"
          placeholder="用于用户社交昵称"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
        <el-input
        type="password"
          v-model="ruleForm.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input
        type="text"
          v-model="ruleForm.phone"
          v-model.number="ruleForm.phone"
          placeholder="用于用户找回"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="registerEvt('ruleForm')">提交</el-button>
        <el-button @click="resetFrom('ruleForm')">重置</el-button>
        <el-button @click="$router.go(-1)">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { registerApi } from "../../apis/login";
export default {
  data() {
    // 校验用户名
    var vdtusername = (_, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'));
        return
      } 
      callback()
    }

    // 校验用户昵称
    var vdtnickname = (_, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户昵称'))
      } else {
        callback()
      }
    }

    // 校验密码输入
    var vdtpass = (_, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        callback();
      }
    }

    // 校验手机号输入
    var vdtphone = (_, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        username: "",
        nickname: "",
        password: "",
        phone: "",
      },
      rules: {
        username: [{ validator: vdtusername, trigger: "blur" }],
        nickname: [{ validator: vdtnickname, trigger: "blur" }],
        password: [{ validator: vdtpass, trigger: "blur" }],
        phone: [{ validator: vdtphone, trigger: "blur" }]
      },
      loading: false
    }
  },
  methods: {
    registerEvt(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          await registerApi(this.ruleForm)
          this.loading = true
          setTimeout(() => {
            this.$message({
            message: '注册成功！',
            type: 'success'
            })
            this.$router.push('/login')
          }, 1000);
        } else {
          this.$message.error('请将信息填写完整');
          return false;
        }
      });
    },
    resetFrom(formName){
      this.$refs[formName].resetFields();
    }
  },
};
</script>

<style lang="less" scoped>
.container {
  width: 500px;
  height: 500px;
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