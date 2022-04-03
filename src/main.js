/*
 * @Author: TanGuangZhi
 * @Date: 2022-03-08 19:27:15 Tue
 * @LastEditTime: 2022-04-03 15:39:22 Sun
 * @LastEditors: TanGuangZhi
 * @Description: 
 * @KeyWords: Vue, Web-Server, ElementUI
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/indexStore.js'
import './plugins/element.js'
import indexApi from "./apis/indexApi.js"
import axios from "axios";

Vue.config.productionTip = false

//配置全局
axios.defaults.baseURL = "http://42.192.86.106:3000/"
Vue.prototype.$http = axios
Vue.prototype.$indexApi = indexApi;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
