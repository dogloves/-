<template>
  <div class="login-wrap">
    <div class="login-box">
      <div class="name">登录</div>
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px" class="login-ruleForm">
        <el-form-item label="账号" prop="account" required>
          <el-input v-model.number="loginForm.account"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" required>
          <el-input type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item class="remember-psd">
          <el-checkbox v-model="rememberPsd">记住密码</el-checkbox>
        </el-form-item>
        <el-button class="btn-login" type="primary" @click="login('loginForm')">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import '@/tool/tool'
export default {
  name: "login",
  data () {
    var validateAccount = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      } else {
        callback()
      }
    };
    var validatePassWord = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'));
      } else {
        callback()
      }
    };
    return {
      loginForm: {
        account: '',
        password: '',
      },
      rememberPsd: false,
      rules: {
        account: [
          { validator: validateAccount }
        ],
        password: [
          { validator: validatePassWord }
        ],
      }
    };
  },
  methods: {
    //登录
    login (formName) {
      this.$refs[formName].validate((valid) => {
        console.log(valid)
        if (valid) {
          this.$router.push({ name: 'home' })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>
<style scoped lang="scss">
.login-wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  .login-box {
    width: 450px;
    background: #fff;
    border-radius: 10px;
  }
  .name {
    width: 100%;
    padding: 10px 0;
    background: #abcdef;
    line-height: 30px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 18px;
  }
  .login-ruleForm {
    padding: 10px 30px 30px 10px;
  }
  .remember-psd {
    text-align: left;
  }
  .btn-login {
    width: 80%;
    margin-left: 80px;
  }
}
</style>
