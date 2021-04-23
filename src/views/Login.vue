<template>
  <div class="login-container">
    <a-form-model
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback label="邮箱" prop="email">
        <a-input v-model="loginForm.email" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="密码" prop="password">
        <a-input
          v-model="loginForm.password"
          type="password"
          autocomplete="off"
        />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('loginForm')">
          登录
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('loginForm')">
          重置
        </a-button>
      </a-form-model-item>
      <div class="nav">
        <RouterLink to="/logon">没有账号，去注册</RouterLink>
        <RouterLink to="/findBack">找回密码</RouterLink>
      </div>
    </a-form-model>
  </div>
</template>
<script>
import user from "@/api/user";
export default {
  data() {
    let checkEmailReg = /^[\w-]+@[\w-]+.com$/;
    let checkEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入邮箱"));
      }
      if (checkEmailReg.test(value)) {
        callback();
      } else {
        callback(new Error("请输入正确的邮箱"));
      }
    };
    let checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        email: "",
        password: "",
      },
      rules: {
        email: [{ validator: checkEmail, trigger: "change" }],
        password: [{ validator: checkPassword, trigger: "change" }],
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          user.login(this.loginForm).then(
            (resp) => {
              // 登录成功并且把用户信息存入cookie
              this.$message.success(resp.msg);
              // 并且跳到首页
              this.$router.push("/");
              this.$store.dispatch("user/setUser", resp.data);
            },
            (err) => {
              this.$message.error(err);
            }
          );
          return true;
        } else {
          this.$message.error("邮箱或密码输入错误");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped lang="less">
.login-container {
  margin: 50px auto;
  border: 1px solid #eee;
  width: 600px;
  padding: 50px 10px 0;
}
.nav {
  display: flex;
  justify-content: space-between;
}
</style>
