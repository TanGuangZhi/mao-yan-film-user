<template>
  <div id="banner">
    <header class="dingbu">
      <nav>
        <a href="#" class="logo"></a>
        <div class="xiala1 bian">
          <div class="xiala1_1">
            <a href="#" class="cd">上海</a>
            <span class="sanjiao"></span>
            <ul>
              <div class="xiala1_1_d">
                定位城市：
                <router-link to="#">上海</router-link>
              </div>
              <li>
                <span>A</span>
                <div>
                  <a href="#">阿拉善盟</a>
                  <a href="#">鞍山</a>
                  <a href="#">安庆</a>
                  <a href="#">安阳</a>
                  <a href="#">阿坝</a>
                  <a href="#">安顺</a>
                  <a href="#">安康</a>
                  <a href="#">阿勒泰</a>
                  <a href="#">阿克苏</a>
                  <a href="#">安吉</a>
                  <a href="#">安丘</a>
                  <a href="#">安岳</a>
                  <a href="#">安平</a>
                  <a href="#">安宁</a>
                  <a href="#">安溪</a>
                  <a href="#">安化</a>
                  <a href="#">阿勒泰市</a>
                  <a href="#">安福</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <ul class="navbar">
          <li>
            <router-link
              to="/index"
              :class="{ bannerActive: '/index' == $route.path }"
            >
              首页
            </router-link>
          </li>
          <li :class="{ bannerActive: '/movie' == $route.path }">
            <router-link to="/movie">电影</router-link>
          </li>
          <li :class="{ bannerActive: '/cinema' == $route.path }">
            <router-link to="/cinema">影院</router-link>
          </li>
          <li :class="{ bannerActive: '/board' == $route.path }">
            <router-link to="/board">榜单</router-link>
          </li>
        </ul>
        <div class="shouji bian">
          <span class="shouji_1"></span>
          <span>APP下载</span>
          <span class="sanjiao"></span>
          <div class="shouji1">
            <div>
              <div></div>
            </div>
            <p>扫码下载APP</p>
            <p>选座更优惠</p>
          </div>
        </div>
        <form target="_blank" class="search-form">
          <input
            name="kw"
            class="search"
            v-model="SearchBox"
            type="search"
            maxlength="32"
            placeholder="找影视、导演、影院"
            autocomplete="off"
          />
          <button class="submit" type="button" @click="searchBtn"></button>
          <!--          <router-link :to="{path:'./search',query:{SearchBox}}" target="blank"></router-link>-->
        </form>
        <div class="denglu bian">
          <router-link to="./login" class="login">
            <img :src="'http://localhost:3000/' + userInfo.userImg" alt="" />
          </router-link>
          <span class="sanjiao"></span>
          <div>
            <router-link
              to="./login"
              v-if="!userInfo._id"
              target="blank"
              class="login1"
            >
              登录
            </router-link>
            <router-link
              to="./register"
              v-if="!userInfo._id"
              target="blank"
              class="login1"
            >
              注册
            </router-link>
            <span v-if="userInfo._id" class="login1" @click="orderCenter">
              订单中心
            </span>
            <span v-if="userInfo._id" class="login1" @click="logout">
              退出登录
            </span>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import bus from "../bus/bus.js";
import Index from "../views/Index.vue";
import Film from "../views/Movie.vue";
import Cinema from "../views/Cinema.vue";
import Board from "../views/Board.vue";

export default {
  name: "Banner",
  components: {
    Index,
    Film,
    Cinema,
    Board,
  },
  data() {
    return {
      SearchBox: "",
      userInfo: {},
      isActive: false,
      current: "Index",
    };
  },
  methods: {
    searchBtn() {
      if (this.SearchBox) {
        this.$router.push("./search").catch((err) => err);
        setTimeout(() => {
          bus.$emit("searchBtn", this.SearchBox);
          this.SearchBox = "";
        }, 20);
      } else {
        this.$router.push("./movie").catch((err) => err);
      }
    },
    // 1.
    logout() {
      localStorage.removeItem("loginUserInfo");
      localStorage.removeItem("token");
      window.location.reload();
    },

    // 2.
    orderCenter() {
      this.$router.push({
        path: "/order",
        query: { userId: this.userInfo._id },
      });
    },

    // 3.
    toggleActive(e) {
      e.target.className += " bannerActive";
    },
  },
  deactivated() {
    setTimeout(() => {
      bus.$off("searchBtn");
    }, 20);
  },
  created() {
    this.SearchBox = "";
    let loginUserInfo = this.$store.state.userStore.loginUserInfo;
    if (loginUserInfo) {
      this.userInfo = loginUserInfo;
    }
  },
};
</script>

<style scoped>
@import "../assets/css/banner.css";
</style>
