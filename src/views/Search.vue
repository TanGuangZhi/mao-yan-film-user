<template>
  <div id="movie">
    <!--    大类-->
    <div class="subnav">
      <ul class="navbar">
        <li>
          <a
            :class="jump == 'Film' ? 'active' : ''"
            href="javascript:void(0);"
            @click="changeFilmType('Film')"
          >
            影视({{ filmLength }})
          </a>
        </li>
        <li>
          <a
            :class="jump == 'Cinema' ? 'active' : ''"
            href="javascript:void(0)"
            @click="changeFilmType('Cinema')"
          >
            影院({{ cinemaLength }})
          </a>
        </li>
      </ul>
    </div>
    <!--    电影显示区-->
    <keep-alive>
      <component :is="jump"></component>
    </keep-alive>
  </div>
</template>

<script>
import api from "../apis/indexApi.js";
import bus from "../bus/bus.js";
import Film from "./search/Film.vue";
import Cinema from "./search/Cinema.vue";
import { createNamespacedHelpers } from "vuex";
const { mapState: ms1, mapActions: ma1 } = createNamespacedHelpers("filmStore");
const { mapActions: ma2 } = createNamespacedHelpers("cinemaStore");
export default {
  name: "Movie",
  components: {
    Film,
    Cinema,
  },
  data() {
    return {
      searchForm: "",
      jump: "Film",
      film: [],
      filmLength: 0,
      cinema: [],
      cinemaLength: 0,
    };
  },
  methods: {
    ...ma1(["queryManyFilmAsync"]),
    ...ma2(["queryAllCinemaAsync"]),
    //动态组件
    changeFilmType(val) {
      this.jump = val;
      //将值传给cinema
      setTimeout(() => {
        bus.$emit("queryCinema", this.cinema);
      }, 20);
    },

    //查询电影
    async queryFilm(searchForm) {
      await this.queryManyFilmAsync({ searchForm });
      this.film = this.filmPageInfo;
      this.filmLength = this.film.filmList.length;
      setTimeout(() => {
        bus.$emit("queryFilm", this.film);
      }, 20);
    },

    async queryCinema(searchForm) {
      this.cinema = await this.queryAllCinemaAsync({ searchForm });
      if (this.cinema.cinemaList.length > 0) {
        this.cinemaLength = this.cinema.cinemaList.length;
        setTimeout(() => {
          bus.$emit("queryCinema", this.cinema);
        }, 20);
      } else {
        this.cinemaLength = 0;
      }
    },
  },
  created() {
    bus.$on("searchBtn", (data) => {
      this.queryFilm(data);
      this.queryCinema(data);
    });
  },
  deactivated() {
    setTimeout(() => {
      bus.$off("searchBtn");
    }, 1);
  },
  activated() {},
  computed: {
    ...ms1(["filmPageInfo"]),
  },
};
</script>

<style scoped>
@import "../assets/css/movie.css";
</style>
