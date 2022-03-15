<template>
  <div id="seat">
    <Banner />
    <div class="container">
      <div class="order-progress-bar">
        <div class="step first done">
          <span class="step-num">1</span>
          <div class="bar"></div>
          <span class="step-text">选择影片场次</span>
        </div>
        <div class="step done">
          <span class="step-num">2</span>
          <div class="bar"></div>
          <span class="step-text">选择座位</span>
        </div>
        <div class="step">
          <span class="step-num">3</span>
          <div class="bar"></div>
          <span class="step-text">5分钟内付款</span>
        </div>
        <div class="step last">
          <span class="step-num">4</span>
          <div class="bar"></div>
          <span class="step-text">影院取票观影</span>
        </div>
      </div>

      <div class="main clearfix">
        <div class="hall">
          <div class="seat-example">
            <div class="selectable-example example">
              <span>可选座位</span>
            </div>
            <div class="sold-example example">
              <span>已售座位</span>
            </div>
            <div class="selected-example example">
              <span>已选座位</span>
            </div>
          </div>

          <div class="seats-block">
            <div class="row-id-container">
              <span class="row-id"></span>
            </div>

            <div class="seats-container">
              <div class="screen-container" style="left: 85px">
                <div class="screen">银幕中央</div>
                <div class="c-screen-line"></div>
              </div>

              <div class="seats-wrapper">
                <div class="row" style="cursor: pointer"></div>
                <div class="hall" id="seatList">
                  <div
                    class="seat-example sel-seat"
                    v-for="(row, index) in 10"
                    :key="index"
                  >
                    <span
                      :class="{
                        'selectable-example example': true,
                        'selected-example': seatArr[index][index1].isSelected,
                        'sold-example': seatArr[index][index1].isSold,
                      }"
                      v-for="(col, index1) in 10"
                      :key="index1"
                      @click="selectSeat(index, index1)"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="side">
          <div class="movie-info clearfix">
            <div class="poster">
              <img :src="'http://localhost:3000/' + filmDetailInfo.filmImg" />
            </div>
            <div class="content">
              <p class="name text-ellipsis">{{ filmDetailInfo.filmName }}</p>
              <div class="info-item">
                <span>类型 :</span>
                <span class="value">{{ filmDetailInfo.filmType }}</span>
              </div>
              <div class="info-item">
                <span>时长 :</span>
                <span class="value">{{ filmDetailInfo.timeCount }}</span>
              </div>
            </div>
          </div>

          <div class="show-info">
            <div class="info-item">
              <span>影院 :</span>
              <span class="value text-ellipsis">万达影院</span>
            </div>
            <div class="info-item">
              <span>影厅 :</span>
              <span class="value text-ellipsis">精品VIP厅</span>
            </div>
            <div class="info-item">
              <span>版本 :</span>
              <span class="value text-ellipsis">1.0.0</span>
            </div>
            <div class="info-item">
              <span>场次 :</span>
              <span class="value text-ellipsis screen">
                2022-02-01 19:00-21:00
              </span>
            </div>
            <div class="info-item">
              <span>票价 :</span>
              <span class="value text-ellipsis">
                ￥{{ transferValue.filmPrice }}/张
              </span>
            </div>
          </div>

          <div class="ticket-info">
            <div class="no-ticket">
              <p class="buy-limit">座位：一次最多选4个座位</p>
              <p class="no-selected">
                请
                <span>点击左侧</span>
                座位图选择座位
              </p>
            </div>
            <div class="has-ticket" style="display: block">
              <span class="text">座位：</span>
              <div class="ticket-container">
                <span
                  class="ticket"
                  v-for="(item, key) in selectedSeat"
                  :key="key"
                >
                  {{ item.seatX + 1 }}排{{ item.seatY + 1 }}座
                </span>
              </div>
            </div>

            <div class="total-price">
              <span>总价 :</span>
              <span class="price">{{ totalPrice.toFixed(2) }}</span>
            </div>
          </div>

          <div class="confirm-order">
            <div class="cellphone">
              <span>手机号 :</span>
              <span class="phone-num">3444556</span>
            </div>
            <div class="confirm-btn" @click="confirmChooseSeat">确认选座</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import { createNamespacedHelpers } from "vuex";
import * as dayjs from "dayjs";
const { mapActions: mapActionsForFilm, mapState } =
  createNamespacedHelpers("filmStore");
