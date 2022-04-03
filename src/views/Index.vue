<template>
  <div id="index">
    <!--     轮播图-->
    <el-carousel
      indicator-position="outside"
      height="550px"
      arrow="always"
      :interval="4000"
    >
      <el-carousel-item v-for="(banner, key) in bannerList" :key="key">
        <img :src="banner.imgSrc" />
      </el-carousel-item>
    </el-carousel>
    <!-- 首页-->
    <div class="main">
      <div class="main1">
        <article>
          <!-- 正在热映 -->
          <div class="zhuL1">
            <div class="zhuL1_1">
              <span class="zhuL1_1_1">
                正在热映（{{ filmPageInfo.total }}部）
              </span>
              <span class="zhuL1_1_2">
                <router-link
                  :to="{ path: '/movie', query: { filmName: 'HotFilmList' } }"
                >
                  全部
                </router-link>
                <span class="zhuL1_1_2_2"></span>
              </span>
            </div>
            <div class="zhuL1_2">
              <dl>
                <dd v-for="(item, index) in hotFilmList_8" :key="index">
                  <div class="zhuL1_2_1">
                    <router-link
                      :to="{ path: '/FilmDetail', query: { filmId: item._id } }"
                      class="link"
                    >
                      <img
                        :src="'http://localhost:3000/' + item.filmImg"
                        alt=""
                      />
                      <div>
                        <span>{{ item.filmName }}</span>
                        <span>
                          <!-- <i>{{ item.comment[0].filmScore }}</i>
                          <i>0</i> -->
                        </span>
                      </div>
                      <i class="DIMAX3"></i>
                    </router-link>
                  </div>
                  <div class="zhuL1_2_2">
                    <router-link
                      :to="{ path: '/FilmDetail', query: { filmId: item._id } }"
                    >
                      购票
                    </router-link>
                  </div>
                </dd>
              </dl>
            </div>
          </div>

          <!--即将上映 -->
          <div class="zhuL2">
            <div class="zhuL2_1">
              <span class="zhuL2_1_1">
                即将上映 ({{ futureFilmListLength }}部)
              </span>
              <span class="zhuL2_1_2">
                <router-link
                  :to="{
                    path: '/movie',
                    query: { filmName: 'FutureFilmList' },
                  }"
                >
                  全部
                </router-link>
                <span class="zhuL2_1_2_2"></span>
              </span>
            </div>
            <dl>
              <dd v-for="film in futureFilmList_8">
                <div class="zhuL2_2">
                  <router-link
                    :to="{ path: '/FilmDetail', query: { filmId: film._id } }"
                  >
                    <div class="zhuL2_2_1">
                      <img
                        :src="'http://localhost:3000/' + film.filmImg"
                        style="width: 100%"
                      />
                      <div>
                        <span>{{ film.filmName }}</span>
                      </div>
                    </div>
                  </router-link>
                  <div class="zhuL2_2_2">
                    <span>{{ film.filmExpect }}</span>
                    人想看
                  </div>
                  <div class="zhuL2_2_3">
                    <a>预告片</a>
                    <router-link
                      :to="{ path: '/FilmDetail', query: { filmId: film._id } }"
                    >
                      预售
                    </router-link>
                  </div>
                </div>
                <div class="zhuL2_3">{{ film.startDate }}</div>
              </dd>
            </dl>
          </div>
          <div class="zhuL3"></div>

          <!--经典影片 -->
          <div class="zhuL1">
            <div class="zhuL1_1">
              <span class="zhuL1_1_3">
                经典影片（{{ classicPageInfo.total }}部）
              </span>
              <span class="zhuL1_1_2">
                <router-link
                  :to="{
                    path: '/movie',
                    query: { filmName: 'ClassicFilmList' },
                  }"
                >
                  全部
                </router-link>
                <span class="zhuL1_1_2_2"></span>
              </span>
            </div>
            <div class="zhuL1_2">
              <dl>
                <dd v-for="(item, index) in classicFilmList_8" :key="index">
                  <div class="zhuL1_2_1">
                    <router-link
                      :to="{ path: '/FilmDetail', query: { filmId: item._id } }"
                      class="link"
                    >
                      <img
                        :src="'http://localhost:3000/' + item.filmImg"
                        alt=""
                      />
                      <div>
                        <span>{{ item.filmName }}</span>
                        <span>
                          <!-- <i>{{ item.comment[0].filmScore }}</i>
                          <i>0</i> -->
                        </span>
                      </div>
                      <i class="DIMAX3"></i>
                    </router-link>
                  </div>
                  <div class="zhuL1_2_2">
                    <router-link
                      :to="{ path: '/FilmDetail', query: { filmId: item._id } }"
                    >
                      购票
                    </router-link>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <div class="zhuL3"></div>
        </article>

        <aside>
          <!--今日票房排行-->
          <div class="zhuR1">
            <div class="zhuR1_1">
              <span>今日票房</span>
            </div>
            <el-empty
              v-if="todayBoxOfficeList.length == 0"
              description="正在等待首份票房诞生"
            ></el-empty>
            <div class="zhuR1_2">
              <ul v-for="(item, index) in todayBoxOfficeList" :key="index">
                <li @click="jumpToDetails(item.filmIdToDetail[0]._id)">
                  <div>
                    <img
                      :src="
                        'http://localhost:3000/' +
                        item.filmIdToDetail[0].filmImg
                      "
                      alt=""
                      height="80px"
                    />
                    <i></i>
                  </div>
                  <div>
                    <span class="zhuR1_2_h2">
                      {{ index + 1 }}. {{ item.filmIdToDetail[0].filmName }}
                    </span>
                    <p>
                      <span>{{ item.sum }}</span>
                      万
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <!--今日大盘-->
          <div class="zhuR2">
            <div class="zhuR21">
              <span>今日大盘</span>
            </div>
            <div class="zhuR22">
              <p>
                <span class="zhuR22_1">
                  <span class="zhuR22_12">
                    {{ todayBoxMarketAmount }}
                  </span>
                  万
                </span>
                <span class="zhuR22_11">
                  <a href="#">查看更多</a>
                  <i></i>
                </span>
              </p>
              <p>
                <span class="zhuR22_21">北京时间 {{ this.timeNow }}</span>
                <span class="zhuR22_22">猫眼专业版实时票房数据</span>
              </p>
            </div>
          </div>

          <!--最受期待排行-->
          <div class="zhuR3">
            <div class="zhuR3_1">
              <span class="zhuR3_1_1">最受期待</span>
              <span class="zhuR3_1_2">
                <a href="#">查看完整榜单</a>
                <i></i>
              </span>
            </div>

            <div class="zhuR3_2">
              <ul>
                <li class="zhuR3_21">
                  <router-link
                    v-for="(item, index) in filmExpectList"
                    v-if="index == 0"
                    :to="{ path: '/FilmDetail', query: { filmId: item._id } }"
                  >
                    <div class="zhuR3_21_1">
                      <i></i>
                      <img
                        v-for="(item, index) in filmExpectList"
                        v-if="index == 0"
                        :src="'http://localhost:3000/' + item.filmImg"
                        alt=""
                        style="height: 195px"
                      />
                    </div>
                    <div class="zhuR3_21_2">
                      <div>
                        <span
                          v-for="(item, index) in filmExpectList"
                          v-if="index == 0"
                          class="zhuR3_21_21"
                        >
                          {{ item.filmName }}
                        </span>
                        <p>上映时间：{{ filmExpectList[0].startDate }}</p>
                        <p>
                          <span
                            v-for="(item, index) in filmExpectList"
                            v-if="index == 0"
                          >
                            {{ item.filmExpect }}
                          </span>
                          人想看
                        </p>
                      </div>
                    </div>
                  </router-link>
                </li>

                <li
                  class="zhuR3_22"
                  v-for="(item, index) in filmExpectList"
                  v-if="index >= 1 && index <= 2"
                >
                  <router-link
                    :to="{ path: '/FilmDetail', query: { filmId: item._id } }"
                  >
                    <div class="zhuR3_22_1">
                      <img
                        :src="'http://localhost:3000/' + item.filmImg"
                        alt=""
                        style="height: 125px; width: 150px"
                      />
                      <i>2</i>
                    </div>
                    <div class="zhuR3_22_2">
                      <p>{{ item.filmName }}</p>
                      <p>
                        <span>{{ item.filmExpect }}</span>
                        人想看
                      </p>
                    </div>
                  </router-link>
                </li>

                <li
                  class="zhuR3_23"
                  v-for="(film, index) in downFilmExpectList"
                  :key="index"
                >
                  <router-link
                    :to="{ path: '/FilmDetail', query: { filmId: film._id } }"
                  >
                    <span class="zhuR3_2_2">
                      <i>{{ index - 0 + 4 }}</i>
                      <span class="zhuR3_2_2_1">{{ film.filmName }}</span>
                    </span>

                    <span class="zhuR3_2_3">
                      {{ film.filmExpect }}
                      <span class="zhuR3_2_3_1">人想看</span>
                    </span>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <!--查看完整榜单-->
          <!-- <div class="zhuR4">
            <div class="zhuR4_1">
              <div class="zhuR4_1">
                <span class="zhuR4_1_1">TOP 100</span>
                <span class="zhuR4_1_2">
                  <a href="#">查看完整榜单</a>
                  <i></i>
                </span>
              </div>
            </div>
            <div class="zhuR4_2">
              <ul>
                <li>
                  <div>
                    <img src="../../public/images/film/r6.jpg" alt="" />
                    <i></i>
                  </div>
                  <div>
                    <span class="zhuR4_2_h2">霸王别姬</span>
                    <p>
                      <span>9.6</span>
                      分
                    </p>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <span class="zhuR4_2_2">
                      <i class="qian23">2</i>
                      <span class="zhuR4_2_2_1">肖申克的救赎</span>
                    </span>
                    <span class="zhuR4_2_3">
                      9.5
                      <span class="zhuR4_2_3_1">分</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="zhuR4_2_2">
                      <i class="qian23">3</i>
                      <span class="zhuR4_2_2_1">罗马假日</span>
                    </span>
                    <span class="zhuR4_2_3">
                      9.1
                      <span class="zhuR4_2_3_1">分</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="zhuR4_2_2">
                      <i>4</i>
                      <span class="zhuR4_2_2_1">这个杀手不太冷</span>
                    </span>
                    <span class="zhuR4_2_3">
                      9.5
                      <span class="zhuR4_2_3_1">分</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="zhuR4_2_2">
                      <i>5</i>
                      <span class="zhuR4_2_2_1">教父</span>
                    </span>
                    <span class="zhuR4_2_3">
                      9.3
                      <span class="zhuR4_2_3_1">分</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="zhuR4_2_2">
                      <i>6</i>
                      <span class="zhuR4_2_2_1">泰坦尼克号</span>
                    </span>
                    <span class="zhuR4_2_3">
                      9.5
                      <span class="zhuR4_2_3_1">分</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="zhuR4_2_2">
                      <i>7</i>
                      <span class="zhuR4_2_2_1">唐伯虎点秋香</span>
                    </span>
                    <span class="zhuR4_2_3">
                      9.2
                      <span class="zhuR4_2_3_1">分</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="zhuR4_2_2">
                      <i>8</i>
                      <span class="zhuR4_2_2_1">千与千寻</span>
                    </span>
                    <span class="zhuR4_2_3">
                      9.3
                      <span class="zhuR4_2_3_1">分</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="zhuR4_2_2">
                      <i>9</i>
                      <span class="zhuR4_2_2_1">魂断蓝桥</span>
                    </span>
                    <span class="zhuR4_2_3">
                      9.2
                      <span class="zhuR4_2_3_1">分</span>
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span class="zhuR4_2_2">
                      <i>10</i>
                      <span class="zhuR4_2_2_1">乱世佳人</span>
                    </span>
                    <span class="zhuR4_2_3">
                      9.1
                      <span class="zhuR4_2_3_1">分</span>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div> -->
        </aside>
      </div>
    </div>
    <Footer />
    <!--配置路由出口-->
    <router-view />
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

