<template>
  <div>
    <router-link to="/index">返回首页</router-link>
    <el-row :gutter="15" style="width: 300px; margin: 50px 0 0 40%">
      <el-form
        ref="elForm"
        :model="formData"
        :rules="rules"
        size="medium"
        label-width="100px"
        label-position="top"
      >
        <el-col :span="24">
          <el-form-item label="用户名" prop="userName">
            <el-input
              v-model="formData.userName"
              placeholder="请输入用户名"
              clearable
              prefix-icon="el-icon-user-solid"
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="密码" prop="userPass">
            <el-input
              v-model="formData.userPass"
              placeholder="请输入密码"
              clearable
              prefix-icon="el-icon-lock"
              show-password
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="email" prop="email">
            <el-input
              v-model="formData.email"
              placeholder="请输入email"
              clearable
              prefix-icon="el-icon-message"
              :style="{ width: '100%' }"
            ></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="primary" @click="submitForm">注册</el-button>
            <el-button @click="resetForm">重置</el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("userStore");

export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        userName: "",
        userPass: "",
        email: "",
      },
      rules: {
        userName: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
        ],
        userPass: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "请输入email",
          },
        ],
      },
    };
  },

  methods: {
    ...mapActions(["userRegisterAsync"]),
    async registerBtnClick() {
      let res = await this.userRegisterAsync(this.formData);
      if (res == "200") {
        this.$message({
          type: "success",
          message: "注册成功,请先激活邮箱~",
        });
        this.$router.push("/login");
      } else {
        this.$message({
          type: "error",
          message: res,
        });
      }
    },
    submitForm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        this.registerBtnClick();
      });
    },
    resetForm() {
      this.$refs["elForm"].resetFields();
    },
  },
};
</script>
