<template>
  <div class="content">
    <div class="content1">
      <div class="content1_1">
        <p>
          2022-03-12
          <span>已更新</span>
        </p>
        <p>
          榜单规则：将昨日国内热映的影片，按照评分从高到低排列取前10名，每天上午10点更新。相关数据来源于“猫眼专业版”及“猫眼电影库”。
        </p>
      </div>
      <dl>
        <dd v-for="(item, index) in filmPageInfo.filmList" :key="index">
          <div>
            <i :class="'No' + (index + 1)">{{ index + 1 }}</i>
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
            <div>
              <i>{{ test(item.comment[0]) }}</i>
              <p></p>
              <i>观影:{{ item.viewFilmCount }}</i>
            </div>
          </div>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("filmStore");
export default {
  name: "Expect",
  methods: {
    ...mapActions(["queryManyFilmAsync"]),
    //正在热映
    async queryFilm() {
      await this.queryManyFilmAsync({
        status: 1,
        currentPage: 1,
        pageSize: 10,
        filmScore: -1,
      });
    },
    test(val) {
      return val?.filmScore ?? "暂无评分";
    },
    actor(val) {
      return val?.realName ?? "不详";
    },
  },
  created() {
    this.queryFilm();
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
  computed: {
    ...mapState(["filmPageInfo"]),
  },
  activated() {
    this.queryFilm();
  },
};
</script>

<style scoped></style>
