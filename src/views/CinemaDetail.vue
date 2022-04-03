<template>
  <div id="cinemaDetail">
    <div class="banner cinema-banner">
      <div class="wrapper clearfix">
        <div class="cinema-left">
          <div class="avatar-shadow">
            <img
              class="avatar"
              v-if="cinema.brand"
              :src="'http://localhost:3000/' + cinema.brand[0].brandImg"
            />
          </div>
        </div>

        <div class="cinema-main clearfix">
          <div class="cinema-brief-container">
            <h1
              class="name text-ellipsis"
              style="color: white"
              v-if="cinema.brand"
            >
              {{ cinema.brand[0].brandName }}
            </h1>
            <div class="address text-ellipsis">
              {{ cinema.cinemaDistrict + cinema.cinemaAddress }}
            </div>
            <!--            -->
            <div class="telphone">电话：{{ cinema.cinemaPhone }}</div>

            <div class="features-group">
              <div class="group-title">影院服务</div>

              <div class="feature">
                <span class="tag">改签</span>
                <p
                  class="desc text-ellipsis"
                  title="未取票用户放映前60分钟可改签"
                >
                  未取票用户放映前60分钟可改签
                </p>
              </div>
              <div class="feature">
                <span class="tag">儿童优惠</span>
                <p
                  class="desc text-ellipsis"
                  title="1.3米以下儿童可免费无座观影（VIP厅、IMAX厅、4DX厅除外），一名成人限带一名儿童（仅限1.3米以下，观看3D均有3D眼镜）。"
                >
                  1.3米以下儿童可免费无座观影（VIP厅、IMAX厅、4DX厅除外），一名成人限带一名儿童（仅限1.3米以下，观看3D均有3D眼镜）。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="crumbs-nav-container">
        <span v-if="cinema.brand" style="font-size: 25px">
          {{ cinema.brand[0].brandName }}
        </span>
      </div>

      <div class="show-data">
        <span>观影时间　:</span>
        <span
          :class="{ 'date-item': true, active: timeIndex == index }"
          v-for="(time, index) in timeList"
          @click="changeTime(time, index)"
          style="padding-left: 40px"
        >
          <a
            href="javascript:void(0) "
            v-if="timeIndex == index"
            style="background-color: tomato; border-radius: 20%; width: 80px"
          >
            {{ time.month }}月{{ time.day }}日
          </a>
          <a href="javascript:void (0)" v-else style="">
            {{ time.month }}月{{ time.day }}日
          </a>
        </span>
      </div>

      <div class="movie-list-container" style="overflow-x: scroll">
        <div class="movie-list">
          <div
            class="movie"
            style="cursor: pointer"
            v-for="(film, index) in cinema.film"
            @click="clickFilm(film._id, cinema._id)"
            :key="index"
          >
            <img :src="'http://localhost:3000/' + film.filmImg" />
            <!--            <span :class="{'pointer':pointer==index}"></span>-->
            <!--            <img src="../../public/images/film/6.jpg"/>-->
            <!--            <img src="../../public/images/film/3.jpg"/>-->
            <!--            <img src="../../public/images/film/9.jpg"/>-->
          </div>
          <span class="pointer"></span>
        </div>
      </div>

      <div class="show-list active">
        <div class="movie-info">
          <!--                <div>-->
          <!--                    <h2 class="movie-name">我和我的家乡</h2>-->
          <!--                    <span class="score sc">9</span>-->
          <!--                </div>-->

          <!--                <div class="movie-desc">-->
          <!--                    <div>-->
          <!--                        <span class="key">时长 :</span>-->
          <!--                        <span class="value">120分钟</span>-->
          <!--                    </div>-->
          <!--                    <div>-->
          <!--                        <span class="key">类型 :</span>-->
          <!--                        <span class="value">-->
          <!--                          <a class="text-link" href="javascript:void(0)" > 奇幻 </a>-->
          <!--                      </span>-->
          <!--                    </div>-->
          <!--                    <div>-->
          <!--                        <span class="key">主演 :</span>-->
          <!--                        <span> 赵又廷</span>-->
          <!--                        <span>邓伦</span>-->
          <!--                        <span>王子文</span>-->
          <!--                    </div>-->
          <!--                </div>-->
        </div>

        <div class="show-date">
          <!--                <span>观影时间 :</span>-->
          <!--                    <span class="date-item active">-->
          <!--                        <a href="javascript:void(0)"style="text-decoration: none;color: white">今天 01-20</a>-->
          <!--                    </span>-->
          <!--                    <span class="date-item">-->
          <!--                        <a href="javascript:void(0)" style="text-decoration: none;color:black">明天 01-21</a>-->
          <!--                    </span>-->
        </div>

        <div class="plist-container active">
          <table class="plist">
            <thead>
              <tr>
                <th>放映时间</th>
                <th>语言版本</th>
                <th>放映厅</th>
                <th>售价（元）</th>
                <th>选座购票</th>
              </tr>
            </thead>
            <tbody id="showTab">
              <tr>
                <!--               v-if="seatInfo.length>0"-->
                <td>
                  <span class="begin-time">{{ sessionDetails.startTime }}</span>
                  <br />
                  <span class="end-time">{{ sessionDetails.endTime }}散场</span>
                </td>
                <td>
                  <span class="lang">{{ filmDetails.language }}</span>
                </td>
                <td>
                  <span class="hall">{{ roomDetails.roomName }}</span>
                </td>
                <td>
                  <span class="sell-price">{{ price }}</span>
                </td>
                <td>
                  <router-link
                    :to="
                      '/chooseseat?roomId=' +
                      roomDetails._id +
                      '&filmId=' +
                      filmDetails._id +
                      '&sessionId=' +
                      sessionDetails._id +
                      '&filmPrice=' +
                      price +
                      '&cinemaId=' +
                      obj.cinemaId +
                      '&roomName=' +
                      roomDetails.roomName +
                      '&brand=' +
                      cinema.brand[0].brandName
                    "
                    class="buy-btn normal"
                  >
                    选座购票
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapState, mapActions } = createNamespacedHelpers("cinemaStore");
export default {
  name: "CinemaDetail",
  data() {
    return {
      cinema: { cinemaRoom: [{ roomPrice: "" }], brand: "" },
      filmInfo: {},
      seatInfo: [],
      sessionInfo: [],
      pointer: 0,
      timeIndex: 0,
      timeList: [],
      payDay: {},
      //
      obj: {},
      sessionDetails: [],
      filmDetails: [],
      roomDetails: [],
    };
  },
  methods: {
    ...mapActions([
      "queryCinemaByIdAsync",
      "queryRoomByIdAsync",
      "querySessionAsync",
    ]),
    queryCinemaDetail(_id) {
      this.queryCinemaByIdAsync(_id).then((res) => {
        //console.log("res",res)
        this.cinema = res[0];
        // console.log("this.cinema",this.cinema);
        this.filmInfo = res[0].film[0];
        // console.log("this.filmInfo",this.filmInfo)
        this.sessionInfo = res[0].session[0];
        //   console.log(this.sessionInfo)
        //this.queryRoomById()
      });
    },
    clickFilm(filmId, cinemaId) {
      (this.obj.filmId = filmId), (this.obj.cinemaId = cinemaId);
      this.querySession(this.obj);
      //this.filmInfo=this.cinema.film[index];
      //this.sessionInfo=this.cinema.session[index];
      // this.queryRoomById();
    },
    async querySession(obj) {
      let res = await this.querySessionAsync(obj);
      this.sessionDetails = res[0];
      console.log("this.sessionDetails", this.sessionDetails);
      this.filmDetails = this.sessionDetails.filmToDetail[0];
      console.log("this.filmDetails", this.filmDetails);
      this.roomDetails = this.sessionDetails.roomId2Detail[0];
      console.log("this.roomDetails", this.roomDetails);
    },
    changeTime(time, index) {
      this.timeIndex = index;
      this.payDay = time;
    },
    getTimeList() {
      let timeList = [];
      for (let i = 0; i < 7; i++) {
        let today = new Date();
        today.setDate(today.getDate() + i);
        timeList.push({ month: today.getMonth() + 1, day: today.getDay() + 1 });
      }
      this.timeList = timeList;
    },
    /*  queryRoomById(){
    let filmId=this.filmInfo._id;
    //console.log("filmId",filmId)
    let sessionId=this.sessionInfo._id;
    let roomId=this.sessionInfo.roomId;
    this.queryRoomByIdAsync({filmId,sessionId,roomId}).then(res=>{
      this.seatInfo=res.data;
    });
  },*/
  },
  created() {
    this.obj.cinemaId = this.$route.query.cinemaId;
    this.obj.filmId = this.$route.query.filmId;
    //console.log("_id",_id)
    this.queryCinemaDetail(this.obj.cinemaId);
    this.getTimeList();
    this.querySession(this.obj);
  },
  computed: {
    price() {
      return (
        Number(this.roomDetails.roomPrice) *
        Number(this.sessionDetails.discount)
      ).toFixed(2);
    },
  },
};
</script>

<style scoped>
@import "../assets/css/cinemaDetail.css";
</style>
