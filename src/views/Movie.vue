<!--
 * @Author: TanGuangZhi
 * @Date: 2022-03-11 15:27:37 Fri
 * @LastEditTime: 2022-03-11 19:18:20 Fri
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
-->
<template>
  <div id="movie">
    <!--    大类-->
    <div class="subnav">
      <ul class="navbar">
        <li>
          <a
            :class="filmName == 'HotFilmList' ? 'active' : ''"
            href="javascript:void(0);"
            @click="changeFilmType('HotFilmList')"
          >
            正在热映
          </a>
        </li>
        <li>
          <a
            :class="filmName == 'FutureFilmList' ? 'active' : ''"
            href="javascript:void(0)"
            @click="changeFilmType('FutureFilmList')"
          >
            即将上映
          </a>
        </li>
        <li>
          <a
            :class="filmName == 'ClassicFilmList' ? 'active' : ''"
            href="javascript:void(0)"
            @click="changeFilmType('ClassicFilmList')"
          >
            经典影片
          </a>
        </li>
      </ul>
    </div>
    <!--    电影显示区-->
    <transition name="fade" mode="out-in" appear>
      <component :is="filmName"></component>
    </transition>
  </div>
</template>

<script>
import HotFilmList from "@/views/filmList/HotFilm";
import FutureFilmList from "@/views/filmList/FutureFilmList";
import ClassicFilmList from "@/views/filmList/ClassicFilmList";
export default {
  name: "Movie",
  components: {
    HotFilmList,
    FutureFilmList,
    ClassicFilmList,
  },
  data() {
    return {
      filmName: "HotFilmList",
    };
  },
  created() {
    this.filmName=this.$route.query.filmName
  },
  methods: {
    changeFilmType(val) {

        this.filmName = val;
    },
  },
  created() {
    if (this.$route.query.filmName){
      this.filmName=this.$route.query.filmName
    }
  }
}

</script>

<style scoped>
@import "../assets/css/movie.css";
</style>
