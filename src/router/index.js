import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "../App";
import Index from "../views/Index";
import Cinema from "../views/Cinema";
import CinemaDetail from "../views/CinemaDetail";
import ChooseSeat from "../views/ChooseSeat";
import FilmDetail from "../views/FilmDetail";
import Login from "../views/Login";
import Movie from "../views/Movie";
import Order from "../views/Order";
import Comment from "../views/Comment";
import Register from "../views/Register";
import Board from "../views/Board";
import Search from "@/views/Search";
import indexApi from '../apis/indexApi.js';
import { Message } from "element-ui";

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'App',
  //   component: App
  // },
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: { show: true }
  },
  {
    path: '/index',
    name: 'Index',
    component: Index,
    meta: { show: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
    meta: { show: true }
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema,
    meta: { show: true }
  },
  {
    path: '/cinemaDetail',
    name: 'CinemaDetail',
    component: CinemaDetail
  },
  {
    path: '/chooseSeat',
    name: 'ChooseSeat',
    component: ChooseSeat
  },
  {
    path: '/filmDetail',
    name: 'FilmDetail',
    component: FilmDetail
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: { show: true }
  },
  {
    path: '/board',
    name: 'Board',
    component: Board,
    meta: { show: true }
  },
  {
    path: '/search',
    name: 'Search',
    component: Search,
    meta: { show: true }
  }, {
    path: '/comment',
    name: 'Comment',
    component: Comment,
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

const needCheckTokenArray = ["/chooseSeat", "/comment"];
import store from "../stores/indexStore";

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  // 2. 验证token是否有效
  if (token) { // 2.1 有token
    indexApi.user.checkTokenApi(token).then(res => {
      // 用于保存登录用户状态
      store.commit("userStore/SET_LOGIN_USER_INFO", res.data.user)
      next();
    }).catch(err => { // 2.2 失效
      localStorage.removeItem("token");
      // store.commit("SET_USER_INFO", {});
      Message({
        type: "warning",
        message: "登录信息失效,请重新登录...",
      });
      next("/login");
    })
  } else { // 3. 没有token信息
    // 3.1 需要登录的页面,不放行
    if (needCheckTokenArray.includes(to.path)) {
      Message({
        type: "warning",
        message: "请登录...",
      });
      next("/login");
    } else { // 3.2 其他非needCheckTokenArray数组中界面默认放行
      next();
    }
  }
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
})


export default router
