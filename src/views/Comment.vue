<!--
 * @Author: TanGuangZhi
 * @Date: 2022-03-11 19:30:14 Fri
 * @LastEditTime: 2022-03-13 21:25:47 Sun
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
-->
<template>
  <div>
    <el-dialog
      v-bind="$attrs"
      v-on="$listeners"
      @open="onOpen"
      @close="onClose"
      :visible.sync="dialogObj.comment"
      title="评论"
    >
      <el-form
        ref="elForm"
        :model="formData"
        :rules="rules"
        size="medium"
        label-width="100px"
        label-position="top"
      >
        <el-form-item label="评论内容" prop="content">
          <el-input
            v-model="formData.content"
            type="textarea"
            placeholder="请输入评论内容"
            :maxlength="100"
            show-word-limit
            :autosize="{ minRows: 4, maxRows: 4 }"
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item label="评分" prop="filmScore">
          <el-rate
            v-model="formData.filmScore"
            :max="5"
            allow-half
            show-text
          ></el-rate>
        </el-form-item>
        <el-form-item label="" prop="field101"></el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button
          type="primary"
          icon="el-icon-s-comment"
          @click="handelConfirm"
          size="medium"
        >
          提交
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import * as dayjs from "dayjs";
export default {
  inheritAttrs: false,
  components: {},
  props: {
    dialogObj: { type: Object },
    filmId: String,
    toCommentPageData: Object,
  },
  data() {
    return {
      formData: {
        content: undefined,
        filmScore: 3,
        field101: undefined,
      },
      rules: {
        content: [
          {
            required: true,
            message: "请输入评论内容",
            trigger: "blur",
          },
        ],
        filmScore: [
          {
            required: true,
            message: "评分不能为空",
            trigger: "change",
          },
        ],
      },
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onOpen() {},
    onClose() {
      this.$refs["elForm"].resetFields();
    },
    close() {
      //   this.dialogVisible = false;
      this.dialogObj.comment = false;
      //   this.$emit("dialogVisible", false);
    },
    handelConfirm() {
      this.$refs["elForm"].validate((valid) => {
        if (!valid) return;
        // 1. write to comment table

        this.formData.userId = this.toCommentPageData.userId;
        this.formData.filmId = this.toCommentPageData.filmId;
        this.formData.orderId = this.toCommentPageData.orderId;
        this.formData.commentTime = dayjs().format("YYYY-MM-DD HH:mm");
        this.formData.filmScore *= 2;
        this.$http("http://localhost:3000/user/insertComment", {
          params: this.formData,
        }).then((res) => {
          //   console.log(res);
          this.$notify({
            title: "成功",
            message: "评论成功",
            type: "success",
          });
        });
        this.close();
      });
    },
  },
};
</script>
<style>
.el-rate {
  display: inline-block;
  vertical-align: text-top;
}
</style>
