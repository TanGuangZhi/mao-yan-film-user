<template>
  <div id="">
    <!-- 内容区域 -->
    <div class="content">
      <div class="content1">
        <div class="content1_1">
          <p>
            2022-03-12
            <span>已更新</span>
          </p>
          <!--          <p>榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。</p>-->
        </div>
        <dl v-if="cinemaList.length != 0">
          <dd v-for="(item, index) in cinemaList" :key="index" class="">
            <!--            <router-link :to="{path:'/FilmDetail',query:{_id:item._id}}">-->
            <div>
              <i :class="'No' + (index + 4)">{{ index + 1 }}</i>
            </div>
            <div class="cinema">
              <router-link
                :to="{ path: '/CinemaDetail', query: { roomId: item._id } }"
              >
                <img
                  :src="'http://localhost:3000/' + item['brand'][0].brandImg"
                  alt=""
                />
              </router-link>
            </div>
            <div>
              <div>
                <router-link
                  :to="{ path: '/CinemaDetail', query: { roomId: item._id } }"
                  :title="item.cinemaName"
                  class="font"
                >
                  {{ item["brand"][0].brandName }}
                </router-link>
                <p>影城名称:{{ item["brand"][0].brandName }}</p>
                <p>
                  影城地址：{{
                    item["cinema"][0].cinemaDistrict +
                    item["cinema"][0].cinemaAddress
                  }}
                </p>
                <p>联系方式：{{ item["cinema"][0].cinemaPhone }}</p>
              </div>
              <div>
                <!--                <i>9.</i>-->
                <!--                <i>4</i>-->
              </div>
            </div>
          </dd>
        </dl>
        <dl v-else>
          <el-empty description="对不起,没有相关电影"></el-empty>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import bus from "../../bus/bus.js";

export default {
  name: "cinema",
  data() {
    return {
      cinemaList: [],
    };
  },
  methods: {
    queryCinema() {
      bus.$on("queryCinema", (data) => {
        this.cinemaList = data.cinemaList;
      });
    },
  },
  created() {
    this.cinemaList = [];
    this.queryCinema();
  },
  activated() {
    this.cinemaList = [];
    this.queryCinema();
  },
};
</script>

<style scoped>
@import "../../assets/css/movie.css";
</style>
