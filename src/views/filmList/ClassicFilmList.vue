<template>
  <div id="classicFilm">
    <div class="container">
      <div class="movies-channel">
        <div class="tags-panel">
          <ul class="tags-lines">
            <li class="tags-line">
              <div class="tags-title">类型 :</div>
              <ul class="tags" id="movieTypeId">
                <li
                  @click="searchFilmType()"
                  :class="searchInFo.filmType ? '' : 'active'"
                >
                  <a href="javascript:void(0);" style="cursor: pointer">全部</a>
                </li>
                <li
                  v-for="(type, index) in filmType"
                  :key="index"
                  @click="searchFilmType(type._id)"
                  :class="searchInFo.filmType == type._id ? 'active' : ''"
                >
                  <a href="javascript:void(0);">{{ type.filmType }}</a>
                </li>
              </ul>
            </li>
            <li class="tags-line tags-line-border">
              <div class="tags-title">区域 :</div>
              <ul class="tags" id="movieAreaId">
                <li
                  @click="searchFilmArea()"
                  :class="searchInFo.filmArea ? '' : 'active'"
                >
                  <a href="javascript:void(0);" style="cursor: pointer">全部</a>
                </li>
                <li
                  v-for="(area, index) in filmArea"
                  :key="index"
                  @click="searchFilmArea(area)"
                  :class="searchInFo.filmArea == area ? 'active' : ''"
                >
                  <a href="javascript:void(0);">{{ area }}</a>
                </li>
              </ul>
            </li>
            <li class="tags-line tags-line-border">
              <div class="tags-title">语言 :</div>
              <ul class="tags" id="movieTimeId">
                <li
                  @click="searchFilmLanguage()"
                  :class="searchInFo.language ? '' : 'active'"
                >
                  <a href="javascript:void(0);" style="cursor: pointer">全部</a>
                </li>
                <li
                  v-for="(language, index) in filmLanguage"
                  :key="index"
                  @click="searchFilmLanguage(language)"
                  :class="searchInFo.language == language ? 'active' : ''"
                >
                  <a href="javascript:void(0);">{{ language }}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="movies-panel">
          <!-- 排序-->
          <div class="movies-sorter">
            <div class="cat-sorter">
              <el-radio-group v-model="filmSort.sortType" @change="sortFilm">
                <el-radio label="-1">按热度排序</el-radio>
                <el-radio label="-2">按时间排序</el-radio>
              </el-radio-group>
            </div>
          </div>
          <!-- 电影列表-->
          <div class="movies-list">
            <dl
              class="movie-list"
              v-if="getFilmListLength(classicPageInfo.filmList)"
              id="movieListId"
            >
              <dd
                v-for="(film, index) in classicPageInfo.filmList"
                :key="index"
              >
                <div class="movie-item film-channel">
                  <router-link
                    :to="{ path: '/filmDetail', query: { filmId: film._id } }"
                    target="_blank"
                  >
                    <div class="movie-poster">
                      <img :src="'http://localhost:3000/' + film.filmImg" />
                      <!--                      <el-image-->
                      <!--                          style="width: 100px; height: 100px"-->
                      <!--                          :src="'http://localhost:3000/'+film.filmImg"-->
                      <!--                          :preview-src-list="'http://localhost:3000/'+film.filmImg">-->
                      <!--                      </el-image>-->
                    </div>
                  </router-link>
                  <div class="channel-action channel-action-sale">
                    <a>购票</a>
                  </div>
                  <div class="movie-ver"></div>
                </div>
                <div class="channel-detail movie-item-title">
                  <router-link to="/FilmDetail" target="_blank">
                    {{ film.filmName }}
                  </router-link>
                </div>
                <div class="channel-detail channel-detail-orange">
                  <i>{{ getFilmScore(film.comment[0]) }}</i>
                  <i>0</i>
                </div>
              </dd>
            </dl>
            <dl v-else>
              <el-empty description="对不起,没有相关电影"></el-empty>
            </dl>
          </div>
          <!-- 分页-->
          <div class="movies-pager">
            <el-pagination
              @size-change="changePageSize"
              @current-change="changeCurrentPage"
              :current-page="pageData.currentPage"
              :page-sizes="pageSizeList"
              :page-size="pageData.pageSize"
              layout="prev, pager, next, jumper"
              :total="classicPageInfo.total"
            ></el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import manyFilmMixins from "../../mixins/queryManyFilm";
import { createNamespacedHelpers } from "vuex";
const { mapActions, mapState } = createNamespacedHelpers("filmStore");
export default {
  name: "ClassicFilmList",
  mixins: [manyFilmMixins],
  data() {
    return {
      filmSort: { sortType: "-1" },
      searchInFo: {},
      filmSearch: {},
      status: { status: 3 },
      filmType: [
        {
          _id: "1",
          filmType: "爱情",
        },
        {
          _id: "2",
          filmType: "喜剧",
        },
        {
          _id: "3",
          filmType: "动画",
        },
        {
          _id: "4",
          filmType: "剧情",
        },
        {
          _id: "5",
          filmType: "惊悚",
        },
        {
          _id: "6",
          filmType: "科幻",
        },
        {
          _id: "7",
          filmType: "动作",
        },
        {
          _id: "8",
          filmType: "悬疑",
        },
        {
          _id: "9",
          filmType: "犯罪",
        },
        {
          _id: "10",
          filmType: "冒险",
        },
        {
          _id: "11",
          filmType: "战争",
        },
        {
          _id: "12",
          filmType: "奇幻",
        },
        {
          _id: "13",
          filmType: "运动",
        },
        {
          _id: "14",
          filmType: "武侠",
        },
        {
          _id: "15",
          filmType: "历史",
        },
      ],
      filmArea: [
        "大陆",
        "美国",
        "韩国",
        "日本",
        "泰国",
        "印度",
        "法国",
        "英国",
        "俄罗斯",
        "西班牙",
        "德国",
        "意大利",
        "澳大利亚",
        "伊朗",
        "其他",
      ],
      filmLanguage: ["粤语", "韩语", "英文", "台语"],
    };
  },
  methods: {
    ...mapActions(["queryManyFilmAsync"]),
    queryManyFilm() {
      this.queryManyFilmAsync({
        ...this.pageData,
        ...this.searchInFo,
        ...this.status,
        ...this.filmSort,
      });
    },
    searchFilmType(val) {
      this.searchInFo.filmType = val;
      this.queryManyFilm();
    },
    searchFilmLanguage(val) {
      this.searchInFo.language = val;
      this.queryManyFilm();
    },
    searchFilmArea(val) {
      this.searchInFo.filmArea = val;
      this.queryManyFilm();
    },
    sortFilm(val) {
      this.filmSort.sortType = val;
      this.queryManyFilm();
    },
  },
  created() {
    this.queryManyFilm();
  },
  computed: {
    ...mapState(["classicPageInfo"]),
  },
};
</script>

<style scoped>
.active {
  background: red;
}
</style>