import Footer from "../components/Footer";

import * as dayjs from "dayjs";
import mixins from "../mixins/queryManyFilm.js";

const { mapState, mapActions: mapActionsForFilm } =
  createNamespacedHelpers("filmStore");
const { mapState: mapStateForOrder, mapActions: mapActionsForOrder } =
  createNamespacedHelpers("orderStore");

export default {
  mixins: [mixins],
  name: "Index",
  components: {
    Footer,
  },
  data() {
    return {
      bannerList: [
        { imgSrc: require("../../public/images/bn/bn1.jpg") },
        { imgSrc: require("../../public/images/bn/bn2.jpg") },
        { imgSrc: require("../../public/images/bn/bn3.jpg") },
        { imgSrc: require("../../public/images/bn/bn4.jpg") },
        { imgSrc: require("../../public/images/bn/bn5.jpg") },
      ],

      filmExpectList: [],
      downFilmExpectList: [],

      todayBoxOfficeList: [],
      todayBoxMarketAmount: [],
      timeNow: "",
      userInfo: {},
      futureFilmListLength: 0,
      hotFilmList_8: [],
      futureFilmList_8: [],
      classicFilmList_8: [],
    };
  },

  methods: {
    ...mapActionsForFilm([
      "queryFIlmExpectAsync",
      "queryFutureFilmAsync",
      "queryManyFilmAsync",
    ]),
    ...mapActionsForOrder([
      "queryTodayBoxOfficeAsync",
      "queryTodayMarketAsync",
    ]),
    async queryFilmExpect() {
      this.filmExpectList = await this.queryFIlmExpectAsync();
      this.downFilmExpectList = this.filmExpectList.filter((item, index) => {
        return index >= 3;
      });
    },

    async init() {
      // ## today box office
      // 1. 今日票房
      this.todayBoxOfficeList = await this.queryTodayBoxOfficeAsync();

      // 2. 今日大盘
      let data = await this.queryTodayMarketAsync();
      this.todayBoxMarketAmount = data[0]?.sum ?? 0;

      // 2.1 动态更新时间(每秒更新一次)
      this.timeNow = dayjs().format("YYYY-MM-DD HH:mm");
      setInterval(() => {
        this.timeNow = dayjs().add(1, "second").format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    },
    //正在热映
    async queryHotFilm() {
      await this.queryManyFilmAsync({ pageSize: 8, status: 1 });
      this.hotFilmList_8 = this.filmPageInfo.filmList.slice(0, 8);
    },
    //即将上映
    async queryFutureFilm() {
      await this.queryFutureFilmAsync();
      this.futureFilmListLength = this.futureFilmList.length;
      this.futureFilmList_8 = this.futureFilmList.slice(0, 8);
    },
    //经典影片
    async queryClassicFilm() {
      await this.queryManyFilmAsync({ pageSize: 8, status: 3 });
      this.classicFilmList_8 = this.classicPageInfo.filmList.slice(0, 8);
    },

    jumpToDetails(_id) {
      console.log(111);
      this.$router.push({ path: "/FilmDetail", query: { filmId: _id } });
    },
  },
  created() {
    this.queryFilmExpect();
    this.init();
    this.queryFutureFilm();
    this.queryHotFilm();
    this.queryFutureFilm();
    this.queryClassicFilm();
  },

  computed: {
    ...mapState(["filmPageInfo", "futureFilmList", "classicPageInfo"]),
  },
};
</script>

<style scoped>
@import "../assets/css/index.css";
</style>
