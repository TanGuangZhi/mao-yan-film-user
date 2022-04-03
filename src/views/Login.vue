<!--
 * @Author: TanGuangZhi
 * @Date: 2022-03-08 19:27:15 Tue
 * @LastEditTime: 2022-04-03 13:50:33 Sun
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @Keys: Vue, Web-Server, ElementUI
-->
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
        <el-col :span="4">
          <el-checkbox v-model="rememberMe" style="margin-bottom: 10px">
            15天内记住我
          </el-checkbox>
        </el-col>

        <el-col :span="24">
          <el-form-item size="large">
            <el-button type="primary" @click="loginBtnClick">登录</el-button>
            <el-button type="default">
              <router-link to="/register">注册</router-link>
            </el-button>
          </el-form-item>
        </el-col>
      </el-form>
    </el-row>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import Index from "./Index.vue";
const { mapState, mapActions } = createNamespacedHelpers("userStore");

export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        userName: "",
        userPass: "",
      },
      rememberMe: false,
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
      },
    };
  },
  mounted() {
    let loginUserInfo = localStorage.getItem("loginUserInfo");
    // console.log(loginUserInfo);
    if (loginUserInfo) {
      loginUserInfo = JSON.parse(loginUserInfo);
      this.formData.userName = loginUserInfo.userName;
      this.formData.userPass = loginUserInfo.userPass;
      this.rememberMe = true;
    }
  },
  methods: {
    ...mapActions(["loginAsync"]),
    async loginBtnClick() {
      let data = await this.loginAsync(this.formData);
      // console.log(data);

      // 1. login success
      if (data.user) {
        localStorage.setItem("token", data.token);
        this.$message({
          type: "success",
          message: "登录成功,正在跳转...",
        });

        // 1.2. remember me?
        if (this.rememberMe) {
          localStorage.setItem(
            "loginUserInfo",
            JSON.stringify({
              userName: data.user.userName,
              userPass: data.user.userPass,
              userInfo: data.user,
            })
          );
        }

        // 1-YH. wait some time and then to jump
        setTimeout(() => {
          this.$store.commit("userStore/SET_USER_LIST", data.user);
          this.$router.push({
            path: `/index`,
            query: data.user,
          });
        }, 600);
      } else {
        this.$message({
          type: "error",
          message: data,
        });
      }
    },

    submitForm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        // TODO 提交表单
      });
    },
    resetForm() {
      this.$refs["elForm"].resetFields();
    },
  },
};
</script>
