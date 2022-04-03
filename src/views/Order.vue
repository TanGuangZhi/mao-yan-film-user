<!--
 * @Author: TanGuangZhi
 * @Date: 2022-03-08 19:27:15 Tue
 * @LastEditTime: 2022-04-03 12:41:01 Sun
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
-->
<template>
  <div id="order">
    <Comment :dialogObj="dialogObj" :toCommentPageData="toCommentPageData" />
    <el-empty
      v-if="userOrderInfoList.length == 0"
      description="暂无订单"
    ></el-empty>
    <el-card
      class="box-card"
      v-for="(orderInfo, index) in userOrderInfoList"
      :key="index"
    >
      <div slot="header" class="clearfix">
        <span>《{{ orderInfo.filmIdToDetail[0].filmName }}》</span>

        <span style="margin-left: 50%">￥{{ orderInfo.orderPrice }} 元</span>
        <el-button
          type="warning"
          round
          style="float: right; padding: 3px 0; width: 30px"
          icon="el-icon-message"
          @click="
            (dialogObj.comment = true),
              (toCommentPageData.filmId = orderInfo.filmId),
              (toCommentPageData.userId = orderInfo.userId),
              (toCommentPageData.orderId = orderInfo.orderId)
          "
        ></el-button>
      </div>
      <img
        :src="'http://localhost:3000/' + orderInfo.filmIdToDetail[0].filmImg"
        style="width: 30px"
      />
      <span style="margin-bottom: 15px">
        订单编号:　{{ orderInfo.orderId }} 　　　　　　完成时间:　{{
          orderInfo.startTime
        }}
      </span>
    </el-card>
  </div>
</template>

<script>
import Comment from "./Comment.vue";
export default {
  name: "Order",
  components: { Comment },
  data() {
    return {
      userId: "",
      toCommentPageData: {},
      userOrderInfoList: [],
      dialogObj: { comment: false },
    };
  },
  methods: {
    queryUserOrder() {
      this.$http("http://localhost:3000/order/queryUserOrder", {
        params: { userId: this.userId },
      }).then((res) => {
        console.log(res.data);
        this.userOrderInfoList = res.data;
      });
    },
  },
  created() {
    this.userId = this.$route.query.userId;
    console.log(this.$route.query);
    this.queryUserOrder();
  },
};
</script>

<style>
#order {
  margin-top: 10%;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 680px;
  margin: auto;
  margin-top: 20px;
}
</style>
