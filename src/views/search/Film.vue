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
        <dl v-if="filmList.length != 0">
          <dd v-for="(item, index) in filmList" :key="index">
            <!--            <router-link :to="{path:'/FilmDetail',query:{_id:item._id}}">-->
            <div>
              <i :class="'No' + (index + 4)">{{ index + 1 }}</i>
            </div>
            <div class="img">
              <router-link
                :to="{ path: '/FilmDetail', query: { filmId: item._id } }"
              >
                <img :src="'http://localhost:3000/' + item.filmImg" alt="" />
              </router-link>
            </div>
            <div>
              <div>
                <router-link
                  :to="{ path: '/FilmDetail', query: { filmId: item._id } }"
                  :title="item.filmName"
                  class="font"
                >
                  {{ item.filmName }}
                </router-link>
                <p>导演:{{ item.director }}</p>
                <p>地区:{{ item.filmArea }}</p>
                <p>主演：{{ actor(item.actor[0]) }}</p>
                <p class="tips">简介：{{ item.details | ellipsis }}</p>
                <p>上映时间：{{ item.startDate }}</p>
              </div>
              <div class="score">
                <!-- <i>{{ test(item.comment[0]) }}</i>
                <p></p>
                <i>观影:{{ item.viewFilmCount }}</i> -->
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
import bus from "../../bus/bus";

export default {
  name: "film",
  data() {
    return {
      filmList: [],
    };
  },
  methods: {
    test(val) {
      return val?.filmScore ?? "暂无评分";
    },
    actor(val) {
      return val?.realName ?? "不详";
    },
  },
  filters: {
    ellipsis(value) {
      if (value.length > 100) {
        return value.slice(0, 100) + "...";
      }
      return value;
    },
    score(value) {
      if (value == undefined) {
        return 暂无评分;
      }
      return value;
    },
  },
  created() {
    bus.$on("queryFilm", (data) => {
      this.filmList = data.filmList;
    });
  },
  activated() {
    bus.$on("queryFilm", (data) => {
      this.filmList = data.filmList;
    });
  },
};
</script>

<style scoped>
@import "../../assets/css/movie.css";
</style>
