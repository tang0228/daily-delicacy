<template>
  <div class="register-container">
    <a-form-model
      ref="registerForm"
      :model="registerForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item has-feedback label="邮箱" prop="email">
        <a-input v-model="registerForm.email" type="email" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="获取" prop="">
        <a-button @click="handleCode">验证码</a-button>
      </a-form-model-item>
      <a-form-model-item has-feedback label="验证码" prop="code">
        <a-input v-model="registerForm.code" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="密码" prop="password">
        <a-input
          v-model="registerForm.password"
          type="password"
          autocomplete="off"
        />
      </a-form-model-item>
      <a-form-model-item has-feedback label="用户名" prop="username">
        <a-input v-model.number="registerForm.username" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="角色" prop="">
        <a-checkbox @change="handleChange"> 管理员 </a-checkbox>
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="submitForm('registerForm')">
          注册
        </a-button>
        <a-button style="margin-left: 10px" @click="resetForm('registerForm')">
          重置
        </a-button>
      </a-form-model-item>
      <RouterLink to="/login">已有账号，去登录</RouterLink>
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
        callback(new Error("邮箱格式不正确"));
      }
    };
    let checkPassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    let checkCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        callback();
      }
    };
    let checkUsernameReg = /^[a-zA-Z0-9]+$/;
    let checkUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入用户名"));
      }
      if (checkUsernameReg.test(value)) {
        callback();
      } else {
        callback(new Error("只能包含英文、数字"));
      }
    };

    return {
      registerForm: {
        email: "",
        password: "",
        code: "",
        username: "",
        role: "",
      },
      rules: {
        email: [{ validator: checkEmail, trigger: "change" }],
        password: [{ validator: checkPassword, trigger: "change" }],
        code: [{ validator: checkCode, trigger: "change" }],
        username: [{ validator: checkUsername, trigger: "change" }],
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
          user.logon(this.registerForm).then((resp) => {
            this.$message.success(resp.msg);
          }, err => {
            this.$message.error(err);
          });
          return true;
        }
        this.$message.error("信息填写错误");
        return false;
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCode() {
     
      user.getCode({email:this.registerForm.email}).then((resp) => {
        this.$message.success("获取验证码成功"+resp.msg);
      });
    },
    handleChange(e) {
      this.registerForm.role = e.target.checked ? "admin" : "customer";
    },
  },
  
};
</script>

<style scoped lang="less">
.register-container {
  width: 600px;
  margin: 50px auto;
  border: 1px solid #eee;
  padding: 30px 10px 0 30px;
}
</style>