export default {
  name: "ChooseSeat",
  components: { Banner },
  data() {
    return {
      selectedSeat: [],
      totalPrice: 0,
      transferValue: { filmId: "", cinemaId: "", roomId: "", filmPrice: "" },
      filmDetailInfo: {},
    };
  },
  methods: {
    ...mapActionsForFilm([
      "queryFilmByFilmIdAsync",
      "queryFilmByFilmTypeIdAsync",
    ]),

    //
    // ## seat
    // 1. 选座触发事件
    selectSeat(row, col) {
      // 不可选已售座位
      if (this.seatArr[row][col].isSold) {
        this.$message({
          type: "warning",
          message: "座位已售出",
        });
        return;
      }
      // 选座
      if (
        this.selectedSeat.length < 4 &&
        this.seatArr[row][col].isSelected == false
      ) {
        // console.log(this.seatArr[row][col + 1].isSelected);
        if (
          (!this.seatArr[row][col + 1]?.isSelected &&
            this.seatArr[row][col + 2]?.isSelected) ||
          (!this.seatArr[row][col - 1]?.isSelected &&
            this.seatArr[row][col - 2]?.isSelected)
        ) {
          this.$message({
            type: "warning",
            message: "不可间隔选票",
          });
          return;
        }
        this.seatArr[row][col].isSelected = true;
        this.seatArr[row][col].seatX = row;
        this.seatArr[row][col].seatY = col;
        // 这里要深拷贝或者其他方式处理下,要不监听不到数据变化
        this.seatArr = [...this.seatArr];
        // #TODO 动态获取电影价格
        this.totalPrice += this.transferValue.filmPrice - 0;
        this.getAllSelectedSeat();
      }
      // 取消选座
      else if (this.seatArr[row][col].isSelected == true) {
        if (
          this.seatArr[row][col - 1].isSelected &&
          this.seatArr[row][col + 1].isSelected
        ) {
          this.$message({
            type: "warning",
            message: "不可间隔选票",
          });
          return;
        }
        this.seatArr[row][col].isSelected = false;
        this.totalPrice -= this.transferValue.filmPrice - 0;
        this.getAllSelectedSeat();
      }
      // 超过4座限制
      else {
        this.$message({
          type: "warning",
          message: "最多只能选择4张票哦",
        });
      }
    },

    // 1.1 获取已选座位
    getAllSelectedSeat() {
      this.selectedSeat = [];
      for (let index = 0; index < this.seatArr.length; index++) {
        const element = this.seatArr[index];
        for (let index2 = 0; index2 < element.length; index2++) {
          const element2 = element[index2];
          if (element2.isSelected) {
            this.selectedSeat.push(element2);
          }
        }
      }
    },

    // 1.2
    showBackSoldSeat() {
      this.$http("http://localhost:3000/order/querySoldSeat", {
        params: {
          filmId: this.transferValue.filmId,
          cinemaId: this.transferValue.cinemaId,
          roomId: this.transferValue.roomId,
        },
      }).then((res) => {
        res.data.forEach((element) => {
          let roomSeatList = element.roomSeat.split("-");
          roomSeatList.map((item) => {
            if (item) {
              let tempArr = item.split(",");
              this.seatArr[tempArr[0]][tempArr[1]].isSold = true;
            }
          });
        });
      });
    },

    // ## film
    // 1.
    async queryFilmById() {
      let res = await this.queryFilmByFilmIdAsync(this.transferValue.filmId);
      this.filmDetailInfo = res[0];
    },

    // ## buy
    // 1.
    confirmChooseSeat() {
      let orderId = Date.now();
      let temp = {};
      temp.orderId = orderId;
      temp.totalPrice = this.totalPrice;
      // jump to alipay page
      this.$http(`http://localhost:3000/order/pay`, { params: temp }).then(
        (res) => {
          let orderInfoList = {};
          let loginUserInfo = localStorage.getItem("loginUserInfo");
          let userId;
          if (loginUserInfo) {
            userId = JSON.parse(loginUserInfo).userInfo._id;
          } else {
            this.$router.push("./login");
            return;
          }
          orderInfoList.userId = userId;
          orderInfoList.orderPrice = this.totalPrice;
          orderInfoList.orderStatus = "waitingPay";
          orderInfoList.orderId = orderId;
          orderInfoList.startTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
          orderInfoList.completeTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
          // #TODO
          orderInfoList.filmId = this.transferValue.filmId;
          orderInfoList.roomId = this.transferValue.roomId;
          orderInfoList.cinemaId = this.transferValue.cinemaId;
          orderInfoList.roomSeat = "";
          this.selectedSeat.forEach((item) => {
            orderInfoList.roomSeat += item.seatX + "," + item.seatY + "-";
          });

          // insert to order table
          this.$http(`http://localhost:3000/order/insertOrder`, {
            params: orderInfoList,
          }).then(() => {
            window.location.href = res.data;
          });
        }
      );
    },
  },
  created() {
    console.log(this.$route.query);
    this.transferValue.filmId = this.$route.query.filmId;
    this.transferValue.cinemaId = this.$route.query.cinemaId;
    this.transferValue.roomId = this.$route.query.roomId;
    this.transferValue.filmPrice = this.$route.query.filmPrice;
    // 服了,不能这样写,有问题
    // let temp = Array(10).fill(
    //   Array(10).fill({ isSelected: false, isSold: false, seatX: "", seatY: "" })
    // );
    // console.log(temp);

    // init arr
    this.seatArr = new Array(10).fill().map(() => {
      return new Array(10).fill().map(() => {
        return { isSelected: false, isSold: false, seatX: "", seatY: "" };
      });
    });
    // 模拟已售座位
    this.showBackSoldSeat();
    // this.seatArr[1][1].isSold = true;

    // 2. show back film info
    this.queryFilmById();
  },
};
</script>

<style scoped>
@import "../assets/css/chooseseat.css";
</style>
